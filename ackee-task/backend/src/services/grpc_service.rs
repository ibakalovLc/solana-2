use ::{
    clap::Parser,
    futures::{ StreamExt },
    std::env::var,
    tonic::transport::channel::ClientTlsConfig,
    yellowstone_grpc_client::{ GeyserGrpcClient, Interceptor },
    yellowstone_grpc_proto::geyser::{
        SubscribeRequest,
        SubscribeRequestFilterTransactions,
        subscribe_update::UpdateOneof,
    },
};

use crate::{
    services::{
        broker_service::Broker,
        library_service::INIT_LIBRARY_EVENT,
        nft_service::MINT_NFT_EVENT,
        placed_bids_service::BID_PLACED_EVENT,
        winners_service::TRANSFER_NFT_EVENT,
    },
    structs::transactions_struct::TransactionEvent,
};

const BID_PLACED_DISCRIMINATOR: [u8; 8] = [209, 98, 122, 16, 194, 244, 76, 183];
const INIT_LIBRARY_DISCRIMINATOR: [u8; 8] = [225, 117, 68, 160, 27, 168, 128, 51];
const MINT_NFT_DISCRIMINATOR: [u8; 8] = [211, 57, 6, 167, 15, 219, 35, 251];
const TRANSFER_NFT_DISCRIMINATOR: [u8; 8] = [190, 28, 194, 8, 194, 218, 78, 78];

#[derive(Parser)]
struct Args {
    #[clap(
        short,
        long,
        default_value_t = String::from(
            var("GEYSER_GRPC_URL").unwrap_or_else(|_| "http://127.0.0.1:10000".to_string())
        )
    )]
    endpoint: String,

    #[clap(long)]
    x_token: Option<String>,
}

pub async fn ping_subscribe() -> anyhow::Result<GeyserGrpcClient<impl Interceptor>> {
    let args = Args::parse();

    Ok(
        GeyserGrpcClient::build_from_shared(args.endpoint)?
            .x_token(args.x_token)?
            .tls_config(ClientTlsConfig::new().with_native_roots())?
            .connect().await?
    )
}

pub async fn transactions_subscribe(address: &str) -> anyhow::Result<()> {
    let args = Args::parse();
    let mut request = SubscribeRequest::default();

    request.transactions.insert("serum".to_string(), SubscribeRequestFilterTransactions {
        vote: false.into(),
        failed: false.into(),
        signature: None,
        account_include: vec![address.to_string()],
        account_exclude: vec![],
        account_required: vec![],
    });

    let mut client = GeyserGrpcClient::build_from_shared(args.endpoint)?
        .x_token(args.x_token)?
        .tls_config(ClientTlsConfig::new().with_native_roots())?
        .connect().await?;

    let (_, stream) = client.subscribe_with_request(Some(request)).await?;

    let _event = stream
        .inspect(|_| {
            log::info!("Stream item received");
        })
        .for_each(|result| async {
            match result {
                Ok(data) => {
                    if let Some(UpdateOneof::Transaction(tx_update)) = data.update_oneof {
                        let tx_info = tx_update.transaction.unwrap();
                        let signature = bs58::encode(&tx_info.signature).into_string();

                        let logs = tx_info.meta.map(|m| m.log_messages).unwrap_or_default();
                        let transaction = tx_info.transaction.unwrap();

                        let event = TransactionEvent {
                            signature,
                            slot: tx_update.slot,
                            is_vote: tx_info.is_vote,
                            index: tx_info.index,
                            timestamp: data.created_at.map(|ts| ts.to_string()).unwrap_or_default(),
                            transaction_message: transaction.message.unwrap_or_default().into(),
                            transaction_signatures: transaction.signatures
                                .iter()
                                .map(|s| bs58::encode(s).into_string())
                                .collect(),
                            logs,
                        };
                        let json = serde_json::to_string(&event).unwrap_or_default();

                        for ix in event.transaction_message.instructions {
                            if ix.data.len() < 8 {
                                continue;
                            }

                            let discriminator: [u8; 8] = ix.data[..8].try_into().unwrap();

                            match discriminator {
                                BID_PLACED_DISCRIMINATOR => {
                                    Broker::publish(
                                        BID_PLACED_EVENT,
                                        json.clone().into()
                                    ).await.ok();

                                    log::info!(
                                        "{} event published to NATS broker",
                                        BID_PLACED_EVENT
                                    );
                                    break;
                                }
                                INIT_LIBRARY_DISCRIMINATOR => {
                                    Broker::publish(
                                        INIT_LIBRARY_EVENT,
                                        json.clone().into()
                                    ).await.ok();

                                    log::info!(
                                        "{} event published to NATS broker",
                                        INIT_LIBRARY_EVENT
                                    );
                                    break;
                                }
                                MINT_NFT_DISCRIMINATOR => {
                                    Broker::publish(MINT_NFT_EVENT, json.clone().into()).await.ok();

                                    log::info!("{} event published to NATS broker", MINT_NFT_EVENT);
                                    break;
                                }
                                TRANSFER_NFT_DISCRIMINATOR => {
                                    Broker::publish(
                                        TRANSFER_NFT_EVENT,
                                        json.clone().into()
                                    ).await.ok();

                                    log::info!(
                                        "{} event published to NATS broker",
                                        TRANSFER_NFT_EVENT
                                    );

                                    break;
                                }
                                _ => {}
                            }
                        }
                    }
                }
                Err(e) => {
                    log::error!("Stream error: {:?}", e);
                }
            }
        }).await;

    Ok(())
}

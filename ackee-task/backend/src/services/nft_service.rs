use actix_web::web::Bytes;
use base64::{ Engine, engine::general_purpose::STANDARD };
use borsh::BorshDeserialize;
use futures::StreamExt;
use serde::Serialize;

use crate::models::nft_model::{ MintNft, MintNftPayload };
use crate::routes::transactions_route::ALL_EVENTS;
use crate::services::db_service::Database;
use crate::structs::transactions_struct::TransactionEvent;
use crate::services::broker_service::Broker;

pub static MINT_NFT_EVENT: &str = "mint_nft";

#[derive(Serialize)]
struct MintNftEvent {
    event_type: &'static str,
    data: MintNft,
}

pub async fn create_mint_nft_event() {
    tokio::spawn(async move {
        match Broker::subscribe(MINT_NFT_EVENT).await {
            Ok(broker) => {
                broker.for_each_concurrent(None, |msg| async move {
                    let payload: TransactionEvent = serde_json
                        ::from_slice(&msg.payload)
                        .unwrap_or_default();

                    save_mint_nft(payload).await;
                }).await;
            }
            Err(err) => {
                eprintln!("Failed to subscribe to broker: {}", err);
            }
        }
    });
}

pub async fn save_mint_nft(payload: TransactionEvent) {
    let database = Database::connect().await.unwrap();
    let client = database.pool.get().await.expect("Failed to get pool connection");

    let log = payload.logs.iter().find(|log| log.contains("Program data:"));

    if let Some(data) = log.and_then(|l| l.strip_prefix("Program data: ")) {
        let bytes = STANDARD.decode(data).expect("Invalid base64");

        let payload = MintNftPayload::try_from_slice(&bytes[8..]).expect("Failed to deserialize");

        let nft = MintNft::try_from(payload).unwrap();
        log::info!("Saving mint nft event: {:?}", nft);
        let query =
            "INSERT INTO nfts (id, timestamp, nft_price, nft_bid_step, name, library_address, nft_address) VALUES ($1, $2, $3, $4, $5, $6, $7)";
        client
            .execute(
                query,
                &[
                    &nft.id,
                    &nft.timestamp,
                    &(nft.nft_price as i64),
                    &(nft.nft_bid_step as i64),
                    &nft.name,
                    &nft.library_address,
                    &nft.nft_address,
                ]
            ).await
            .unwrap();

        // Publish to all_events queue
        let event = MintNftEvent {
            event_type: "mint_nft",
            data: nft,
        };
        if let Ok(json) = serde_json::to_string(&event) {
            let _ = Broker::publish(ALL_EVENTS, Bytes::from(json)).await;
        }
    }
}

pub async fn create_nft_table_if_not_exists() {
    let database = Database::connect().await.unwrap();

    let client = database.pool.get().await.expect("Failed to get pool connection");
    let create_table_query =
        "CREATE TABLE IF NOT EXISTS nfts (
        id UUID PRIMARY KEY,
        timestamp TIMESTAMPTZ NOT NULL,
        nft_price BIGINT NOT NULL,
        nft_bid_step BIGINT NOT NULL,
        name TEXT NOT NULL,
        library_address TEXT NOT NULL,
        nft_address TEXT NOT NULL
    )";

    client.execute(create_table_query, &[]).await.unwrap();

    let create_index_query =
        "CREATE INDEX IF NOT EXISTS idx_nfts_library_address ON nfts(library_address)";

    client.execute(create_index_query, &[]).await.unwrap();
}

pub async fn get_nfts_by_collection_address(
    collection_address: String
) -> Result<Vec<MintNft>, Box<dyn std::error::Error>> {
    let database = Database::connect().await.unwrap();
    let client = database.pool.get().await.expect("Failed to get pool connection");

    let query = "SELECT * FROM nfts WHERE library_address = $1";
    let rows = client.query(query, &[&collection_address]).await.unwrap();

    Ok(MintNft::from_row_all(&rows))
}

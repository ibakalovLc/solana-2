use actix_web::web::Bytes;
use base64::{ Engine, engine::general_purpose::STANDARD };
use borsh::BorshDeserialize;
use futures::StreamExt;
use serde::Serialize;

use crate::models::winners_model::{ TransferNft, TransferNftPayload };
use crate::routes::transactions_route::ALL_EVENTS;
use crate::services::db_service::Database;
use crate::structs::transactions_struct::TransactionEvent;
use crate::services::broker_service::Broker;

pub static TRANSFER_NFT_EVENT: &str = "transfer_nft";

#[derive(Serialize)]
struct TransferNftEvent {
    event_type: &'static str,
    data: TransferNft,
}

pub async fn create_transfer_nft_event() {
    tokio::spawn(async move {
        match Broker::subscribe(TRANSFER_NFT_EVENT).await {
            Ok(broker) => {
                broker.for_each_concurrent(None, |msg| async move {
                    let payload: TransactionEvent = serde_json
                        ::from_slice(&msg.payload)
                        .unwrap_or_default();

                    save_transfer_nft(payload).await;
                }).await;
            }
            Err(err) => {
                eprintln!("Failed to subscribe to broker: {}", err);
            }
        }
    });
}

pub async fn save_transfer_nft(payload: TransactionEvent) {
    let database = Database::connect().await.unwrap();
    let client = database.pool.get().await.expect("Failed to get pool connection");

    let log = payload.logs.iter().find(|log| log.contains("Program data:"));

    if let Some(data) = log.and_then(|l| l.strip_prefix("Program data: ")) {
        let bytes = STANDARD.decode(data).expect("Invalid base64");

        let payload = TransferNftPayload::try_from_slice(&bytes[8..]).expect(
            "Failed to deserialize"
        );

        let transfer = TransferNft::try_from(payload).unwrap();
        log::info!("Saving transfer nft event: {:?}", transfer);
        let query =
            "INSERT INTO winners (id, timestamp, nft_name, recipient, owner) VALUES ($1, $2, $3, $4, $5)";
        client
            .execute(
                query,
                &[
                    &transfer.id,
                    &transfer.timestamp,
                    &transfer.nft_name,
                    &transfer.recipient,
                    &transfer.owner,
                ]
            ).await
            .unwrap();

        // Publish to all_events queue
        let event = TransferNftEvent {
            event_type: "transfer_nft",
            data: transfer,
        };
        if let Ok(json) = serde_json::to_string(&event) {
            let _ = Broker::publish(ALL_EVENTS, Bytes::from(json)).await;
        }
    }
}

pub async fn create_winners_table_if_not_exists() {
    let database = Database::connect().await.unwrap();

    let client = database.pool.get().await.expect("Failed to get pool connection");
    let query =
        "CREATE TABLE IF NOT EXISTS winners (
        id UUID PRIMARY KEY,
        timestamp TIMESTAMPTZ NOT NULL,
        nft_name TEXT NOT NULL,
        recipient TEXT NOT NULL,
        owner TEXT NOT NULL
    )";

    client.execute(query, &[]).await.unwrap();
}

pub async fn get_winners_by_nft_address(
    nft_address: String
) -> Result<Vec<TransferNft>, Box<dyn std::error::Error>> {
    let database = Database::connect().await.unwrap();
    let client = database.pool.get().await.expect("Failed to get pool connection");

    let query = "SELECT * FROM winners WHERE nft_name = $1";
    let rows = client.query(query, &[&nft_address]).await.unwrap();

    Ok(TransferNft::from_row_all(&rows))
}

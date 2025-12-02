use actix_web::web::Bytes;
use base64::{ Engine, engine::general_purpose::STANDARD };
use borsh::BorshDeserialize;
use futures::StreamExt;
use serde::Serialize;

use crate::models::library_model::{ InitLibrary, InitLibraryPayload };
use crate::routes::transactions_route::ALL_EVENTS;
use crate::services::db_service::Database;
use crate::structs::transactions_struct::TransactionEvent;
use crate::services::broker_service::Broker;

pub static INIT_LIBRARY_EVENT: &str = "init_library";

#[derive(Serialize)]
struct InitLibraryEvent {
    event_type: &'static str,
    data: InitLibrary,
}

pub async fn create_init_library_event() {
    tokio::spawn(async move {
        match Broker::subscribe(INIT_LIBRARY_EVENT).await {
            Ok(broker) => {
                broker.for_each_concurrent(None, |msg| async move {
                    let payload: TransactionEvent = serde_json
                        ::from_slice(&msg.payload)
                        .unwrap_or_default();

                    save_init_library(payload).await;
                }).await;
            }
            Err(err) => {
                eprintln!("Failed to subscribe to broker: {}", err);
            }
        }
    });
}

pub async fn save_init_library(payload: TransactionEvent) {
    let database = Database::connect().await.unwrap();
    let client = database.pool.get().await.expect("Failed to get pool connection");

    let log = payload.logs.iter().find(|log| log.contains("Program data:"));

    if let Some(data) = log.and_then(|l| l.strip_prefix("Program data: ")) {
        let bytes = STANDARD.decode(data).expect("Invalid base64");

        let payload = InitLibraryPayload::try_from_slice(&bytes[8..]).expect(
            "Failed to deserialize"
        );

        let library = InitLibrary::try_from(payload).unwrap();
        log::info!("Saving init library event: {:?}", library);
        let query =
            "INSERT INTO libraries (id, timestamp, name, library_address) VALUES ($1, $2, $3, $4)";
        client
            .execute(
                query,
                &[&library.id, &library.timestamp, &library.name, &library.library_address]
            ).await
            .unwrap();

        // Publish to all_events queue
        let event = InitLibraryEvent {
            event_type: "init_library",
            data: library,
        };
        if let Ok(json) = serde_json::to_string(&event) {
            let _ = Broker::publish(ALL_EVENTS, Bytes::from(json)).await;
        }
    }
}

pub async fn create_library_table_if_not_exists() {
    let database = Database::connect().await.unwrap();

    let client = database.pool.get().await.expect("Failed to get pool connection");
    let query =
        "CREATE TABLE IF NOT EXISTS libraries (
        id UUID PRIMARY KEY,
        timestamp TIMESTAMPTZ NOT NULL,
        name TEXT NOT NULL,
        library_address TEXT NOT NULL UNIQUE
    )";

    client.execute(query, &[]).await.unwrap();
}

pub async fn get_collections_by_address(
    collection_address: String
) -> Result<Vec<InitLibrary>, Box<dyn std::error::Error>> {
    let database = Database::connect().await.unwrap();
    let client = database.pool.get().await.expect("Failed to get pool connection");

    let query = "SELECT * FROM libraries WHERE library_address = $1";
    let rows = client.query(query, &[&collection_address]).await.unwrap();

    Ok(InitLibrary::from_row_all(&rows))
}

use actix_web::web::Bytes;
use base64::{ Engine, engine::general_purpose::STANDARD };
use borsh::BorshDeserialize;
use futures::StreamExt;
use serde::Serialize;

use crate::models::placed_bids_model::PlacedBids;
use crate::routes::transactions_route::ALL_EVENTS;
use crate::services::db_service::Database;
use crate::structs::transactions_struct::TransactionEvent;
use crate::{ models::placed_bids_model::PlacedBidsPayload, services::broker_service::Broker };

pub static BID_PLACED_EVENT: &str = "bid_placed";

#[derive(Serialize)]
struct BidPlacedEvent {
    event_type: &'static str,
    data: PlacedBids,
}

pub async fn create_bid_placed_event() {
    tokio::spawn(async move {
        match Broker::subscribe(BID_PLACED_EVENT).await {
            Ok(broker) => {
                broker.for_each_concurrent(None, |msg| async move {
                    let payload: TransactionEvent = serde_json
                        ::from_slice(&msg.payload)
                        .unwrap_or_default();

                    save_bid_placed(payload).await;
                }).await;
            }
            Err(err) => {
                eprintln!("Failed to subscribe to broker: {}", err);
            }
        }
    });
}

pub async fn save_bid_placed(payload: TransactionEvent) {
    let database = match Database::connect().await {
        Ok(db) => db,
        Err(e) => {
            log::error!("Failed to connect to database: {}", e);
            return;
        }
    };

    let client = match database.pool.get().await {
        Ok(client) => client,
        Err(e) => {
            log::error!("Failed to get pool connection: {}", e);
            return;
        }
    };

    let log = payload.logs.iter().find(|log| log.contains("Program data:"));

    if let Some(data) = log.and_then(|l| l.strip_prefix("Program data: ")) {
        let bytes = match STANDARD.decode(data) {
            Ok(b) => b,
            Err(e) => {
                log::error!("Failed to decode base64: {}", e);
                return;
            }
        };

        let payload = match PlacedBidsPayload::try_from_slice(&bytes[8..]) {
            Ok(p) => p,
            Err(e) => {
                log::error!("Failed to deserialize payload: {}", e);
                return;
            }
        };

        let bid = match PlacedBids::try_from(payload) {
            Ok(b) => b,
            Err(e) => {
                log::error!("Failed to convert payload to PlacedBids: {}", e);
                return;
            }
        };

        log::info!("Saving bid placed event: {:?}", bid);
        let query =
            "INSERT INTO placed_bids (id, timestamp, nft_name, nft_address, bidder, amount) VALUES ($1, $2, $3, $4, $5, $6)";

        if let Err(e) = client
            .execute(
                query,
                &[
                    &bid.id,
                    &bid.timestamp,
                    &bid.nft_name,
                    &bid.nft_address,
                    &bid.bidder,
                    &(bid.amount as i64),
                ]
            ).await
        {
            log::error!("Failed to insert bid into database: {}", e);
            return;
        }

        // Publish to all_events queue
        let event = BidPlacedEvent {
            event_type: "bid_placed",
            data: bid,
        };
        if let Ok(json) = serde_json::to_string(&event) {
            if let Err(e) = Broker::publish(ALL_EVENTS, Bytes::from(json)).await {
                log::error!("Failed to publish event to broker: {}", e);
            }
        }
    }
}

pub async fn create_bid_table_if_not_exists() {
    let database = match Database::connect().await {
        Ok(db) => db,
        Err(e) => {
            log::error!("Failed to connect to database: {}", e);
            return;
        }
    };

    let client = match database.pool.get().await {
        Ok(client) => client,
        Err(e) => {
            log::error!("Failed to get pool connection: {}", e);
            return;
        }
    };

    let query =
        "CREATE TABLE IF NOT EXISTS placed_bids (
        id UUID PRIMARY KEY,
        timestamp TIMESTAMPTZ NOT NULL,
        nft_name TEXT NOT NULL,
        nft_address TEXT NOT NULL,
        bidder TEXT NOT NULL,
        amount BIGINT NOT NULL
    )";

    if let Err(e) = client.execute(query, &[]).await {
        log::error!("Failed to create placed_bids table: {}", e);
    } else {
        log::info!("placed_bids table created or already exists");
    }
}

pub async fn get_placed_bids_by_nft_address(
    address: String
) -> Result<Vec<PlacedBids>, Box<dyn std::error::Error>> {
    let database = Database::connect().await?;
    let client = database.pool.get().await
        .map_err(|e| format!("Failed to get pool connection: {}", e))?;

    let query = "SELECT * FROM placed_bids WHERE nft_address = $1";
    let rows = client.query(query, &[&address]).await?;

    Ok(PlacedBids::from_row_all(&rows))
}

pub async fn get_placed_bids_by_bidder(
    bidder: String
) -> Result<Vec<PlacedBids>, Box<dyn std::error::Error>> {
    let database = Database::connect().await?;
    let client = database.pool.get().await
        .map_err(|e| format!("Failed to get pool connection: {}", e))?;

    let query = "SELECT * FROM placed_bids WHERE bidder = $1";
    let rows = client.query(query, &[&bidder]).await?;

    Ok(PlacedBids::from_row_all(&rows))
}

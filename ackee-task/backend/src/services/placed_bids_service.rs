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
    let database = Database::connect().await.unwrap();
    let client = database.pool.get().await.expect("Failed to get pool connection");

    let log = payload.logs.iter().find(|log| log.contains("Program data:"));

    if let Some(data) = log.and_then(|l| l.strip_prefix("Program data: ")) {
        let bytes = STANDARD.decode(data).expect("Invalid base64");

        let payload = PlacedBidsPayload::try_from_slice(&bytes[8..]).expect(
            "Failed to deserialize"
        );

        let bid = PlacedBids::try_from(payload).unwrap();
        log::info!("Saving bid placed event: {:?}", bid);
        let query =
            "INSERT INTO placed_bids (id, timestamp, nft_name, nft_address, bidder, amount) VALUES ($1, $2, $3, $4, $5, $6)";
        client
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
            .unwrap();

        // Publish to all_events queue
        let event = BidPlacedEvent {
            event_type: "bid_placed",
            data: bid,
        };
        if let Ok(json) = serde_json::to_string(&event) {
            let _ = Broker::publish(ALL_EVENTS, Bytes::from(json)).await;
        }
    }
}

pub async fn create_bid_table_if_not_exists() {
    let database = Database::connect().await.unwrap();

    let client = database.pool.get().await.expect("Failed to get pool connection");
    let query =
        "CREATE TABLE IF NOT EXISTS placed_bids (
        id UUID PRIMARY KEY,
        timestamp TIMESTAMPTZ NOT NULL,
        nft_name TEXT NOT NULL,
        nft_address TEXT NOT NULL,
        bidder TEXT NOT NULL,
        amount BIGINT NOT NULL
    )";

    client.execute(query, &[]).await.unwrap();
}

pub async fn get_placed_bids_by_nft_address(
    address: String
) -> Result<Vec<PlacedBids>, Box<dyn std::error::Error>> {
    let database = Database::connect().await.unwrap();
    let client = database.pool.get().await.expect("Failed to get pool connection");

    let query = "SELECT * FROM placed_bids WHERE nft_address = $1";
    let rows = client.query(query, &[&address]).await.unwrap();

    Ok(PlacedBids::from_row_all(&rows))
}

pub async fn get_placed_bids_by_bidder(
    bidder: String
) -> Result<Vec<PlacedBids>, Box<dyn std::error::Error>> {
    let database = Database::connect().await.unwrap();
    let client = database.pool.get().await.expect("Failed to get pool connection");

    let query = "SELECT * FROM placed_bids WHERE bidder = $1";
    let rows = client.query(query, &[&bidder]).await.unwrap();

    Ok(PlacedBids::from_row_all(&rows))
}

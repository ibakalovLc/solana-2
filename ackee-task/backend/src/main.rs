use std::{ env };
use actix_web::{ App, HttpServer, web };

use crate::{
    routes::{
        grpc_route::{ ping_subscribe_route },
        transactions_route::{
            get_placed_bids_route,
            get_placed_bids_by_bidder_route,
            get_winners_route,
            get_collections_route,
            get_nfts_by_collection_route,
            events_sse_route,
        },
    },
    services::{
        grpc_service::transactions_subscribe,
        library_service::{ create_init_library_event, create_library_table_if_not_exists },
        nft_service::{ create_mint_nft_event, create_nft_table_if_not_exists },
        placed_bids_service::{ create_bid_placed_event, create_bid_table_if_not_exists },
        winners_service::{ create_transfer_nft_event, create_winners_table_if_not_exists },
    },
};

const PROGRAM_ADDRESS: &str = "EDFwnAysttkv5TW7davfHDuFctxnZxNRb8WCU2AVf7um";

mod models;
mod routes;
mod services;
mod structs;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Initialize logger with default level if not set
    if env::var(env_logger::DEFAULT_FILTER_ENV).is_err() {
        env::set_var(env_logger::DEFAULT_FILTER_ENV, "info");
    }

    env_logger::init();

    // Connect to database with proper error handling
    let connection = services::db_service::Database::connect().await
        .map_err(|e| {
            log::error!("Failed to connect to database: {}", e);
            std::io::Error::new(std::io::ErrorKind::Other, format!("Database connection failed: {}", e))
        })?;

    log::info!("Database connection established successfully");

    // Initialize event subscribers
    create_init_library_event().await;
    create_bid_placed_event().await;
    create_mint_nft_event().await;
    create_transfer_nft_event().await;

    // Spawn gRPC subscription task
    tokio::spawn(async move {
        match transactions_subscribe(PROGRAM_ADDRESS).await {
            Ok(_) => {
                log::info!("Successfully subscribed to transactions");
            }
            Err(err) => {
                log::error!("Failed to subscribe to transactions: {}", err);
            }
        }
    });

    // Create database tables
    log::info!("Creating database tables if not exists...");
    create_bid_table_if_not_exists().await;
    create_winners_table_if_not_exists().await;
    create_library_table_if_not_exists().await;
    create_nft_table_if_not_exists().await;

    log::info!("Server starting on http://127.0.0.1:8080");

    // Start HTTP server
    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(connection.clone()))
            .service(get_placed_bids_route)
            .service(get_placed_bids_by_bidder_route)
            .service(get_winners_route)
            .service(get_collections_route)
            .service(get_nfts_by_collection_route)
            .service(events_sse_route)
            .service(ping_subscribe_route)
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}

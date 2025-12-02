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

const PORGRAM_ADDRESS: &str = "EDFwnAysttkv5TW7davfHDuFctxnZxNRb8WCU2AVf7um";

mod models;
mod routes;
mod services;
mod structs;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    unsafe {
        env::set_var(
            env_logger::DEFAULT_FILTER_ENV,
            env::var_os(env_logger::DEFAULT_FILTER_ENV).unwrap_or_else(|| "info".into())
        );
    }

    env_logger::init();

    let connection: Result<
        services::db_service::Database,
        postgres::Error
    > = services::db_service::Database::connect().await;

    create_init_library_event().await;
    create_bid_placed_event().await;
    create_mint_nft_event().await;
    create_transfer_nft_event().await;

    tokio::spawn(async move {
        match transactions_subscribe(PORGRAM_ADDRESS).await {
            Ok(_) => {
                log::info!("Successfully subscribed to transactions");
            }
            Err(err) => {
                log::error!("Failed to subscribe to transactions: {}", err);
            }
        }
    });

    match connection {
        Ok(connection) => {
            println!("Server started on http://127.0.0.1:8080");
            create_bid_table_if_not_exists().await;
            create_winners_table_if_not_exists().await;
            create_library_table_if_not_exists().await;
            create_nft_table_if_not_exists().await;

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
                .run().await?;

            Ok(())
        }
        Err(e) => {
            println!("Error connecting to database: {}", e);
            return Err(std::io::Error::new(std::io::ErrorKind::Other, e));
        }
    }
}

use actix_web::{ HttpResponse, web::{ self, Bytes }, get };
use futures::StreamExt;
use tokio::sync::oneshot;

use crate::services::{
    placed_bids_service::{ get_placed_bids_by_nft_address, get_placed_bids_by_bidder },
    winners_service::get_winners_by_nft_address,
    library_service::get_collections_by_address,
    nft_service::get_nfts_by_collection_address,
    broker_service::Broker,
};

pub static ALL_EVENTS: &str = "all_events";

macro_rules! validate_input {
    ($input:expr, $max_length:expr) => {
        {
            let input = $input;
            if input.is_empty() {
                return HttpResponse::BadRequest().body("Invalid input: Input cannot be empty");
            }
            if input.len() > $max_length {
                return HttpResponse::BadRequest().body(
                    format!("Invalid input: Input exceeds maximum length of {}", $max_length)
                );
            }
        }
    };
}

macro_rules! validate_solana_address {
    ($address:expr) => {
        {
            let address = $address;
            // Solana addresses are base58 encoded and typically 32-44 characters
            let is_valid = address.len() >= 32 && address.len() <= 44 && address.chars().all(|c| {
                c.is_ascii_alphanumeric() && !['0', 'O', 'I', 'l'].contains(&c)
            });
            if !is_valid {
                return HttpResponse::BadRequest().body("Invalid Solana address format");
            }
        }
    };
}

macro_rules! validate_solana_input {
    ($input:expr, $max_length:expr) => {
        {
            validate_input!($input, $max_length);
            validate_solana_address!($input);
        }
    };
}

struct StreamGuard {
    _guard: oneshot::Sender<()>,
}

impl Drop for StreamGuard {
    fn drop(&mut self) {
        log::warn!("🔴 SSE connection closed - client disconnected");
    }
}

#[get("/placed-bids/{nft_address}")]
pub async fn get_placed_bids_route(path: web::Path<String>) -> HttpResponse {
    let nft_address = path.into_inner();

    validate_solana_input!(&nft_address, 100);

    match get_placed_bids_by_nft_address(nft_address).await {
        Ok(rows) => HttpResponse::Ok().json(rows),
        Err(err) => {
            log::error!("Database error in get_placed_bids_route: {}", err);
            HttpResponse::InternalServerError().body("Internal server error")
        }
    }
}

#[get("/placed-bids/bidder/{bidder_address}")]
pub async fn get_placed_bids_by_bidder_route(path: web::Path<String>) -> HttpResponse {
    let bidder_address = path.into_inner();

    validate_solana_input!(&bidder_address, 100);

    match get_placed_bids_by_bidder(bidder_address).await {
        Ok(rows) => HttpResponse::Ok().json(rows),
        Err(err) => {
            log::error!("Database error in get_placed_bids_by_bidder_route: {}", err);
            HttpResponse::InternalServerError().body("Internal server error")
        }
    }
}

#[get("/winners/{nft_address}")]
pub async fn get_winners_route(path: web::Path<String>) -> HttpResponse {
    let nft_address = path.into_inner();

    validate_input!(&nft_address, 100);

    match get_winners_by_nft_address(nft_address).await {
        Ok(rows) => HttpResponse::Ok().json(rows),
        Err(err) => {
            log::error!("Database error in get_winners_route: {}", err);
            HttpResponse::InternalServerError().body("Internal server error")
        }
    }
}

#[get("/collections/{collection_address}")]
pub async fn get_collections_route(path: web::Path<String>) -> HttpResponse {
    let collection_address = path.into_inner();

    validate_solana_input!(&collection_address, 100);

    match get_collections_by_address(collection_address).await {
        Ok(rows) => HttpResponse::Ok().json(rows),
        Err(err) => {
            log::error!("Database error in get_collections_route: {}", err);
            HttpResponse::InternalServerError().body("Internal server error")
        }
    }
}

#[get("/nfts/{collection_address}")]
pub async fn get_nfts_by_collection_route(path: web::Path<String>) -> HttpResponse {
    let collection_address = path.into_inner();

    validate_solana_input!(&collection_address, 100);

    match get_nfts_by_collection_address(collection_address).await {
        Ok(rows) => HttpResponse::Ok().json(rows),
        Err(err) => {
            log::error!("Database error in get_nfts_by_collection_route: {}", err);
            HttpResponse::InternalServerError().body("Internal server error")
        }
    }
}

#[get("/events")]
pub async fn events_sse_route() -> HttpResponse {
    let subscriber = match Broker::subscribe(ALL_EVENTS).await {
        Ok(sub) => sub,
        Err(err) => {
            log::error!("Failed to subscribe to events: {}", err);
            return HttpResponse::InternalServerError().body(
                format!("Failed to subscribe: {}", err)
            );
        }
    };

    let (guard_tx, guard_rx) = oneshot::channel();
    let _guard = StreamGuard { _guard: guard_tx };

    let byte_stream = subscriber
        .map(move |msg| {
            log::info!("Received data:");
            let _ = &_guard;
            let data = String::from_utf8_lossy(&msg.payload);
            let sse_data = format!("data: {}\n\n", data);
            Ok::<Bytes, std::io::Error>(Bytes::from(sse_data))
        })
        .take_until(async {
            guard_rx.await.ok();
        });

    HttpResponse::Ok()
        .content_type("text/event-stream")
        .insert_header(("Cache-Control", "no-cache"))
        .insert_header(("X-Accel-Buffering", "no"))
        .streaming(byte_stream)
}

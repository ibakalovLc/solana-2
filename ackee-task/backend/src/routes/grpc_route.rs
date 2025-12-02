use actix_web::{ HttpResponse, get, web::Bytes };

use serde::Serialize;
use serde_json;

use futures::stream::StreamExt;
use tokio::sync::oneshot;

use crate::{ services::{ grpc_service::{ ping_subscribe } } };

struct StreamGuard {
    _guard: tokio::sync::oneshot::Sender<()>,
}

impl Drop for StreamGuard {
    fn drop(&mut self) {
        log::warn!("🔴 TCP connection closed - client disconnected");
    }
}

#[derive(Serialize, Debug)]
#[serde(tag = "event")]
struct PingEvent {
    timestamp: String,
}

#[get("/ping")]
async fn ping_subscribe_route() -> HttpResponse {
    let (_subscribe_tx, stream) = ping_subscribe().await.unwrap().subscribe().await.unwrap();
    let (guard_tx, guard_rx) = oneshot::channel();
    let _guard = StreamGuard { _guard: guard_tx };

    let byte_stream = stream
        .inspect(|_| {
            log::info!("Stream item received");
        })
        .map(move |result| {
            let _ = &_guard;
            match result {
                Ok(data) => {
                    log::info!("Received data: {:?}", data);
                    let response = PingEvent {
                        timestamp: data.created_at.map(|ts| ts.to_string()).unwrap_or_default(),
                    };

                    Ok::<Bytes, std::io::Error>(
                        Bytes::from(
                            serde_json::to_string(&response).expect("Failed to serialize event")
                        )
                    )
                }
                Err(e) => {
                    log::error!("Received data:");
                    let error_data =
                        format!("data: {{\"type\":\"Error\",\"message\":\"{}\"}}\n\n", e);

                    Ok(Bytes::from(error_data))
                }
            }
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

use std::{ env::var };
use std::error::Error;
use actix_web::web::Bytes;
use async_nats;
use tokio::sync::OnceCell;
use clap::Parser;

static BROKER: OnceCell<Broker> = OnceCell::const_new();

#[derive(Parser)]
struct Args {
    #[clap(
        short,
        long,
        default_value_t = String::from(
            var("NATS_URL").unwrap_or_else(|_| "nats://localhost:4222".to_string())
        )
    )]
    endpoint: String,
}

#[derive(Clone)]
pub struct Broker {
    pub connection: async_nats::Client,
}

impl Broker {
    pub async fn connection() -> Result<&'static Broker, Box<dyn Error + Send + Sync>> {
        let args: Args = Args::parse();

        BROKER.get_or_try_init(|| async move {
            let connection = async_nats::connect(&args.endpoint).await?;
            Ok(Broker { connection })
        }).await.map_err(|e: Box<dyn Error + Send + Sync>| e.into())
    }

    pub async fn subscribe(
        topic: &str
    ) -> Result<async_nats::Subscriber, Box<dyn Error + Send + Sync>> {
        match Broker::connection().await {
            Ok(broker) => {
                match broker.connection.subscribe(topic.to_string()).await {
                    Ok(subscriber) => Ok(subscriber),
                    Err(e) => {
                        log::error!("Error subscribing to test: {}", e);

                        Err(e.into())
                    }
                }
            }
            Err(e) => {
                log::error!("Error connecting to broker: {}", e);
                Err(e)
            }
        }
    }

    pub async fn publish(topic: &str, payload: Bytes) -> Result<(), Box<dyn Error + Send + Sync>> {
        match Broker::connection().await {
            Ok(broker) => {
                let topic = topic.to_string();

                tokio::spawn(async move {
                    if let Err(e) = broker.connection.publish(topic, payload).await {
                        log::error!("Error publishing to test: {}", e);
                    }
                });

                Ok(())
            }
            Err(e) => {
                log::error!("Error connecting to broker: {}", e);
                Err(e.into())
            }
        }
    }
}

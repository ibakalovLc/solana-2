use borsh::BorshDeserialize;
use chrono::{ DateTime, Utc };
use serde::{ Deserialize, Serialize };
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct PlacedBids {
    pub id: Uuid,
    pub timestamp: DateTime<Utc>,
    pub nft_name: String,
    pub nft_address: String,
    pub bidder: String,
    pub amount: u64,
}

#[derive(Debug, Serialize, Deserialize, BorshDeserialize, Default)]
pub struct PlacedBidsPayload {
    pub nft_name: String,
    pub nft_address: [u8; 32],
    pub bidder: [u8; 32],
    pub amount: u64,
    pub timestamp: i64,
}

impl TryFrom<PlacedBidsPayload> for PlacedBids {
    type Error = Box<dyn std::error::Error>;

    fn try_from(item: PlacedBidsPayload) -> Result<Self, Self::Error> {
        let timestamp = DateTime::from_timestamp(item.timestamp, 0).ok_or("Invalid timestamp")?;

        Ok(Self {
            id: Uuid::now_v7(),
            nft_name: item.nft_name,
            nft_address: bs58::encode(item.nft_address).into_string(),
            bidder: bs58::encode(item.bidder).into_string(),
            amount: item.amount,
            timestamp: DateTime::from(timestamp),
        })
    }
}

impl PlacedBids {
    pub fn from_row_all(row: &Vec<tokio_postgres::Row>) -> Vec<Self> {
        row.iter()
            .map(|row| PlacedBids {
                id: row.get("id"),
                timestamp: row.get::<_, std::time::SystemTime>("timestamp").into(),
                nft_name: row.get("nft_name"),
                nft_address: row.get("nft_address"),
                bidder: row.get("bidder"),
                amount: row.get::<_, i64>("amount") as u64,
            })
            .collect()
    }
}

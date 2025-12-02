use borsh::BorshDeserialize;
use chrono::{ DateTime, Utc };
use serde::{ Deserialize, Serialize };
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct MintNft {
    pub id: Uuid,
    pub timestamp: DateTime<Utc>,
    pub nft_price: u64,
    pub nft_bid_step: u64,
    pub name: String,
    pub library_address: String,
    pub nft_address: String,
}

#[derive(Debug, Serialize, Deserialize, BorshDeserialize, Default)]
pub struct MintNftPayload {
    pub name: String,
    pub timestamp: i64,
    pub library_address: [u8; 32],
    pub nft_price: u64,
    pub nft_bid_step: u64,
    pub nft_address: [u8; 32],
}

impl TryFrom<MintNftPayload> for MintNft {
    type Error = Box<dyn std::error::Error>;

    fn try_from(item: MintNftPayload) -> Result<Self, Self::Error> {
        let timestamp = DateTime::from_timestamp(item.timestamp, 0).ok_or("Invalid timestamp")?;

        Ok(Self {
            id: Uuid::now_v7(),
            name: item.name,
            timestamp: DateTime::from(timestamp),
            library_address: bs58::encode(item.library_address).into_string(),
            nft_price: item.nft_price,
            nft_bid_step: item.nft_bid_step,
            nft_address: bs58::encode(item.nft_address).into_string(),
        })
    }
}

impl MintNft {
    pub fn from_row_all(row: &Vec<tokio_postgres::Row>) -> Vec<Self> {
        row.iter()
            .map(|row| MintNft {
                id: row.get("id"),
                nft_price: row.get::<_, i64>("nft_price") as u64,
                nft_bid_step: row.get::<_, i64>("nft_bid_step") as u64,
                timestamp: row.get::<_, std::time::SystemTime>("timestamp").into(),
                name: row.get("name"),
                library_address: row.get("library_address"),
                nft_address: row.get("nft_address"),
            })
            .collect()
    }
}

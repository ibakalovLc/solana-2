use borsh::BorshDeserialize;
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct TransferNft {
    pub id: Uuid,
    pub timestamp: DateTime<Utc>,
    pub nft_name: String,
    pub recipient: String,
    pub owner: String,
}

#[derive(Debug, Serialize, Deserialize, BorshDeserialize, Default)]
pub struct TransferNftPayload {
    pub nft_name: String,
    pub recipient: [u8; 32],
    pub owner: [u8; 32],
    pub timestamp: i64,
}

impl TryFrom<TransferNftPayload> for TransferNft {
    type Error = Box<dyn std::error::Error>;

    fn try_from(item: TransferNftPayload) -> Result<Self, Self::Error> {
        let timestamp = DateTime::from_timestamp(item.timestamp, 0).ok_or("Invalid timestamp")?;

        Ok(Self {
            id: Uuid::now_v7(),
            nft_name: item.nft_name,
            recipient: bs58::encode(item.recipient).into_string(),
            owner: bs58::encode(item.owner).into_string(),
            timestamp: DateTime::from(timestamp),
        })
    }
}

impl TransferNft {
    pub fn from_row_all(row: &Vec<tokio_postgres::Row>) -> Vec<Self> {
        row.iter()
            .map(|row| TransferNft {
                id: row.get("id"),
                timestamp: row.get::<_, std::time::SystemTime>("timestamp").into(),
                nft_name: row.get("nft_name"),
                recipient: row.get("recipient"),
                owner: row.get("owner"),
            })
            .collect()
    }
}


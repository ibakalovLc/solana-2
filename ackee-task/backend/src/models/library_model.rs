use borsh::BorshDeserialize;
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct InitLibrary {
    pub id: Uuid,
    pub timestamp: DateTime<Utc>,
    pub name: String,
    pub library_address: String,
}

#[derive(Debug, Serialize, Deserialize, BorshDeserialize, Default)]
pub struct InitLibraryPayload {
    pub name: String,
    pub timestamp: i64,
    pub library_address: [u8; 32],
}

impl TryFrom<InitLibraryPayload> for InitLibrary {
    type Error = Box<dyn std::error::Error>;

    fn try_from(item: InitLibraryPayload) -> Result<Self, Self::Error> {
        let timestamp = DateTime::from_timestamp(item.timestamp, 0).ok_or("Invalid timestamp")?;

        Ok(Self {
            id: Uuid::now_v7(),
            name: item.name,
            library_address: bs58::encode(item.library_address).into_string(),
            timestamp: DateTime::from(timestamp),
        })
    }
}

impl InitLibrary {
    pub fn from_row_all(row: &Vec<tokio_postgres::Row>) -> Vec<Self> {
        row.iter()
            .map(|row| InitLibrary {
                id: row.get("id"),
                timestamp: row.get::<_, std::time::SystemTime>("timestamp").into(),
                name: row.get("name"),
                library_address: row.get("library_address"),
            })
            .collect()
    }
}


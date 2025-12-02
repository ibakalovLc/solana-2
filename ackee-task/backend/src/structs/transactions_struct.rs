use serde::{ Deserialize, Serialize };
use yellowstone_grpc_proto::{ prelude::Message };

#[derive(Serialize, Deserialize, Debug)]
pub struct SerializableMessageHeader {
    num_required_signatures: u32,
    num_readonly_signed_accounts: u32,
    num_readonly_unsigned_accounts: u32,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct SerializableCompiledInstruction {
    pub program_id_index: u32,
    pub accounts: Vec<u8>,
    pub data: Vec<u8>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct SerializableAddressTableLookup {
    account_key: String,
    writable_indexes: Vec<u8>,
    readonly_indexes: Vec<u8>,
}

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct SerializableMessage {
    pub header: Option<SerializableMessageHeader>,
    pub account_keys: Vec<String>,
    pub recent_blockhash: String,
    pub instructions: Vec<SerializableCompiledInstruction>,
    pub versioned: bool,
    pub address_table_lookups: Vec<SerializableAddressTableLookup>,
}

#[derive(Serialize, Deserialize, Debug, Default)]
#[serde(tag = "event")]
pub struct TransactionEvent {
    pub signature: String,
    pub slot: u64,
    pub is_vote: bool,
    pub index: u64,
    pub timestamp: String,
    pub transaction_message: SerializableMessage,
    pub transaction_signatures: Vec<String>,
    pub logs: Vec<String>,
}

impl From<Message> for SerializableMessage {
    fn from(msg: Message) -> Self {
        SerializableMessage {
            header: msg.header.map(|h| SerializableMessageHeader {
                num_required_signatures: h.num_required_signatures,
                num_readonly_signed_accounts: h.num_readonly_signed_accounts,
                num_readonly_unsigned_accounts: h.num_readonly_unsigned_accounts,
            }),
            account_keys: msg.account_keys
                .iter()
                .map(|k| bs58::encode(k).into_string())
                .collect(),
            recent_blockhash: bs58::encode(&msg.recent_blockhash).into_string(),
            instructions: msg.instructions
                .into_iter()
                .map(|ix| SerializableCompiledInstruction {
                    program_id_index: ix.program_id_index,
                    accounts: ix.accounts,
                    data: ix.data,
                })
                .collect(),
            versioned: msg.versioned,
            address_table_lookups: msg.address_table_lookups
                .into_iter()
                .map(|lookup| SerializableAddressTableLookup {
                    account_key: bs58::encode(&lookup.account_key).into_string(),
                    writable_indexes: lookup.writable_indexes,
                    readonly_indexes: lookup.readonly_indexes,
                })
                .collect(),
        }
    }
}

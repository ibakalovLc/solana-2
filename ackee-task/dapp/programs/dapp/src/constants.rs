use anchor_lang::constant;

#[constant]
pub const LIBRARY_MINT_SEEDS: &[u8] = b"library_mint";

#[constant]
pub const LIBRARY_ACCOUNT_SEEDS: &[u8] = b"library_account";

#[constant]
pub const LIBRARY_METADATA_SEEDS: &[u8] = b"metadata";

#[constant]
pub const LIBRARY_MASTER_EDITION_SEEDS: &[u8] = b"edition";

#[constant]
pub const BUID_NFT_SEEDS: &[u8] = b"nft_info";

#[constant]
pub const AUCTION_STATE_SEEDS: &[u8] = b"auction";

#[constant]
pub const BIDDER_ESCROW_SEEDS: &[u8] = b"bidder_escrow";

#[constant]
pub const NAME: &str = "ZZ Tokens";

#[constant]
pub const SYMBOL: &str = "ZZ";

#[constant]
pub const COLLECTION_URL: &str =
    "https://raw.githubusercontent.com/ibakalovLc/solana/main/metadata.json";

#[constant]
pub const NFT_URL: &str = "https://raw.githubusercontent.com/ibakalovLc/solana/main/nft.json";

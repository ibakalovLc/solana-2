use anchor_lang::prelude::*;

#[derive(InitSpace)]
#[account]
pub struct NftInfo {
    pub current_price: u64,
    pub starting_price: u64,
    pub current_bidder: Pubkey,
    pub bid_step: u64,
    pub bump: u8,
    #[max_len(32)]
    pub library_name: String,
    #[max_len(32)]
    pub name: String,
}

use anchor_lang::prelude::*;

#[derive(InitSpace)]
#[account]
pub struct AuctionState {
    pub nft_mint: Pubkey,
    pub seller: Pubkey,
    pub auction_end_time: i64,
    pub bump: u8,
}

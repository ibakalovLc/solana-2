use anchor_lang::prelude::*;

#[account]
#[derive(InitSpace)]
pub struct EscrowBidder {
    pub payer: Pubkey,
    pub bump: u8,
}

use anchor_lang::prelude::*;

pub mod instructions;
pub use instructions::*;

pub mod constants;
pub use constants::*;

pub mod state;
pub use state::*;

pub mod enums;
pub use enums::*;

declare_id!("EDFwnAysttkv5TW7davfHDuFctxnZxNRb8WCU2AVf7um");

#[program]
pub mod dapp {
    use super::*;

    pub fn init_library(ctx: Context<InitLibrary>, name: String) -> Result<()> {
        _init_library(&ctx, name)
    }

    pub fn mint_nft(
        mut ctx: Context<MintNft>,
        name: String,
        price: u64,
        library_name: String,
        bid_step: u64
    ) -> Result<()> {
        _mint_nft(&mut ctx, name, price, library_name, bid_step)
    }

    pub fn bid_nft(mut ctx: Context<BidNft>, name: String) -> Result<()> {
        _bid_nft(&mut ctx, name)
    }

    // pub fn create_escrow_and_bid(mut ctx: Context<CreateEscrowAndBid>, name: String) -> Result<()> {
    //     _create_escrow_and_bid(&mut ctx, name)
    // }

    pub fn start_auction(
        mut ctx: Context<StartAuction>,
        name: String,
        end_time: i64
    ) -> Result<()> {
        _start_auction(&mut ctx, name, end_time)
    }

    pub fn transfer_nft(mut ctx: Context<TransferNft>, name: String) -> Result<()> {
        _transfer_nft(&mut ctx, name)
    }
}

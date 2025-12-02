use anchor_lang::prelude::*;
use anchor_spl::{ token_interface::{ TokenAccount } };

use crate::{ AuctionState, constants::* };
use crate::enums::ErrorCode;

#[derive(Accounts)]
#[instruction(name: String, end_time: i64)]
pub struct StartAuction<'info> {
    #[account(mut)]
    pub seller: Signer<'info>,

    #[account(
        init,
        payer = seller,
        space = 8 + AuctionState::INIT_SPACE,
        seeds = [AUCTION_STATE_SEEDS, name.as_bytes()],
        bump
    )]
    pub auction_state: Account<'info, AuctionState>,

    #[account(
        mut,
        seeds = [LIBRARY_ACCOUNT_SEEDS, name.as_bytes()],
        bump,
        constraint = library_account.mint != Pubkey::default() @ ErrorCode::LibraryAccountNotFound,
        constraint = library_account.amount > 0 @ ErrorCode::LibraryAccountNotFound
    )]
    pub library_account: InterfaceAccount<'info, TokenAccount>,

    pub system_program: Program<'info, System>,
}

pub fn _start_auction(ctx: &mut Context<StartAuction>, _name: String, end_time: i64) -> Result<()> {
    let auction_state: &mut Account<'_, AuctionState> = &mut ctx.accounts.auction_state;
    let clock: Clock = Clock::get()?;

    // Check if auction time is in the future
    require!(end_time > clock.unix_timestamp, ErrorCode::TimeSetIsNotValid);

    msg!("Auction end time: {} vs {} current time", end_time, clock.unix_timestamp);

    // Set auction state
    auction_state.seller = ctx.accounts.seller.key();
    auction_state.auction_end_time = end_time;

    Ok(())
}

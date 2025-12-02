use anchor_lang::prelude::*;
use anchor_lang::system_program::{ transfer, Transfer };

use anchor_spl::{
    metadata::{ Metadata },
    associated_token::AssociatedToken,
    token_interface::{ Mint, TokenAccount, TokenInterface },
};

use crate::{ EscrowBidder, constants::* };
use crate::state::{ AuctionState, NftInfo };
use crate::enums::ErrorCode;

#[derive(Accounts)]
#[instruction(name: String)]
pub struct BidNft<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,

    #[account(mut, seeds = [BUID_NFT_SEEDS, name.as_bytes()], bump)]
    pub nft_info: Account<'info, NftInfo>,

    #[account(mut, seeds = [AUCTION_STATE_SEEDS, nft_info.name.as_bytes()], bump)]
    pub auction_state: Account<'info, AuctionState>,

    #[account(
        mut,
        seeds = [name.as_bytes()],
        bump
    )]
    pub nft_mint: InterfaceAccount<'info, Mint>,

    #[account(
        mut,
        seeds = [
            BIDDER_ESCROW_SEEDS,
            nft_info.library_name.as_bytes(),
            name.as_bytes(),
        ],
        bump
    )]
    pub nft_bidder_escrow: Account<'info, EscrowBidder>,

    #[account(mut, seeds = [LIBRARY_ACCOUNT_SEEDS, nft_info.library_name.as_bytes()], bump)]
    pub library_account: InterfaceAccount<'info, TokenAccount>,

    /// CHECK: This is the previous bidder's escrow account (holds the funds)
    #[account(mut)]
    pub previous_bidder: AccountInfo<'info>,

    #[account(mut, seeds = [LIBRARY_MINT_SEEDS, nft_info.library_name.as_bytes()], bump)]
    pub library_mint: InterfaceAccount<'info, Mint>,
    pub system_program: Program<'info, System>,
    pub token_program: Interface<'info, TokenInterface>,
    pub metadata_program: Program<'info, Metadata>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub rent: Sysvar<'info, Rent>,
}

pub fn _bid_nft(ctx: &mut Context<BidNft>, _name: String) -> Result<()> {
    let auction_state: &mut Account<'_, AuctionState> = &mut ctx.accounts.auction_state;
    let nft_info: &mut Account<'_, NftInfo> = &mut ctx.accounts.nft_info;
    let rent_exempt_minimum: u64 = ctx.accounts.rent.minimum_balance(8 + EscrowBidder::INIT_SPACE);

    _common_bidding_logic(
        auction_state,
        nft_info,
        rent_exempt_minimum,
        &mut ctx.accounts.nft_bidder_escrow,
        &mut ctx.accounts.previous_bidder,
        &ctx.accounts.system_program,
        &mut ctx.accounts.payer
    )
}

pub fn _common_bidding_logic<'info>(
    auction_state: &mut Account<'info, AuctionState>,
    nft_info: &mut Account<'info, NftInfo>,
    rent_exempt_minimum: u64,
    nft_bidder_escrow: &mut Account<'info, EscrowBidder>,
    previous_bidder: &mut AccountInfo<'info>,
    system_program: &Program<'info, System>,
    payer: &mut Signer<'info>
) -> Result<()> {
    let clock = Clock::get()?;

    require!(clock.unix_timestamp < auction_state.auction_end_time, ErrorCode::AuctionTimeExpired);

    let bid_amount = nft_info.current_price + nft_info.bid_step;

    msg!(
        "Bid amount bidders: current_price {:?} nft_info bid_step {:?} highest_bidder {:?} rent_exempt_minimum {:?} bid_amount {:?}",
        nft_info.current_price,
        nft_info.bid_step,
        nft_bidder_escrow.get_lamports(),
        rent_exempt_minimum,
        bid_amount
    );

    transfer(
        CpiContext::new(system_program.to_account_info(), Transfer {
            from: payer.to_account_info(),
            to: nft_bidder_escrow.to_account_info(),
        }),
        bid_amount
    )?;

    if nft_info.current_bidder != payer.key() {
        nft_info.current_bidder = payer.key();

        msg!("Previous bidder:  {} by {}", nft_info.current_bidder, nft_info.current_price);

        // Calculate refund amount
        let refund_amount = nft_info.current_price;

        require!(nft_bidder_escrow.get_lamports() >= refund_amount, ErrorCode::InsufficientFunds);

        **nft_bidder_escrow.to_account_info().try_borrow_mut_lamports()? -= refund_amount;
        **previous_bidder.try_borrow_mut_lamports()? += refund_amount;
    }

    nft_bidder_escrow.payer = payer.key();
    nft_info.current_price = nft_info.current_price + nft_info.bid_step;

    emit!(BidPlaced {
        nft_name: nft_info.name.clone(),
        bidder: payer.key(),
        timestamp: clock.unix_timestamp,
        nft_address: nft_info.key(),
        amount: bid_amount,
    });

    Ok(())
}

#[event]
pub struct BidPlaced {
    pub nft_name: String,
    pub nft_address: Pubkey,
    pub bidder: Pubkey,
    pub amount: u64,
    pub timestamp: i64,
}

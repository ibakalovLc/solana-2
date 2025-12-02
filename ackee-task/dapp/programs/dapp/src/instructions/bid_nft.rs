use anchor_lang::{ prelude::*, system_program };
use anchor_lang::system_program::{ transfer, Transfer };

use anchor_spl::{
    associated_token::AssociatedToken,
    metadata::Metadata,
    token_interface::{ Mint, TokenAccount, TokenInterface },
};

use crate::enums::ErrorCode;
use crate::state::{ AuctionState, NftInfo };
use crate::{ constants::*, EscrowBidder };

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

    _common_bidding_logic(
        auction_state,
        nft_info,
        &mut ctx.accounts.nft_bidder_escrow,
        &mut ctx.accounts.previous_bidder,
        &ctx.accounts.system_program,
        &mut ctx.accounts.payer
    )
}

pub fn _common_bidding_logic<'info>(
    auction_state: &mut Account<'info, AuctionState>,
    nft_info: &mut Account<'info, NftInfo>,
    nft_bidder_escrow: &mut Account<'info, EscrowBidder>,
    previous_bidder: &mut AccountInfo<'info>,
    system_program: &Program<'info, System>,
    payer: &mut Signer<'info>
) -> Result<()> {
    let clock = Clock::get()?;

    let previous_bidder_key = nft_info.current_bidder;
    let refund_amount = nft_info.current_price;

    require!(clock.unix_timestamp < auction_state.auction_end_time, ErrorCode::AuctionTimeExpired);

    let bid_amount = nft_info.current_price + nft_info.bid_step;

    transfer(
        CpiContext::new(system_program.to_account_info(), Transfer {
            from: payer.to_account_info(),
            to: nft_bidder_escrow.to_account_info(),
        }),
        bid_amount
    )?;

    if previous_bidder_key != payer.key() {
        nft_info.current_bidder = payer.key();

        require!(previous_bidder.key() == previous_bidder_key, ErrorCode::InvalidPreviousBidder);
        require!(previous_bidder.owner == &system_program::ID, ErrorCode::InvalidAccountOwner);
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

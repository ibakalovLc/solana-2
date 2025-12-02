use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
    token_interface::{ Mint, TokenAccount, TokenInterface, transfer_checked, TransferChecked },
};

use crate::{
    AUCTION_STATE_SEEDS,
    BIDDER_ESCROW_SEEDS,
    BUID_NFT_SEEDS,
    AuctionState,
    EscrowBidder,
    NftInfo,
    enums::ErrorCode,
};

#[derive(Accounts)]
#[instruction(name: String)]
pub struct TransferNft<'info> {
    #[account(mut)]
    pub owner: Signer<'info>, // Current owner of the NFT

    /// CHECK: Recipient wallet
    pub recipient: AccountInfo<'info>,

    #[account(
        mut,
        seeds = [name.as_bytes()],
        bump
    )]
    pub nft_mint: InterfaceAccount<'info, Mint>,

    #[account(
        mut,
        associated_token::mint = nft_mint,
        associated_token::authority = nft_bidder_escrow,
    )]
    pub from_token_account: InterfaceAccount<'info, TokenAccount>,

    #[account(
        init_if_needed,
        payer = owner,
        associated_token::mint = nft_mint,
        associated_token::authority = recipient,
        associated_token::token_program = token_program
    )]
    pub to_token_account: InterfaceAccount<'info, TokenAccount>,

    #[account(mut, close = owner, seeds = [BUID_NFT_SEEDS, name.as_bytes()], bump)]
    nft_info: Account<'info, NftInfo>,

    #[account(
        mut,
        close = owner,
        seeds = [
            BIDDER_ESCROW_SEEDS,
            nft_info.library_name.as_bytes(),
            name.as_bytes(),
        ],
        bump
    )]
    pub nft_bidder_escrow: Account<'info, EscrowBidder>,

    #[account(
        mut,
        close = owner,
        seeds = [AUCTION_STATE_SEEDS, name.as_bytes()],
        bump
    )]
    pub auction_state: Account<'info, AuctionState>,

    pub token_program: Interface<'info, TokenInterface>,
    pub system_program: Program<'info, System>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub rent: Sysvar<'info, Rent>,
}

pub fn _transfer_nft(ctx: &mut Context<TransferNft>, library_name: String) -> Result<()> {
    let clock = Clock::get()?;

    require!(
        ctx.accounts.owner.key() == ctx.accounts.auction_state.seller,
        ErrorCode::UnauthorizedTransfer
    );

    require!(
        clock.unix_timestamp > ctx.accounts.auction_state.auction_end_time,
        ErrorCode::AuctionTimeExpired
    );

    let signer_seeds: &[&[&[u8]]] = &[
        &[
            BIDDER_ESCROW_SEEDS,
            library_name.as_bytes(),
            ctx.accounts.nft_info.name.as_bytes(),
            &[ctx.bumps.nft_bidder_escrow],
        ],
    ];

    if ctx.accounts.nft_info.current_bidder != ctx.accounts.owner.key() {
        let transfer_account_options = TransferChecked {
            from: ctx.accounts.from_token_account.to_account_info(),
            to: ctx.accounts.to_token_account.to_account_info(),
            authority: ctx.accounts.nft_bidder_escrow.to_account_info(),
            mint: ctx.accounts.nft_mint.to_account_info(),
        };

        let cpi_context: CpiContext<
            '_,
            '_,
            '_,
            '_,
            TransferChecked<'_>
        > = CpiContext::new_with_signer(
            ctx.accounts.token_program.to_account_info(),
            transfer_account_options,
            signer_seeds
        );

        transfer_checked(cpi_context, 1, 0)?;

        emit!(TransferNftEvent {
            nft_name: ctx.accounts.nft_info.name.clone(),
            recipient: ctx.accounts.recipient.key(),
            timestamp: Clock::get()?.unix_timestamp,
            owner: ctx.accounts.owner.key(),
        });
    } else {
        msg!("Current bidder is the owner, no transfer needed - {}", ctx.accounts.owner.key());
    }

    msg!("Transferred NFT to: {:?}", ctx.accounts.recipient.key());

    Ok(())
}

#[event]
pub struct TransferNftEvent {
    pub nft_name: String,
    pub recipient: Pubkey,
    pub owner: Pubkey,
    pub timestamp: i64,
}

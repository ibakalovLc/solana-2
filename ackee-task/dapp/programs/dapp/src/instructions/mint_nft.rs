use anchor_lang::prelude::*;
use anchor_spl::{
    metadata::{
        CreateMasterEditionV3,
        CreateMetadataAccountsV3,
        SetAndVerifySizedCollectionItem,
        Metadata,
        create_master_edition_v3,
        create_metadata_accounts_v3,
        set_and_verify_sized_collection_item,
        mpl_token_metadata::{ types::{ DataV2 } },
    },
    associated_token::AssociatedToken,
    token_interface::{ Mint, MintTo, TokenAccount, TokenInterface, mint_to },
};

use crate::{ EscrowBidder, constants::* };
use crate::state::nft_info::NftInfo;

#[derive(Accounts)]
#[instruction(name: String, price: u64, library_name: String)]
pub struct MintNft<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,

    #[account(
        init,
        payer = payer,
        space = 8 + NftInfo::INIT_SPACE,
        seeds = [BUID_NFT_SEEDS, name.as_bytes()],
        bump
    )]
    pub nft_info: Account<'info, NftInfo>,

    #[account(
        init,
        payer = payer,
        seeds = [name.as_bytes()],
        mint::decimals = 0,
        mint::authority = library_mint,
        mint::freeze_authority = library_mint,
        bump
    )]
    pub nft_mint: InterfaceAccount<'info, Mint>,

    #[account(mut, seeds = [LIBRARY_ACCOUNT_SEEDS, library_name.as_bytes()], bump)]
    pub library_account: InterfaceAccount<'info, TokenAccount>,

    #[account(mut, seeds = [LIBRARY_MINT_SEEDS, library_name.as_bytes()], bump)]
    pub library_mint: InterfaceAccount<'info, Mint>,

    #[account(
        mut,
        seeds = [
        LIBRARY_METADATA_SEEDS,
        metadata_program.key().as_ref(),
        library_mint.key().as_ref()
        ],
        seeds::program = metadata_program.key(),
        bump
    )]
    /// CHECK: This account is validated by the Metaplex Token Metadata program using PDA seeds
    pub library_metadata: UncheckedAccount<'info>,

    #[account(
        init,
        space = 8 + EscrowBidder::INIT_SPACE,
        payer = payer,
        seeds = [BIDDER_ESCROW_SEEDS, library_name.as_bytes(), name.as_bytes()],
        bump
    )]
    pub nft_bidder_escrow: Account<'info, EscrowBidder>,

    #[account(
    mut,
    seeds = [
        LIBRARY_METADATA_SEEDS,
        metadata_program.key().as_ref(),
        library_mint.key().as_ref(),
        LIBRARY_MASTER_EDITION_SEEDS,
        ],
        bump,
        seeds::program = metadata_program.key()
    )]
    /// CHECK: This account is validated by the Metaplex Token Metadata program as the master edition PDA
    pub library_master_edition: UncheckedAccount<'info>,

    #[account(
    mut,
    seeds = [
        LIBRARY_METADATA_SEEDS,
        metadata_program.key().as_ref(),
        nft_mint.key().as_ref(),
        LIBRARY_MASTER_EDITION_SEEDS,
        ],
    bump,
    seeds::program = metadata_program.key()
    )]
    /// CHECK: This account is validated by the Metaplex Token Metadata program as the master edition PDA
    pub nft_master_edition: UncheckedAccount<'info>,

    #[account(
    mut,
    seeds = [
        LIBRARY_METADATA_SEEDS,
        metadata_program.key().as_ref(),
        nft_mint.key().as_ref()
        ],
    bump,
    seeds::program = metadata_program.key())]
    /// CHECK: This account is validated by the Metaplex Token Metadata program using PDA seeds
    pub nft_metadata: UncheckedAccount<'info>,

    #[account(
        init,
        payer = payer,
        associated_token::mint = nft_mint,
        associated_token::authority = nft_bidder_escrow,
        associated_token::token_program = token_program
    )]
    pub associated_nft: InterfaceAccount<'info, TokenAccount>,

    pub system_program: Program<'info, System>,
    pub token_program: Interface<'info, TokenInterface>,
    pub metadata_program: Program<'info, Metadata>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub rent: Sysvar<'info, Rent>,
}

pub fn _mint_nft(
    ctx: &mut Context<MintNft>,
    name: String,
    price: u64,
    library_name: String,
    bid_step: u64
) -> Result<()> {
    let signer_seeds: &[&[&[u8]]] = &[
        &[LIBRARY_MINT_SEEDS, library_name.as_bytes(), &[ctx.bumps.library_mint]],
    ];

    *ctx.accounts.nft_bidder_escrow = EscrowBidder {
        payer: ctx.accounts.payer.key(),
        bump: ctx.bumps.nft_bidder_escrow,
    };

    *ctx.accounts.nft_info = NftInfo {
        name: name.to_owned(),
        current_bidder: ctx.accounts.payer.key(),
        bid_step,
        current_price: price,
        starting_price: price,
        library_name: library_name.to_owned(),
        bump: ctx.bumps.nft_info,
    };

    mint_to(
        CpiContext::new_with_signer(
            ctx.accounts.token_program.to_account_info(),
            MintTo {
                mint: ctx.accounts.nft_mint.to_account_info(),
                to: ctx.accounts.associated_nft.to_account_info(),
                authority: ctx.accounts.library_mint.to_account_info(),
            },
            signer_seeds
        ),
        1
    )?;

    create_metadata_accounts_v3(
        CpiContext::new_with_signer(
            ctx.accounts.metadata_program.to_account_info(),
            CreateMetadataAccountsV3 {
                metadata: ctx.accounts.nft_metadata.to_account_info(),
                mint: ctx.accounts.nft_mint.to_account_info(),
                mint_authority: ctx.accounts.library_mint.to_account_info(),
                payer: ctx.accounts.payer.to_account_info(),
                update_authority: ctx.accounts.library_mint.to_account_info(),
                system_program: ctx.accounts.system_program.to_account_info(),
                rent: ctx.accounts.rent.to_account_info(),
            },
            signer_seeds
        ),
        DataV2 {
            name: name.to_owned(),
            symbol: SYMBOL.to_string(),
            uri: NFT_URL.to_string(),
            seller_fee_basis_points: 0,
            creators: None,
            collection: None,
            uses: None,
        },
        true,
        true,
        None
    )?;

    create_master_edition_v3(
        CpiContext::new_with_signer(
            ctx.accounts.metadata_program.to_account_info(),
            CreateMasterEditionV3 {
                payer: ctx.accounts.payer.to_account_info(),
                mint: ctx.accounts.nft_mint.to_account_info(),
                edition: ctx.accounts.nft_master_edition.to_account_info(),
                mint_authority: ctx.accounts.library_mint.to_account_info(),
                update_authority: ctx.accounts.library_mint.to_account_info(),
                metadata: ctx.accounts.nft_metadata.to_account_info(),
                token_program: ctx.accounts.token_program.to_account_info(),
                system_program: ctx.accounts.system_program.to_account_info(),
                rent: ctx.accounts.rent.to_account_info(),
            },
            &signer_seeds
        ),
        Some(0)
    )?;

    set_and_verify_sized_collection_item(
        CpiContext::new_with_signer(
            ctx.accounts.metadata_program.to_account_info(),
            SetAndVerifySizedCollectionItem {
                metadata: ctx.accounts.nft_metadata.to_account_info(),
                collection_authority: ctx.accounts.library_mint.to_account_info(),
                payer: ctx.accounts.payer.to_account_info(),
                update_authority: ctx.accounts.library_mint.to_account_info(),
                collection_mint: ctx.accounts.library_mint.to_account_info(),
                collection_metadata: ctx.accounts.library_metadata.to_account_info(),
                collection_master_edition: ctx.accounts.library_master_edition.to_account_info(),
            },
            signer_seeds
        ),
        None
    )?;

    let clock = Clock::get()?;

    emit!(MintNftEvent {
        name,
        timestamp: clock.unix_timestamp,
        library_address: ctx.accounts.library_account.key(),
        nft_address: ctx.accounts.nft_mint.key(),
        nft_price: price,
        nft_bid_step: bid_step,
    });

    Ok(())
}

#[event]
pub struct MintNftEvent {
    pub name: String,
    pub timestamp: i64,
    pub library_address: Pubkey,
    pub nft_price: u64,
    pub nft_bid_step: u64,
    pub nft_address: Pubkey,
}

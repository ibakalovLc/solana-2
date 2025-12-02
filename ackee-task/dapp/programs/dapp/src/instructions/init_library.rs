use anchor_lang::prelude::*;
use anchor_spl::{
    metadata::{
        CreateMasterEditionV3,
        CreateMetadataAccountsV3,
        SignMetadata,
        Metadata,
        create_master_edition_v3,
        create_metadata_accounts_v3,
        mpl_token_metadata::{ types::{ CollectionDetails, Creator, DataV2 } },
        sign_metadata,
    },
    token_interface::{ Mint, MintTo, TokenAccount, TokenInterface, mint_to },
};
use crate::{ constants::* };

#[derive(Accounts)]
#[instruction(name: String)]
pub struct InitLibrary<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,

    #[account(
        init,
        mint::decimals = 0,
        mint::authority = library_mint,
        mint::freeze_authority = library_mint,
        payer = signer,
        seeds = [LIBRARY_MINT_SEEDS, name.as_bytes()],
        bump
    )]
    pub library_mint: InterfaceAccount<'info, Mint>,

    #[account(
        init,
        payer = signer,
        token::mint = library_mint,
        token::authority = library_mint,
        seeds = [LIBRARY_ACCOUNT_SEEDS, name.as_bytes()],
        bump
    )]
    pub library_account: InterfaceAccount<'info, TokenAccount>,

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
    pub master_edition: UncheckedAccount<'info>,

    /// CHECK: Metaplex Token Metadata Program
    pub system_program: Program<'info, System>,
    pub token_program: Interface<'info, TokenInterface>,
    pub metadata_program: Program<'info, Metadata>,
    pub rent: Sysvar<'info, Rent>,
}

pub fn _init_library(ctx: &Context<InitLibrary>, name: String) -> Result<()> {
    msg!("Initializing library");

    let signer_seeds: &[&[&[u8]]] = &[
        &[LIBRARY_MINT_SEEDS, name.as_bytes(), &[ctx.bumps.library_mint]],
    ];

    mint_to(
        CpiContext::new_with_signer(
            ctx.accounts.token_program.to_account_info(),
            MintTo {
                mint: ctx.accounts.library_mint.to_account_info(),
                to: ctx.accounts.library_account.to_account_info(),
                authority: ctx.accounts.library_mint.to_account_info(),
            },
            signer_seeds
        ),
        1
    )?;

    msg!("{{!!!!Library mint:{}!!!!}}", ctx.accounts.library_account.key());
    msg!("{{!!!!Library mint authority:{}!!!!}}", ctx.accounts.library_mint.key());
    msg!("{{!!!!Library account:{}!!!!}}", ctx.accounts.library_account.key());

    create_metadata_accounts_v3(
        CpiContext::new_with_signer(
            ctx.accounts.metadata_program.to_account_info(),
            CreateMetadataAccountsV3 {
                metadata: ctx.accounts.library_metadata.to_account_info(),
                mint: ctx.accounts.library_mint.to_account_info(),
                mint_authority: ctx.accounts.library_mint.to_account_info(),
                payer: ctx.accounts.signer.to_account_info(),
                update_authority: ctx.accounts.library_mint.to_account_info(),
                system_program: ctx.accounts.system_program.to_account_info(),
                rent: ctx.accounts.rent.to_account_info(),
            },
            signer_seeds
        ),
        DataV2 {
            name: NAME.to_string(),
            symbol: SYMBOL.to_string(),
            uri: COLLECTION_URL.to_string(),
            seller_fee_basis_points: 0,
            creators: Some(
                vec![Creator {
                    address: ctx.accounts.library_mint.key(),
                    verified: true,
                    share: 100,
                }]
            ),
            collection: None,
            uses: None,
        },
        true,
        true,
        Some(CollectionDetails::V1 { size: 0 })
    )?;

    msg!("{{!!!!LIbrary metadata:{}!!!!}}", ctx.accounts.library_metadata.key());

    create_master_edition_v3(
        CpiContext::new_with_signer(
            ctx.accounts.metadata_program.to_account_info(),
            CreateMasterEditionV3 {
                payer: ctx.accounts.signer.to_account_info(),
                mint: ctx.accounts.library_mint.to_account_info(),
                edition: ctx.accounts.master_edition.to_account_info(),
                mint_authority: ctx.accounts.library_mint.to_account_info(),
                update_authority: ctx.accounts.library_mint.to_account_info(),
                metadata: ctx.accounts.library_metadata.to_account_info(),
                token_program: ctx.accounts.token_program.to_account_info(),
                system_program: ctx.accounts.system_program.to_account_info(),
                rent: ctx.accounts.rent.to_account_info(),
            },
            &signer_seeds
        ),
        Some(0)
    )?;

    msg!("{{!!!!Library master edition:{}!!!!}}", ctx.accounts.master_edition.key());

    sign_metadata(
        CpiContext::new_with_signer(
            ctx.accounts.metadata_program.to_account_info(),
            SignMetadata {
                creator: ctx.accounts.library_mint.to_account_info(),
                metadata: ctx.accounts.library_metadata.to_account_info(),
            },
            signer_seeds
        )
    )?;
    let clock = Clock::get()?;

    emit!(InitLibraryEvent {
        name,
        timestamp: clock.unix_timestamp,
        library_address: ctx.accounts.library_account.key(),
    });

    Ok(())
}

#[event]
pub struct InitLibraryEvent {
    pub name: String,
    pub timestamp: i64,
    pub library_address: Pubkey,
}

use anchor_lang::prelude::*;
use anchor_lang::system_program::{ transfer, Transfer };
use anchor_spl::{
    associated_token::AssociatedToken,
    metadata::{
        Metadata,
        CreateMetadataAccountsV3,
        SignMetadata,
        CreateMasterEditionV3,
        SetAndVerifySizedCollectionItem,
        sign_metadata,
        create_metadata_accounts_v3,
        create_master_edition_v3,
        mpl_token_metadata::{ types::{ DataV2, Creator, CollectionDetails } },
    },
    token_interface::{ Mint, TokenAccount, TokenInterface, mint_to, MintTo },
};

#[constant]
pub const NAME: &str = "Token Lottery Ticket 1";

#[constant]
pub const SYMBOL: &str = "TLT";

#[constant]
pub const URI: &str =
    "https://raw.githubusercontent.com/ibakalovLc/solana/refs/heads/main/metadata.json";

declare_id!("2wWXdMJVfcuWeyzoZytFE3YyEpkoeupjSwvGSd3rWN1b");

#[program]
pub mod token_lottery {
    use anchor_spl::metadata::{ set_and_verify_sized_collection_item };
    use switchboard_on_demand::RandomnessAccountData;

    use super::*;

    pub fn initialize_config(
        ctx: Context<Initialize>,
        start: u64,
        end: u64,
        price: u64
    ) -> Result<()> {
        *ctx.accounts.token_lottery = TokenLottery {
            bump: ctx.bumps.token_lottery,
            start_time: start,
            end_time: end,
            ticket_price: price,
            authority: ctx.accounts.payer.key(),
            total_tickets: 0,
            lottery_pot_amount: 0,
            winner: 0,
            randomness_account: Pubkey::default(),
            winner_chosen: false,
        };

        Ok(())
    }

    pub fn initilize_library(ctx: Context<InitializeLibrary>) -> Result<()> {
        let signer_seeds: &[&[&[u8]]] = &[
            &[b"collection_mint".as_ref(), &[ctx.bumps.collection_mint]],
        ];

        msg!("Create mint account");

        mint_to(
            CpiContext::new_with_signer(
                ctx.accounts.token_program.to_account_info(),
                MintTo {
                    mint: ctx.accounts.collection_mint.to_account_info(),
                    to: ctx.accounts.collection_token_account.to_account_info(),
                    authority: ctx.accounts.collection_mint.to_account_info(),
                },
                signer_seeds
            ),
            1
        )?;

        msg!("{{!!!!Collection mint:{}!!!!}}", ctx.accounts.collection_mint.key());
        msg!(
            "{{!!!!Collection token account:{}!!!!}}",
            ctx.accounts.collection_token_account.key()
        );

        msg!("Create metadata account");

        create_metadata_accounts_v3(
            CpiContext::new_with_signer(
                ctx.accounts.token_metadata_program.to_account_info(),
                CreateMetadataAccountsV3 {
                    metadata: ctx.accounts.metadata.to_account_info(),
                    mint: ctx.accounts.collection_mint.to_account_info(),
                    mint_authority: ctx.accounts.collection_mint.to_account_info(),
                    payer: ctx.accounts.payer.to_account_info(),
                    update_authority: ctx.accounts.collection_mint.to_account_info(),
                    system_program: ctx.accounts.system_program.to_account_info(),
                    rent: ctx.accounts.rent.to_account_info(),
                },
                signer_seeds
            ),
            DataV2 {
                name: NAME.to_string(),
                symbol: SYMBOL.to_string(),
                uri: URI.to_string(),
                seller_fee_basis_points: 0,
                creators: Some(
                    vec![Creator {
                        address: ctx.accounts.collection_mint.key(),
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

        msg!("Create master edition account");

        msg!("{{!!!!Master edition:{}!!!!}}", ctx.accounts.master_edition.key());
        msg!("{{!!!!Metadata:{}!!!!}}", ctx.accounts.metadata.key());
        msg!("{{!!!!Collection mint:{}!!!!}}", ctx.accounts.collection_mint.key());
        msg!("{{!!!!Payer:{}!!!!}}", ctx.accounts.payer.key());
        msg!("{{!!!!Token program:{}!!!!}}", ctx.accounts.token_program.key());
        msg!("{{!!!!System program:{}!!!!}}", ctx.accounts.system_program.key());
        msg!("{{!!!!Token metadata program:{}!!!!}}", ctx.accounts.token_metadata_program.key());
        msg!("{{!!!!Rent:{}!!!!}}", ctx.accounts.rent.key());

        create_master_edition_v3(
            CpiContext::new_with_signer(
                ctx.accounts.token_metadata_program.to_account_info(),
                CreateMasterEditionV3 {
                    payer: ctx.accounts.payer.to_account_info(),
                    mint: ctx.accounts.collection_mint.to_account_info(),
                    edition: ctx.accounts.master_edition.to_account_info(),
                    mint_authority: ctx.accounts.collection_mint.to_account_info(),
                    update_authority: ctx.accounts.collection_mint.to_account_info(),
                    metadata: ctx.accounts.metadata.to_account_info(),
                    token_program: ctx.accounts.token_program.to_account_info(),
                    system_program: ctx.accounts.system_program.to_account_info(),
                    rent: ctx.accounts.rent.to_account_info(),
                },
                &signer_seeds
            ),
            Some(0)
        )?;

        msg!("Verify collection");

        sign_metadata(
            CpiContext::new_with_signer(
                ctx.accounts.token_metadata_program.to_account_info(),
                SignMetadata {
                    creator: ctx.accounts.collection_mint.to_account_info(),
                    metadata: ctx.accounts.metadata.to_account_info(),
                },
                signer_seeds
            )
        )?;

        Ok(())
    }

    pub fn buy_ticket(ctx: Context<BuyTicket>) -> Result<()> {
        let clock: Clock = Clock::get()?;
        let ticket_name: String = format!("{}{}", NAME, ctx.accounts.token_lottery.total_tickets);

        msg!("{{!!!!Account ticket mint:{}!!!!}}", ctx.accounts.ticket_mint.key());
        msg!("{{!!!!Collection mint:{}!!!!}}", ctx.accounts.collection_mint.key());
        msg!("{{!!!!Ticket metadata:{}!!!!}}", ctx.accounts.ticket_metadata.key());
        msg!("{{!!!!Account collection metadata:{}!!!!}}", ctx.accounts.collection_metadata.key());
        msg!("{{!!!!Destination:{}!!!!}}", ctx.accounts.destination.key());
        msg!("{{!!!!Ticket collection metadata:{}!!!!}}", ctx.accounts.collection_metadata.key());
        msg!(
            "{{!!!!Collection master edition:{}!!!!}}",
            ctx.accounts.collection_master_edition.key()
        );

        if clock.slot < ctx.accounts.token_lottery.start_time {
            return err!(ErrorCode::LotteryNotOpen);
        }

        transfer(
            CpiContext::new(ctx.accounts.system_program.to_account_info(), Transfer {
                from: ctx.accounts.payer.to_account_info(),
                to: ctx.accounts.token_lottery.to_account_info(),
            }),
            ctx.accounts.token_lottery.ticket_price
        )?;

        let signer_seeds: &[&[&[u8]]] = &[
            &[b"collection_mint".as_ref(), &[ctx.bumps.collection_mint]],
        ];

        mint_to(
            CpiContext::new_with_signer(
                ctx.accounts.token_program.to_account_info(),
                MintTo {
                    mint: ctx.accounts.ticket_mint.to_account_info(),
                    to: ctx.accounts.destination.to_account_info(),
                    authority: ctx.accounts.collection_mint.to_account_info(),
                },
                signer_seeds
            ),
            1
        )?;

        create_metadata_accounts_v3(
            CpiContext::new_with_signer(
                ctx.accounts.token_metadata_program.to_account_info(),
                CreateMetadataAccountsV3 {
                    metadata: ctx.accounts.ticket_metadata.to_account_info(),
                    mint: ctx.accounts.ticket_mint.to_account_info(),
                    mint_authority: ctx.accounts.collection_mint.to_account_info(),
                    payer: ctx.accounts.payer.to_account_info(),
                    update_authority: ctx.accounts.collection_mint.to_account_info(),
                    system_program: ctx.accounts.system_program.to_account_info(),
                    rent: ctx.accounts.rent.to_account_info(),
                },
                signer_seeds
            ),
            DataV2 {
                name: ticket_name,
                symbol: SYMBOL.to_string(),
                uri: URI.to_string(),
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
                ctx.accounts.token_metadata_program.to_account_info(),
                CreateMasterEditionV3 {
                    payer: ctx.accounts.payer.to_account_info(),
                    mint: ctx.accounts.ticket_mint.to_account_info(),
                    edition: ctx.accounts.ticket_master_edition.to_account_info(),
                    mint_authority: ctx.accounts.collection_mint.to_account_info(),
                    update_authority: ctx.accounts.collection_mint.to_account_info(),
                    metadata: ctx.accounts.ticket_metadata.to_account_info(),
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
                ctx.accounts.token_metadata_program.to_account_info(),
                SetAndVerifySizedCollectionItem {
                    metadata: ctx.accounts.ticket_metadata.to_account_info(),
                    collection_authority: ctx.accounts.collection_mint.to_account_info(),
                    payer: ctx.accounts.payer.to_account_info(),
                    update_authority: ctx.accounts.collection_mint.to_account_info(),
                    collection_mint: ctx.accounts.collection_mint.to_account_info(),
                    collection_metadata: ctx.accounts.collection_metadata.to_account_info(),
                    collection_master_edition: ctx.accounts.collection_master_edition.to_account_info(),
                },
                signer_seeds
            ),
            None
        )?;

        ctx.accounts.token_lottery.total_tickets = ctx.accounts.token_lottery.total_tickets
            .checked_add(1)
            .ok_or(ErrorCode::ArithmeticOverflow)?;

        Ok(())
    }

    pub fn commit_randomness(ctx: Context<CommitRandomness>) -> Result<()> {
        let clock = Clock::get()?;
        let token_lottery = &mut ctx.accounts.token_lottery;

        if clock.slot < token_lottery.end_time {
            return err!(ErrorCode::LotteryNotOpen);
        }

        if ctx.accounts.payer.key() != token_lottery.authority {
            return err!(ErrorCode::Unauthorized);
        }

        let randomness_data = RandomnessAccountData::parse(
            ctx.accounts.randomness_account.data.borrow()
        ).unwrap();

        if randomness_data.seed_slot != clock.slot {
            return err!(ErrorCode::RandomnessAlreadyRevealed);
        }

        token_lottery.randomness_account = ctx.accounts.randomness_account.key();

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,

    #[account(
        init,
        payer = payer,
        space = 8 + TokenLottery::INIT_SPACE,
        seeds = [b"token_lottery".as_ref()],
        bump
    )]
    pub token_lottery: Account<'info, TokenLottery>,

    pub system_program: Program<'info, System>,
}

#[account]
#[derive(InitSpace)]
pub struct TokenLottery {
    pub bump: u8,
    pub winner: u64,
    pub winner_chosen: bool,
    pub start_time: u64,
    pub end_time: u64,
    pub lottery_pot_amount: u64,
    pub total_tickets: u64,
    pub ticket_price: u64,
    pub authority: Pubkey,
    pub randomness_account: Pubkey,
}

#[derive(Accounts)]
pub struct InitializeLibrary<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,

    #[account(
        init,
        payer = payer,
        mint::decimals = 0,
        mint::authority = collection_mint,
        mint::freeze_authority = collection_mint,
        seeds = [b"collection_mint".as_ref()],
        bump
    )]
    pub collection_mint: InterfaceAccount<'info, Mint>,

    #[account(
        init,
        payer = payer,
        token::mint = collection_mint,
        token::authority = collection_mint,
        seeds = [b"collection_token_account".as_ref()],
        bump
    )]
    pub collection_token_account: InterfaceAccount<'info, TokenAccount>,

    /// CHECK: This account is used for [explain purpose and why it's safe]
    #[account(
    mut, 
    seeds = [
        b"metadata".as_ref(),
        token_metadata_program.key().as_ref(), 
        collection_mint.key().as_ref()
        ], 
    bump, 
    seeds::program = token_metadata_program.key()
    )]
    pub metadata: UncheckedAccount<'info>,

    /// CHECK: This account is used for [explain purpose and why it's safe]
    #[account(
    mut, 
    seeds = [
        b"metadata".as_ref(),
        token_metadata_program.key().as_ref(),
        collection_mint.key().as_ref(),
        b"edition".as_ref()
        ],
    bump,
    seeds::program = token_metadata_program.key()
    )]
    pub master_edition: UncheckedAccount<'info>,

    pub system_program: Program<'info, System>,
    pub token_program: Interface<'info, TokenInterface>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub token_metadata_program: Program<'info, Metadata>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct BuyTicket<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,

    #[account(
        mut,    
        seeds = [b"token_lottery".as_ref()], 
        bump=token_lottery.bump
    )]
    pub token_lottery: Account<'info, TokenLottery>,

    #[account(
        init,
        payer = payer,
        seeds = [token_lottery.total_tickets.to_le_bytes().as_ref()],
        mint::decimals = 0,
        mint::authority = collection_mint,
        mint::freeze_authority = collection_mint,
        bump
    )]
    pub ticket_mint: InterfaceAccount<'info, Mint>,

    #[account(mut, seeds = [b"collection_mint".as_ref()], bump)]
    pub collection_mint: InterfaceAccount<'info, Mint>,

    /// CHECK: This account is used for [explain purpose and why it's safe]
    #[account(    
    mut, 
    seeds = [
        b"metadata".as_ref(),
        token_metadata_program.key().as_ref(), 
        ticket_mint.key().as_ref()
        ], 
    bump, 
    seeds::program = token_metadata_program.key())]
    pub ticket_metadata: UncheckedAccount<'info>,

    /// CHECK: This account is used for [explain purpose and why it's safe]
    #[account(
    mut,  
    seeds = [
        b"metadata".as_ref(),
        token_metadata_program.key().as_ref(),
        ticket_mint.key().as_ref(),
        b"edition".as_ref()
        ],
    bump,
    seeds::program = token_metadata_program.key()
    )]
    pub ticket_master_edition: UncheckedAccount<'info>,

    #[account(
        init,
        payer = payer,
        associated_token::mint = ticket_mint,
        associated_token::authority = payer,
        associated_token::token_program = token_program
    )]
    pub destination: InterfaceAccount<'info, TokenAccount>,

    /// CHECK: This account is used for [explain purpose and why it's safe]
    #[account(    
    mut, 
    seeds = [
        b"metadata".as_ref(),
        token_metadata_program.key().as_ref(), 
        collection_mint.key().as_ref()
        ], 
    bump, 
    seeds::program = token_metadata_program.key())]
    pub collection_metadata: UncheckedAccount<'info>,

    /// CHECK: This account is used for [explain purpose and why it's safe]
    #[account(
    mut,  
    seeds = [
        b"metadata".as_ref(),
        token_metadata_program.key().as_ref(),
        collection_mint.key().as_ref(),
        b"edition".as_ref()
        ],
    bump,
    seeds::program = token_metadata_program.key()
    )]
    pub collection_master_edition: UncheckedAccount<'info>,

    pub token_metadata_program: Program<'info, Metadata>,
    pub token_program: Interface<'info, TokenInterface>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct CommitRandomness<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,

    #[account(mut, seeds = [b"token_lottery".as_ref()], bump=token_lottery.bump)]
    pub token_lottery: Account<'info, TokenLottery>,

    // pub randomness_account: Account<'info, RandomnessAccount>,
    /// CHECK: This account is used to provide randomness data for the lottery draw. Validation is handled by the Switchboard oracle program.
    pub randomness_account: UncheckedAccount<'info>,

    pub system_program: Program<'info, System>,
}

#[error_code]
pub enum ErrorCode {
    #[msg("Lottery not started")]
    LotteryNotOpen,
    #[msg("Arithmetic overflow")]
    ArithmeticOverflow,
    #[msg("Unauthorized")]
    Unauthorized,
    #[msg("Randomness already revealed")]
    RandomnessAlreadyRevealed,
}

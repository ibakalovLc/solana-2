use anchor_lang::prelude::*;

declare_id!("HQGiChp5tSEveMmSnAG2dhmtyi57vftJWk7vTyrV8HBd");

#[program]
pub mod crud_app {
    use super::*;

    pub fn create_jurnal_entry(
        ctx: Context<CreateEntry>,
        _title: String,
        _message: String,
    ) -> Result<()> {
        let jurnal_entry = &mut ctx.accounts.jurnal_entry;
        jurnal_entry.owner = ctx.accounts.owner.key();
        jurnal_entry.title = _title;
        jurnal_entry.message = _message;

        Ok(())
    }

    pub fn update_jurnal_entry(ctx: Context<UpdateEntry>, _title: String) -> Result<()> {
        let jurnal_entry = &mut ctx.accounts.jurnal_entry;

        jurnal_entry.title = _title;

        Ok(())
    }

    pub fn delete_jurnal_entry(_ctx: Context<DeleteEntry>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(title: String)]
pub struct CreateEntry<'info> {
    #[account(init, seeds=[title.as_bytes(), owner.key().as_ref()], bump, space = 8 + JurnalEntryState::INIT_SPACE, payer = owner)]
    pub jurnal_entry: Account<'info, JurnalEntryState>,

    #[account(mut)]
    pub owner: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(title: String)]
pub struct UpdateEntry<'info> {
    #[account(mut, seeds=[title.as_bytes(), owner.key().as_ref()], bump, realloc = 8 + JurnalEntryState::INIT_SPACE, realloc::payer = owner, realloc::zero = true)]
    pub jurnal_entry: Account<'info, JurnalEntryState>,

    #[account(mut)]
    pub owner: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(title: String)]
pub struct DeleteEntry<'info> {
    #[account(mut, seeds=[title.as_bytes(), owner.key().as_ref()], bump, close = owner)]
    pub jurnal_entry: Account<'info, JurnalEntryState>,

    #[account(mut)]
    pub owner: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[account]
#[derive(InitSpace, Debug)]
pub struct JurnalEntryState {
    pub owner: Pubkey,

    #[max_len(50)]
    pub title: String,

    #[max_len(100)]
    pub message: String,
}

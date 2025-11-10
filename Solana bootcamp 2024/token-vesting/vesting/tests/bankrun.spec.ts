import { Keypair, PublicKey, SystemProgram, Transaction } from '@solana/web3.js'
import { BN, Program, setProvider } from '@coral-xyz/anchor'
import { fromWorkspace, LiteSVMProvider } from 'anchor-litesvm'

import IDL from '../target/idl/vesting.json'
import { SYSTEM_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/native/system'
import { Vesting } from '../target/types/vesting'
import { TOKEN_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/utils/token'
import { AccountLayout, createInitializeMintInstruction, createMintToInstruction, MINT_SIZE } from '@solana/spl-token'

import path from 'path'

import { Clock, LiteSVM } from 'litesvm'

describe('bankrun', () => {
  const companyName: string = 'companyName'
  let beneficiary: Keypair
  let mintKeyPair: Keypair
  let employer: Keypair

  let context: LiteSVM
  let provider: LiteSVMProvider
  let program: Program<Vesting>
  let vestingAccountKey: PublicKey
  let employeeAccount: PublicKey
  let treasuryTokenAccount: PublicKey

  before(async () => {
    context = fromWorkspace(path.join(__dirname, '../'))
    provider = new LiteSVMProvider(context)
    setProvider(provider)

    beneficiary = Keypair.generate()
    employer = Keypair.generate()
    mintKeyPair = Keypair.generate()
    program = new Program<Vesting>(IDL as Vesting, provider)

    context.setAccount(beneficiary.publicKey, {
      data: new Uint8Array([]),
      executable: false,
      lamports: 100_000_000_000,
      owner: SYSTEM_PROGRAM_ID,
    })

    context.setAccount(employer.publicKey, {
      data: new Uint8Array([]),
      executable: false,
      lamports: 100_000_000_000,
      owner: SYSTEM_PROGRAM_ID,
    })

    const transaction = new Transaction({
      feePayer: employer.publicKey,
      blockhash: await context.latestBlockhash(),
      lastValidBlockHeight: 1000000000,
    })

    transaction
      .add(
        SystemProgram.createAccount({
          fromPubkey: employer.publicKey,
          newAccountPubkey: mintKeyPair.publicKey,
          space: MINT_SIZE, // Use MINT_SIZE constant (82 bytes)
          lamports: 1461600,
          programId: TOKEN_PROGRAM_ID,
        }),
        createInitializeMintInstruction(
          mintKeyPair.publicKey,
          6,
          employer.publicKey,
          employer.publicKey,
          TOKEN_PROGRAM_ID,
        ),
      )
      .sign(employer, mintKeyPair)

    try {
      context.sendTransaction(transaction)
    } catch (error) {
      console.log('error', error)
    }

    ;[vestingAccountKey] = PublicKey.findProgramAddressSync([Buffer.from(companyName)], program.programId)
    ;[treasuryTokenAccount] = PublicKey.findProgramAddressSync(
      [Buffer.from('vesting_treasury'), Buffer.from(companyName)],
      program.programId,
    )
    ;[employeeAccount] = PublicKey.findProgramAddressSync(
      [Buffer.from('employee_vesting'), beneficiary.publicKey.toBuffer(), vestingAccountKey.toBuffer()],
      program.programId,
    )
  })

  it('Should create vesting account', async () => {
    const tx = await program.methods
      .createVestingAccount(companyName)
      .accounts({
        signer: employer.publicKey,
        mint: mintKeyPair.publicKey,
        tokenProgram: TOKEN_PROGRAM_ID,
      })
      .signers([employer])
      .rpc({ commitment: 'confirmed' })

    const vestingAccountData = await program.account.vestingAccount.fetch(vestingAccountKey, 'confirmed')

    console.log('Create Vesting Account Tx: ', tx, vestingAccountData)
  })

  it('Should fund the treasuri account token account', async () => {
    const transaction = new Transaction({
      feePayer: employer.publicKey,
      blockhash: await context.latestBlockhash(),
      lastValidBlockHeight: 1000000000,
    }).add(createMintToInstruction(mintKeyPair.publicKey, treasuryTokenAccount, employer.publicKey, 4_000_000))

    transaction.sign(employer)
    transaction.serializeMessage()

    // const execute =  context.sendTransaction(transaction);
    // const getTreasuryAccount = await context.getAccount(treasuryTokenAccount);
    // const tokenAccountData = AccountLayout.decode(getTreasuryAccount.data)
  })

  it('Should create employee vesting account', async () => {
    try {
      const tx = await program.methods
        .createEmployeeAccount(new BN(0), new BN(1000), new BN(0), new BN(1000))
        .accounts({
          owner: employer.publicKey,
          beneficiary: beneficiary.publicKey,
          vestingAccount: vestingAccountKey,
        } as any)
        .signers([employer])
        .rpc({ commitment: 'confirmed' })

      console.log('beneficiary', tx)
    } catch (error) {
      console.log('error', error)
    }
  })

  it("Should claim the employee's tokens", async () => {
    const currentClock = await context.getClock()
    context.setClock(
      new Clock(
        currentClock.slot,
        currentClock.epochStartTimestamp,
        currentClock.epoch,
        currentClock.leaderScheduleEpoch,
        BigInt(1000),
      ),
    )

    const tx = await program.methods
      .claimTokens(companyName)
      .accounts({
        owner: employer.publicKey,
        beneficiary: beneficiary.publicKey,
        vestingAccount: vestingAccountKey,
      } as any)
      .signers([employer])
      .rpc({ commitment: 'confirmed' })
  })
})

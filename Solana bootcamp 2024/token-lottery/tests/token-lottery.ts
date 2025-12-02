import {
  Program,
  web3,
  BN,
  AnchorProvider,
  setProvider,
  workspace,
} from "@coral-xyz/anchor";
import { TokenLottery } from "../target/types/token_lottery";
import { getExplorerLink } from "@solana-developers/helpers";
import { TOKEN_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/utils/token";

describe("token-lottery", () => {
  // Configure the client to use the local cluster.
  const provider = AnchorProvider.env();
  setProvider(AnchorProvider.env());
  const wallet = provider.wallet;
  const program = workspace.tokenLottery as Program<TokenLottery>;
  const computeTx = web3.ComputeBudgetProgram.setComputeUnitLimit({
    units: 4000000,
  });

  const buyTickets = async () => {
    const buyTicket = await program.methods
      .buyTicket()
      .accounts({
        tokenProgram: TOKEN_PROGRAM_ID,
      })
      .instruction();

    const getBLockHash = await provider.connection.getLatestBlockhash();
    const priorityTx = web3.ComputeBudgetProgram.setComputeUnitPrice({
      microLamports: 1,
    });

    const tx = new web3.Transaction({
      feePayer: wallet.publicKey,
      blockhash: getBLockHash.blockhash,
      lastValidBlockHeight: getBLockHash.lastValidBlockHeight,
    })
      .add(buyTicket)
      .add(computeTx)
      .add(priorityTx);

    const txId = await provider.sendAndConfirm(tx, [], {
      skipPreflight: true,
    });

    console.log("Ticket bought:", txId);
  };

  it("Is initialized!", async () => {
    // Add your test here.
    const getBLockHash = await provider.connection.getLatestBlockhash();

    // Try to initialize config, skip if already exists
    try {
      const initConfig = await program.methods
        .initializeConfig(new BN(0), new BN(10000), new BN(10000))
        .instruction();

      const tx = new web3.Transaction({
        feePayer: wallet.publicKey,
        blockhash: getBLockHash.blockhash,
        lastValidBlockHeight: getBLockHash.lastValidBlockHeight,
      }).add(initConfig);

      const txId = await provider.sendAndConfirm(tx, [], {
        skipPreflight: true,
      });
      
      console.log("Config initialized:", txId);
    } catch (error: any) {
      throw error;
    }

    const initLoteryTx = await program.methods
      .initilizeLibrary()
      .accounts({
        tokenProgram: TOKEN_PROGRAM_ID,
      })
      .signers([wallet.payer])
      .instruction();

    const tx2 = new web3.Transaction({
      feePayer: wallet.publicKey,
      blockhash: getBLockHash.blockhash,
      lastValidBlockHeight: getBLockHash.lastValidBlockHeight,
    }).add(initLoteryTx);

    try {
      const lotaryTx = await provider.sendAndConfirm(tx2, [], {
        skipPreflight: true,
      });
      console.log(getExplorerLink("address", lotaryTx, "devnet"));
    } catch (exception: any) {
      console.log(exception);
    }

    await buyTickets();
  });
});

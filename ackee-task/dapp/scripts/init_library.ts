import { Program, web3, workspace } from "@coral-xyz/anchor";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Dapp } from "../target/types/dapp";
import { provider } from "./anchor_provider";

const { wallet } = provider;
const program = workspace.dapp as Program<Dapp>;

const [, , name] = process.argv; // Default to "Test" if not provided

if (!name) {
  console.error("Please provide name");
  process.exit(1);
}

(async () => {
  const balance = await provider.connection.getBalance(wallet.publicKey);
  console.log("Balance:", balance / 1e9, "SOL", wallet.publicKey.toString());
  console.log("====================\n");

  const initLoteryTx = await program.methods
    .initLibrary(name)
    .accounts({
      tokenProgram: TOKEN_PROGRAM_ID,
    })
    .signers([wallet.payer])
    .instruction();

  const getBLockHash = await provider.connection.getLatestBlockhash();

  const tx = new web3.Transaction({
    feePayer: wallet.publicKey,
    blockhash: getBLockHash.blockhash,
    lastValidBlockHeight: getBLockHash.lastValidBlockHeight,
  }).add(initLoteryTx);

  console.warn({
    initLibrary: await provider.sendAndConfirm(tx, [], {
      skipPreflight: false,
    }),
  });
})();

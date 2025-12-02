import { web3, BN } from "@coral-xyz/anchor";
import { Program, workspace } from "@coral-xyz/anchor";
import { Dapp } from "../target/types/dapp";
import { provider } from "./anchor_provider";

const { wallet } = provider;
const program = workspace.dapp as Program<Dapp>;
const endTime = Math.floor(Date.now() / 1000) + 86400;

const [, , name] = process.argv; // Default to "Test" if not provided

if (!name) {
  console.error("Please provide name");
  process.exit(1);
}

(async () => {
  const startAutionTx = await program.methods
    .startAuction(name, new BN(endTime))
    .accounts({
      seller: wallet.payer.publicKey,
    })
    .signers([wallet.payer])
    .instruction();

  const getBLockHash = await provider.connection.getLatestBlockhash();

  const tx = new web3.Transaction({
    feePayer: wallet.publicKey,
    blockhash: getBLockHash.blockhash,
    lastValidBlockHeight: getBLockHash.lastValidBlockHeight,
  }).add(startAutionTx);

  console.warn({
    startAuction: await provider.sendAndConfirm(tx, [], {
      skipPreflight: false,
    }),
  });
})();

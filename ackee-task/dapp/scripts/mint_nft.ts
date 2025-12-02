import { web3, BN, workspace, Program } from "@coral-xyz/anchor";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { ComputeBudgetProgram } from "@solana/web3.js";
import { provider } from "./anchor_provider";
import { Dapp } from "../target/types/dapp";

const computeBudgetIx = ComputeBudgetProgram.setComputeUnitLimit({
  units: 400_000, // Start with 400k, increase if needed
});

const [, , nftName, price, libraryName, bidStep] = process.argv; // Default to "Test" if not provided

if (!nftName || !price || !libraryName || !bidStep) {
  console.error("Please provide nft name, price, library name and bid step");
  process.exit(1);
}

const { wallet } = provider;
const program = workspace.dapp as Program<Dapp>;

(async () => {
  const mintNftTx = await program.methods
    .mintNft(
      nftName,
      new BN(Number(price)),
      libraryName,
      new BN(Number(bidStep))
    )
    .accounts({
      payer: wallet.payer.publicKey,
      tokenProgram: TOKEN_PROGRAM_ID,
    })
    .signers([wallet.payer])
    .instruction();

  const getBLockHash = await provider.connection.getLatestBlockhash();

  const tx2 = new web3.Transaction({
    feePayer: wallet.publicKey,
    blockhash: getBLockHash.blockhash,
    lastValidBlockHeight: getBLockHash.lastValidBlockHeight,
  })
    .add(computeBudgetIx)
    .add(mintNftTx);
  console.log("Minting NFT:", nftName, "for", price, "with bid step", bidStep);

  console.warn({
    mint: await provider.sendAndConfirm(tx2, [], {
      skipPreflight: false,
    }),
  });
})();

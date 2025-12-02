import { web3, BN, workspace, Program } from "@coral-xyz/anchor";
import IDL from "../target/idl/dapp.json";
import { PublicKey } from "@solana/web3.js";

import { Dapp } from "../target/types/dapp";
import { provider } from "./anchor_provider";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

const [, , nftName] = process.argv; // Default to "Test" if not provided

if (!nftName) {
  console.error("Please provide nft name");
  process.exit(1);
}

let nftInfoPDA = (name: string) =>
  PublicKey.findProgramAddressSync(
    [
      Buffer.from(
        JSON.parse(IDL.constants.find((c) => c.name === "BUID_NFT_SEEDS").value)
      ),
      Buffer.from(name),
    ],
    new PublicKey(IDL.address)
  );

const { wallet } = provider;
const program = workspace.dapp as Program<Dapp>;

(async () => {
  const nftInfoAccount = await program.account.nftInfo.fetch(
    nftInfoPDA(nftName)[0]
  );

  const bidNftTx = await program.methods
    .bidNft(nftName)
    .accounts({
      previousBidder: nftInfoAccount.currentBidder,
      payer: wallet.payer.publicKey,
      tokenProgram: TOKEN_PROGRAM_ID,
    })
    .signers([wallet.payer])
    .instruction();

  const getBLockHash = await provider.connection.getLatestBlockhash();

  const tx = new web3.Transaction({
    feePayer: wallet.publicKey,
    blockhash: getBLockHash.blockhash,
    lastValidBlockHeight: getBLockHash.lastValidBlockHeight,
  }).add(bidNftTx);

  console.warn({
    bidNft: await provider.sendAndConfirm(tx, [], {
      skipPreflight: false,
    }),
  });
})();

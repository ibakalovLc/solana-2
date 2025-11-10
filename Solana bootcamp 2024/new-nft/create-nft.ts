import { createNft, fetchDigitalAsset, mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { airdropIfRequired, getExplorerLink, getKeypairFromFile } from "@solana-developers/helpers";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { generateSigner, keypairIdentity, percentAmount, publicKey } from "@metaplex-foundation/umi";
import { clusterApiUrl, Connection, } from "@solana/web3.js";


const connection = new Connection(clusterApiUrl("devnet"));
const user = await getKeypairFromFile();


// await airdropIfRequired(connection, user.publicKey, 1* LAMPORTS_PER_SOL, 0.5 * LAMPORTS_PER_SOL);

console.log('Loaded user:', user.publicKey.toBase58());

const umi = createUmi(connection.rpcEndpoint);

umi.use(mplTokenMetadata());

const umiUser = umi.eddsa.createKeypairFromSecretKey(user.secretKey);
umi.use(keypairIdentity(umiUser));

const collectionAddress = publicKey("FCY9UK776xgPixNbaxZkrPWCj3Hnqme9cP8d7JqPZmi2");

const nftMint = generateSigner(umi);

console.log('Creating NFT with mint:', nftMint.publicKey);

const mint = generateSigner(umi);

const transaction = await createNft(umi,
    {
        mint: nftMint,
        name: "My NFT",
        uri: "https://raw.githubusercontent.com/ibakalovLc/solana/main/nft.json",
        sellerFeeBasisPoints: percentAmount(0),
        collection: {
            key: collectionAddress,
            verified: false,
        },

    }
)

const result = await transaction.sendAndConfirm(umi);

console.log('Transaction confirmed:', result);
console.log('Signature:', result.signature);

// Wait for RPC node to index the new account
console.log('Waiting for account to be indexed...');
await new Promise(resolve => setTimeout(resolve, 10000)); // 3 seconds

const createdNft = await fetchDigitalAsset(umi, nftMint.publicKey);

console.log('Created NFT:', getExplorerLink("address", createdNft.publicKey, "devnet"));

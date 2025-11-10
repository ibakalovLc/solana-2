import {  findMasterEditionPda, findMetadataPda, mplTokenMetadata, verifyCollection, verifyCollectionV1 } from "@metaplex-foundation/mpl-token-metadata";
import { getExplorerLink, getKeypairFromFile } from "@solana-developers/helpers";
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

const nftAddress = publicKey("2DeBNvATwChqJAkxuVwtpSn3spkePeEsgYh5gjupQFRa");

const transaction =  verifyCollectionV1(umi,
  {
        metadata: findMetadataPda(umi, { mint: nftAddress }),
        collectionMint: collectionAddress,
   }
)   

const result = await transaction.sendAndConfirm(umi);

console.log('Transaction confirmed:', result);
console.log('Signature:', result.signature);    
console.log('NFT:', getExplorerLink("address", nftAddress, "devnet"));


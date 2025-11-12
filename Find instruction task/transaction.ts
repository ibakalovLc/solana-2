
import { Connection, PublicKey, Keypair, Transaction, TransactionInstruction, LAMPORTS_PER_SOL, TransactionConfirmationStrategy } from '@solana/web3.js';
import bs58  from 'bs58';
import { Buffer } from "buffer";


const PROGRAM_ID = new PublicKey('AjHcHpRLsDreyemDNVKjc6w24UdqkQCoNHdGzUgj6fUS');
const PRIVATE_KEY_BASE58 = '9pKmYkBddCv25iAoh98JUHS82HciNP8Wy9fEeB42NRxjX5uYJHrLePnyUo4xtdLy4hHK3r2SEJM2MMLUSkS9VYh';
const RPC_URL = 'http://localhost:8899';


async function testInstructions() {
  // Load payer
  const secretKey = new Uint8Array(bs58.decode(PRIVATE_KEY_BASE58));
  const payer = Keypair.fromSecretKey(secretKey);
  
  console.log(`🔑 Account: ${payer.publicKey.toBase58()}`);
  console.log(`🌐 RPC: ${RPC_URL}\n`);

  const connection = new Connection(RPC_URL, 'confirmed');

  // Check balance
  const balance = await connection.getBalance(payer.publicKey);
  console.log(`💰 Balance: ${(balance / LAMPORTS_PER_SOL).toFixed(9)} SOL`);
  
  if (balance < 5000) {
    console.log('\n⚠️  Not enough SOL! Request airdrop:');
    console.log(`  solana airdrop 2 ${payer.publicKey.toBase58()} --url devnet`);
    return;
  }

    try {
        const hexData = 
            // In solana program there are 16 bites before the data
            "00 00 00 00 00 9B 6A D6" + // Satisfy  r2 &= r3 and r2 ^= r3
            "00 00 00 00 00 00 00 00" // Satisfy r1 = *(u64 *)(r1 + 0x18) and then r2 |= r1

        const instruction = new TransactionInstruction({
          programId: PROGRAM_ID,
          keys: [],
          data:  Buffer.from(hexData.replaceAll(' ', ''), 'hex'), 
        });

      console.log('📦 Hex: ' + hexData.replaceAll(' ', ''));
      
      const {lastValidBlockHeight, blockhash } = await connection.getLatestBlockhash();
      const transaction = new Transaction().add(instruction);
      transaction.recentBlockhash = blockhash;
      transaction.sign(payer);

      console.log('⏳ Sending transaction...');

      const signature = await connection.sendRawTransaction(transaction.serialize(), {
        skipPreflight: false,
        maxRetries: 3
      });
    
      const transactionConfirmationStrategy: TransactionConfirmationStrategy = {
        signature,
        blockhash,
        lastValidBlockHeight
      }
     
      await connection.confirmTransaction(transactionConfirmationStrategy, 'confirmed');

  
      console.log(`✅ Transaction confirmed`);
      console.log(`🔗 ${signature}`);

      // Get logs
      const txResponse = await connection.getTransaction(signature, { maxSupportedTransactionVersion: 0 });
      
      if (txResponse?.meta?.logMessages) {
        console.log(`📋 Program output:`);
        txResponse.meta.logMessages.forEach(log => {
          if (log.includes('Program log:')) console.log(log);
        });
      }

    } catch (exception) {
      console.log(`❌ Exception: ${(exception as any)?.message}`);
    }
}



// Run tests
testInstructions().catch(console.error);
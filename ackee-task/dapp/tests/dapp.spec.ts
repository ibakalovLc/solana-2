import { deserialize, Schema } from "borsh";
import { BN } from "@coral-xyz/anchor";
import { Program, setProvider } from "@coral-xyz/anchor";
import IDL from "../target/idl/dapp.json";
import { Dapp } from "../target/types/dapp";
import {
  Clock,
  FailedTransactionMetadata,
  LiteSVM,
  TransactionMetadata,
} from "litesvm";
import {
  ComputeBudgetProgram,
  Keypair,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { fromWorkspace, LiteSVMProvider } from "anchor-litesvm";
import { SYSTEM_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/native/system";
import {
  getAccount,
  getAssociatedTokenAddressSync,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { expect } from "chai";
import path from "path";

const startName = "Test";
const startLibraryName = "Test";

// Set the clock to a realistic timestamp (e.g., current time)
const currentTime = Math.floor(
  new Date("2025-01-01T00:00:00Z").getTime() / 1000
);

const RENT_ESCROW_ACCOUNT = 1176240;
const RENT_AUCTION_INFO_ACCOUNT = 1454640;
const CREATE_ASSOCIATE_TOKEN_ACCOUNT_FEES = 3015520;

const METADATA_PROGRAM_ID = new PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);
const START_LAMPORTS = 100_000_000_000;
const TRANSFER_FEE = 5000;

let escrowBidderPDA = (libraryName: string, name: string) =>
  PublicKey.findProgramAddressSync(
    [
      Buffer.from(
        JSON.parse(
          IDL.constants.find((c) => c.name === "BIDDER_ESCROW_SEEDS").value
        )
      ),
      Buffer.from(libraryName),
      Buffer.from(name),
    ],
    new PublicKey(IDL.address)
  );

let accountStatePDA = (name: string) =>
  PublicKey.findProgramAddressSync(
    [
      Buffer.from(
        JSON.parse(
          IDL.constants.find((c) => c.name === "AUCTION_STATE_SEEDS").value
        )
      ),
      Buffer.from(name),
    ],
    new PublicKey(IDL.address)
  );

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

// Counter to ensure unique blockhashes
let transactionCounter = 0;

const transactionObj = async (creator: Keypair, context: LiteSVM) => {
  // Force a new blockhash by advancing the slot significantly
  const currentSlot = context.getClock().slot;
  transactionCounter++;
  context.warpToSlot(BigInt(currentSlot + BigInt(transactionCounter * 10)));

  // Perform a dummy operation to force blockhash update
  const dummyKeypair = Keypair.generate();
  context.setAccount(dummyKeypair.publicKey, {
    data: new Uint8Array([]),
    executable: false,
    lamports: 1000,
    owner: SYSTEM_PROGRAM_ID,
  });

  return new Transaction({
    feePayer: creator.publicKey,
    blockhash: context.latestBlockhash(),
    lastValidBlockHeight: 1000000000,
  });
};

const computeBudgetIx = ComputeBudgetProgram.setComputeUnitLimit({
  units: 400_000, // Start with 400k, increase if needed
});

const generateBidders = ({
  context,
  count,
  name = startName,
  libraryName = startLibraryName,
}): Array<[Keypair, PublicKey]> => {
  const bidders = [];

  for (let i = 0; i < count; i++) {
    const highestBidder = Keypair.generate();

    const escrowBidder = escrowBidderPDA(libraryName, name);

    bidders.push([highestBidder, escrowBidder[0]]);

    context.setAccount(highestBidder.publicKey, {
      data: new Uint8Array([]),
      executable: false,
      lamports: 100_000_000_000,
      owner: SYSTEM_PROGRAM_ID,
    });
  }

  return bidders;
};

async function initLibrary(
  context: LiteSVM,
  creator: Keypair,
  program: Program<Dapp>,
  name = startLibraryName
): Promise<TransactionMetadata | FailedTransactionMetadata> {
  const transaction = await transactionObj(creator, context);

  const initLibraryInstruction = await program.methods
    .initLibrary(name)
    .accounts({
      signer: creator.publicKey,
      tokenProgram: TOKEN_PROGRAM_ID,
    })
    .instruction();

  transaction.add(initLibraryInstruction).sign(creator);

  return context.sendTransaction(transaction);
}

async function startAuction({
  context,
  creator,
  program,
  name = startLibraryName,
  endTime = 1000000000,
}: {
  context: LiteSVM;
  creator: Keypair;
  program: Program<Dapp>;
  name?: string;
  endTime?: number;
}): Promise<TransactionMetadata | FailedTransactionMetadata> {
  const transaction = await transactionObj(creator, context);

  const startAuctionInstruction = await program.methods
    .startAuction(name, new BN(endTime))
    .accounts({
      seller: creator.publicKey,
    })
    .instruction();

  transaction.add(computeBudgetIx).add(startAuctionInstruction).sign(creator);

  return context.sendTransaction(transaction);
}

async function mintNft({
  context,
  creator,
  program,
  name = startName,
  price = 40000,
  libraryName = startLibraryName,
  bidStep = new BN(500),
}: {
  context: LiteSVM;
  creator: Keypair;
  program: Program<Dapp>;
  name?: string;
  price?: number;
  bidStep?: BN;
  libraryName?: string;
}): Promise<TransactionMetadata | FailedTransactionMetadata> {
  const transaction = await transactionObj(creator, context);

  const mintNftInstruction = await program.methods
    .mintNft(name, new BN(price), libraryName, bidStep)
    .accounts({
      payer: creator.publicKey,
      tokenProgram: TOKEN_PROGRAM_ID,
    })
    .signers([creator])
    .instruction();

  transaction.add(computeBudgetIx).add(mintNftInstruction).sign(creator);

  return context.sendTransaction(transaction);
}

async function bidNft({
  context,
  creator,
  program,
  highestBidderPubkey,
  name = startName,
}: {
  context: LiteSVM;
  creator: Keypair;
  program: Program<Dapp>;
  highestBidderPubkey?: PublicKey;
  name?: string;
}): Promise<TransactionMetadata | FailedTransactionMetadata> {
  const transaction = await transactionObj(creator, context);

  let escrowAccount;

  if (highestBidderPubkey) {
    try {
      escrowAccount = await program.account.escrowBidder.fetch(
        highestBidderPubkey
      );
    } catch (e) {
      escrowAccount = null;
    }
  }

  const nftInfoAccount = await program.account.nftInfo.fetch(
    nftInfoPDA(name)[0]
  );

  const bidNftInstruction = await program.methods
    .bidNft(name)
    .accounts({
      previousBidder: nftInfoAccount.currentBidder,
      payer: creator.publicKey,
      tokenProgram: TOKEN_PROGRAM_ID,
    })
    .instruction();

  transaction
    .add(
      new TransactionInstruction({
        keys: [],
        programId: new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
        data: Buffer.from(`Bid ${Date.now()}-${Math.random()}`),
      })
    )
    .add(computeBudgetIx)
    .add(bidNftInstruction)
    .sign(creator);

  return context.sendTransaction(transaction);
}

async function transferNft({
  context,
  creator,
  program,
  name = startName,
  recipient,
}: {
  context: LiteSVM;
  creator: Keypair;
  program: Program<Dapp>;
  name?: string;
  recipient: PublicKey;
}): Promise<TransactionMetadata | FailedTransactionMetadata> {
  const transaction = await transactionObj(creator, context);

  const transferNftInstruction = await program.methods
    .transferNft(name)
    .accounts({
      owner: creator.publicKey,
      recipient: recipient,
      tokenProgram: TOKEN_PROGRAM_ID,
    })
    .instruction();

  transaction.add(computeBudgetIx).add(transferNftInstruction).sign(creator);

  return context.sendTransaction(transaction);
}

describe("dapp", () => {
  let creator: Keypair;

  let libraryMintPDA = PublicKey.findProgramAddressSync(
    [
      Buffer.from(
        JSON.parse(
          IDL.constants.find((c) => c.name === "LIBRARY_MINT_SEEDS").value
        )
      ),
      Buffer.from(startLibraryName),
    ],
    new PublicKey(IDL.address)
  );

  let libraryAccountPDA = PublicKey.findProgramAddressSync(
    [
      Buffer.from(
        JSON.parse(
          IDL.constants.find((c) => c.name === "LIBRARY_ACCOUNT_SEEDS").value
        )
      ),
      Buffer.from(startLibraryName),
    ],
    new PublicKey(IDL.address)
  );

  let libraryMetadataPDA = PublicKey.findProgramAddressSync(
    [
      Buffer.from(
        JSON.parse(
          IDL.constants.find((c) => c.name === "LIBRARY_METADATA_SEEDS").value
        )
      ),
      METADATA_PROGRAM_ID.toBuffer(),
      libraryMintPDA[0].toBuffer(),
    ],
    METADATA_PROGRAM_ID
  );

  let masterEditionPDA = PublicKey.findProgramAddressSync(
    [
      Buffer.from(
        JSON.parse(
          IDL.constants.find((c) => c.name === "LIBRARY_METADATA_SEEDS").value
        )
      ),
      METADATA_PROGRAM_ID.toBuffer(),
      libraryMintPDA[0].toBuffer(),
      Buffer.from(
        JSON.parse(
          IDL.constants.find((c) => c.name === "LIBRARY_MASTER_EDITION_SEEDS")
            .value
        )
      ),
    ],
    METADATA_PROGRAM_ID
  );

  let context: LiteSVM;
  let provider: LiteSVMProvider;
  let program: Program<Dapp>;

  const createProvider = () => {
    context = fromWorkspace(path.join(__dirname, "../"));
    provider = new LiteSVMProvider(context);
    setProvider(provider);

    context.addProgramFromFile(
      METADATA_PROGRAM_ID,
      path.join(__dirname, "./metadata_program.so")
    );

    const c = context.getClock();

    context.setClock(
      new Clock(
        c.slot,
        c.epochStartTimestamp,
        c.epoch,
        c.leaderScheduleEpoch,
        BigInt(currentTime)
      )
    );

    creator = Keypair.generate();
    program = new Program<Dapp>(IDL as Dapp, provider);

    context.setAccount(creator.publicKey, {
      data: new Uint8Array([]),
      executable: false,
      lamports: 100_000_000_000,
      owner: SYSTEM_PROGRAM_ID,
    });
  };

  describe("init library", () => {
    beforeEach(async () => {
      createProvider();
    });

    it("Should initialize accounts", async () => {
      const tx = await initLibrary(context, creator, program);

      const libraryMintAccount = context.getAccount(libraryMintPDA[0]);
      const libraryAccountAccount = context.getAccount(libraryAccountPDA[0]);
      const libraryMetadataAccount = context.getAccount(libraryMetadataPDA[0]);
      const libraryMasterEditionAccount = context.getAccount(
        masterEditionPDA[0]
      );

      // Check if transaction failed
      if ("err" in tx) {
        console.error("❌ Transaction Failed!");
        console.error("Error:", tx.err());
        console.error("Logs:");
        console.error(tx.meta().prettyLogs());
        throw new Error(`Transaction failed: ${JSON.stringify(tx.err())}`);
      } else {
        expect(libraryMintAccount).to.not.be.null;
        expect(libraryAccountAccount).to.not.be.null;
        expect(libraryMetadataAccount).to.not.be.null;
        expect(libraryMasterEditionAccount).to.not.be.null;
      }
    });
  });

  describe("start auction", () => {
    beforeEach(async () => {
      createProvider();
    });

    it("should start auction", async () => {
      await initLibrary(context, creator, program);

      await startAuction({
        context,
        creator,
        program,
        name: startName,
        endTime: currentTime + 1000,
      });

      const accountStateAccountData = await program.account.auctionState.fetch(
        accountStatePDA(startName)[0]
      );

      expect(accountStateAccountData).to.eql({
        nftMint: SYSTEM_PROGRAM_ID,
        seller: creator.publicKey,
        auctionEndTime: new BN(currentTime + 1000),
        bump: accountStateAccountData.bump,
      });
    });

    it("should fail to start auction when time is not valid", async () => {
      await initLibrary(context, creator, program);
      const tx = await startAuction({
        context,
        creator,
        program,
        name: "Test",
        endTime: 1,
      });

      if ("err" in tx) {
        const logs = tx.meta().prettyLogs();
        expect(logs).to.include("Time set is not valid");
      } else {
        expect.fail("Transaction should have failed but succeeded");
      }
    });

    it("should fail to start auction when library account not found", async () => {
      const tx = await startAuction({
        context,
        creator,
        program,
        name: "NonExistentLibrary",
        endTime: currentTime + 1000,
      });

      if ("err" in tx) {
        const logs = tx.meta().prettyLogs();
        expect(logs).to.include(
          "The program expected this account to be already initialized."
        );
      } else {
        expect.fail("Transaction should have failed but succeeded");
      }
    });
  });

  describe("mint account library", () => {
    beforeEach(async () => {
      createProvider();
      await initLibrary(context, creator, program);
    });

    it("should mint a nft", async () => {
      const tx = await mintNft({
        context,
        creator,
        program,
        name: "Test",
        price: 40000,
        libraryName: "Test",
      });

      const nftInfoAccount = await program.account.nftInfo.fetch(
        nftInfoPDA("Test")[0]
      );

      expect(nftInfoAccount).to.not.be.null;
    });

    it("should fail to mint a nft when library account not found", async () => {
      const tx = await mintNft({
        context,
        creator,
        program,
        name: "Test",
        price: 40000,
        libraryName: "NonExistentLibrary",
      });

      if ("err" in tx) {
        const logs = tx.meta().prettyLogs();
        expect(logs).to.include(
          "The program expected this account to be already initialized."
        );
      } else {
        expect.fail("Transaction should have failed but succeeded");
      }
    });
  });

  describe("bid nft", () => {
    let bidders: Array<[Keypair, PublicKey]>;
    let bidStep = 10000;
    let price = 40000;

    beforeEach(async () => {
      createProvider();
      await initLibrary(context, creator, program);
      await startAuction({
        context,
        creator,
        program,
        name: "Test",
        endTime: currentTime + 1000,
      });
      await mintNft({
        context,
        creator,
        program,
        name: "Test",
        bidStep: new BN(bidStep),
        price,
        libraryName: "Test",
      });

      bidders = generateBidders({ context, count: 4 });
    });

    it("should bid on a nft", async () => {
      const tx = await bidNft({
        context,
        creator: bidders[0][0],
        highestBidderPubkey: bidders[0][1],
        program,
        name: "Test",
      });

      const nftInfoAccount = await program.account.nftInfo.fetch(
        nftInfoPDA("Test")[0]
      );

      expect(nftInfoAccount.currentPrice.toNumber()).to.eq(50000);
    });

    it("should bid on a nft and  return the bidding amount to the previous bidder", async () => {
      let nftInfoAccount = await program.account.nftInfo.fetch(
        nftInfoPDA("Test")[0]
      );

      for (const element of [0, 1, 0, 1, 2, 3, 0]) {
        const tx = await bidNft({
          context,
          creator: bidders[element][0],
          highestBidderPubkey: bidders[element][1],
          program,
          name: "Test",
        });
      }

      const bidderOne = await provider.connection.getAccountInfo(
        bidders[0][0].publicKey
      );

      const bidderTwo = await provider.connection.getAccountInfo(
        bidders[1][0].publicKey
      );

      nftInfoAccount = await program.account.nftInfo.fetch(
        nftInfoPDA("Test")[0]
      );

      expect(bidderOne?.lamports).to.equal(
        START_LAMPORTS - TRANSFER_FEE * 3 - (price + bidStep * 7)
      );

      expect(nftInfoAccount?.currentPrice.toNumber()).to.equal(
        price + bidStep * 7
      );
    });
  });

  describe("transfer nft", () => {
    let bidders: Array<[Keypair, PublicKey]>;
    const price = 1000000;
    const bidStep = 100000;
    let ownerBeforeTransfer;

    before(async () => {
      createProvider();
      await initLibrary(context, creator, program);
      await startAuction({
        context,
        creator,
        program,
        name: "Test",
        endTime: currentTime + 1000,
      });
    });

    beforeEach(async () => {
      ownerBeforeTransfer = await provider.connection.getAccountInfo(
        creator.publicKey
      );

      await mintNft({
        context,
        creator,
        program,
        name: "Test",
        price,
        bidStep: new BN(bidStep),
        libraryName: "Test",
      });

      bidders = generateBidders({ context, count: 4 });
    });

    it("should transfer nft and close nft info account", async () => {
      let nftInfoAccount = await program.account.nftInfo.fetch(
        nftInfoPDA("Test")[0]
      );

      for (const element of [0, 1, 0, 1]) {
        const tx = await bidNft({
          context,
          creator: bidders[element][0],
          highestBidderPubkey: bidders[element][1],
          program,
          name: "Test",
        });

        if ("err" in tx) {
          const logs = tx.meta().prettyLogs();
          console.log("Transaction failed:");
          console.log(tx.toString());
          expect.fail("Transaction should have succeeded but failed");
        }
      }

      nftInfoAccount = await program.account.nftInfo.fetch(
        nftInfoPDA("Test")[0]
      );

      // Warp time past the auction end time (currentTime + 1000)
      const clock = context.getClock();
      context.setClock(
        new Clock(
          clock.slot,
          clock.epochStartTimestamp,
          clock.epoch,
          clock.leaderScheduleEpoch,
          BigInt(currentTime + 2000) // Set unix timestamp past auction end
        )
      );

      const tx = await transferNft({
        context,
        creator,
        program,
        name: "Test",
        recipient: nftInfoAccount.currentBidder,
      });

      if ("err" in tx) {
        const logs = tx.meta().prettyLogs();
        console.log("Transaction failed:");
        console.log(tx.toString());
        expect.fail("Transaction should have succeeded but failed");
      }

      const nftMintPda = PublicKey.findProgramAddressSync(
        [Buffer.from("Test")],
        program.programId
      );

      const recipientTokenAccount = getAssociatedTokenAddressSync(
        nftMintPda[0],
        bidders[1][0].publicKey,
        false,
        TOKEN_PROGRAM_ID
      );

      const tokenAccountInfo = await getAccount(
        provider.connection,
        recipientTokenAccount
      );

      try {
        await program.account.nftInfo.fetch(nftInfoPDA(startName)[0]);
        expect.fail("NFT info account should be closed");
      } catch (exception) {
        expect(exception?.toString()).to.include(
          `Could not find ${nftInfoPDA(startName)[0].toString()}`
        );
      }

      try {
        await provider.connection.getAccountInfo(bidders[0][1]);
        expect.fail("NFT info account should be closed");
      } catch (exception) {
        expect(exception?.toString()).to.include(
          `Could not find ${bidders[0][1].toString()}`
        );
      }

      const owner = await provider.connection.getAccountInfo(creator.publicKey);

      expect(owner.lamports).to.equal(
        99959232240 -
          CREATE_ASSOCIATE_TOKEN_ACCOUNT_FEES +
          price +
          bidStep * 2 +
          RENT_ESCROW_ACCOUNT +
          RENT_AUCTION_INFO_ACCOUNT
      );

      expect(bidders[1][0].publicKey.toString()).to.equal(
        tokenAccountInfo.owner.toString()
      );
    });
  });
});

import { PublicKey } from '@solana/web3.js';
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Voting } from "../target/types/voting";

describe("voting", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.voting as Program<Voting>;
  

  // it("Is initialized!", async () => {
  //   // Add your test here.
  //   // const tx = await program.methods.initializePoll(
  //   //   new anchor.BN(1),
  //   //   "What is your favorite color?",
  //   //   new anchor.BN(0),
  //   //   new anchor.BN(2262176503)
  //   // ).rpc();

  //   const [pollAddress] = PublicKey.findProgramAddressSync(
  //     [Buffer.from("poll"), new anchor.BN(1).toArrayLike(Buffer, "le", 8)],
  //     program.programId
  //   );

  //   const poll = await program.account.poll.fetch(pollAddress);
  //   expect(poll.pollId.toNumber()).to.equal(1);
  //   expect(poll.descripition).to.equal("What is your favorite color?");
  //   expect(poll.polStart.toNumber()).to.equal(0);
  //   expect(poll.polEnd.toNumber()).to.equal(2262176503);
    
  // });

  // it("Initialize candidate", async () => {
  //   // const [candidateAddress] = PublicKey.findProgramAddressSync(
  //   //   [Buffer.from("candidate"), new anchor.BN(1).toArrayLike(Buffer, "le", 8), Buffer.from("Red")],
  //   //   program.programId
  //   // );

  //   // const [pollAddress] = PublicKey.findProgramAddressSync(
  //   //   [Buffer.from("poll"), new anchor.BN(1).toArrayLike(Buffer, "le", 8)],
  //   //   program.programId
  //   // );

  //   // const tx1 = await program.methods.initializeCandidate(
  //   //   "Smooth",
  //   //   new anchor.BN(1)
  //   // ).accounts({
  //   //   poll: pollAddress,
  //   // } as any).rpc();


  //   // const tx2 = await program.methods.initializeCandidate(
  //   //   "Cranchy",
  //   //   new anchor.BN(1)
  //   // ).rpc();

  //    const [cranchyAddress] = PublicKey.findProgramAddressSync(
  //     [Buffer.from("candidate"), new anchor.BN(1).toArrayLike(Buffer, "le", 8), Buffer.from("Cranchy")],
  //     program.programId
  //   );

  //   const [smoothAddress] = PublicKey.findProgramAddressSync(
  //     [Buffer.from("candidate"), new anchor.BN(1).toArrayLike(Buffer, "le", 8), Buffer.from("Smooth")],
  //     program.programId
  //   );


  //   const cranchy = await program.account.candidate.fetch(cranchyAddress);
  //   const smooth = await program.account.candidate.fetch(smoothAddress);


  //   expect(cranchy.candidateName).to.equal("Cranchy");
  //   expect(cranchy.candidateVotes.toNumber()).to.equal(0);
  //   expect(smooth.candidateName).to.equal("Smooth");
  //   expect(smooth.candidateVotes.toNumber()).to.equal(0);

  // });

  it("Vote", async () => {
    // const [pollAddress] = PublicKey.findProgramAddressSync(
    //   [Buffer.from("poll"), new anchor.BN(1).toArrayLike(Buffer, "le", 8)],
    //   program.programId
    // );
    const [candidateAddress] = PublicKey.findProgramAddressSync(
      [Buffer.from("candidate"), new anchor.BN(1).toArrayLike(Buffer, "le", 8), Buffer.from("Cranchy")],
      program.programId
    );

    const tx = await program.methods.vote(
      "Cranchy",
      new anchor.BN(1)
    ).accounts({
      // poll: pollAddress,
      // candidate: candidateAddress,
    } as any).rpc();

    console.log(tx)

// const [pollAddress] = PublicKey.findProgramAddressSync(
//       [Buffer.from("poll"), new anchor.BN(1).toArrayLike(Buffer, "le", 8)],
//       program.programId
//     ); 

    // const poll = await program.account.poll.fetch(pollAddress);

    const candidate = await program.account.candidate.fetch(candidateAddress);


    console.log('candidate ', candidate?.candidateVotes.toNumber());
    

  });
    

});

import { NextRequest, NextResponse } from 'next/server'
import { ActionGetResponse, ActionPostRequest, ACTIONS_CORS_HEADERS, createPostResponse } from '@solana/actions'
import { Connection, PublicKey, Keypair, Transaction } from '@solana/web3.js'
import { Program, AnchorProvider, BN } from '@coral-xyz/anchor'

import IDL from '@/../../voting/target/idl/voting.json'
import { type Voting } from '@/../../voting/target/types/voting'

export const OPTIONS = GET;

export async function GET(request: NextRequest) {

    const connection = new Connection('http://localhost:8899', 'confirmed');
    const program = new Program<Voting>(IDL, { connection });
    const pollId = new BN(1);
    const candidateCranchyName = 'Cranchy';
    const candidateSmoothName = 'Smooth';

    const [candidateCranchyAddress] = PublicKey.findProgramAddressSync(
        [Buffer.from("candidate"), pollId.toArrayLike(Buffer, "le", 8), Buffer.from(candidateCranchyName)],
        program.programId
      );    

    const [candidateSmoothAddress] = PublicKey.findProgramAddressSync(
    [Buffer.from("candidate"), pollId.toArrayLike(Buffer, "le", 8), Buffer.from(candidateSmoothName)],
    program.programId
    );

     const candidateCranchy = await program.account.candidate.fetch(candidateCranchyAddress);
     const candidateSmooth = await program.account.candidate.fetch(candidateSmoothAddress);


  const actionMetaData: ActionGetResponse = {
    icon: 'https://thumbs.dreamstime.com/z/peanut-butter-15388988.jpg?ct=jpeg',
    title: 'Vote for your favorite type of peanut butter',
    description: 'Vote between Cranchy, Smooth peanut butter',
    label: 'Vote',
    links: {
        actions: [
            {
                label: `${candidateCranchy.candidateName} - ${candidateCranchy.candidateVotes}`,
                href: '/api/vote?candidate=Cranchy',
                type: 'transaction',
            },
            {
                label: `${candidateSmooth.candidateName} - ${candidateSmooth.candidateVotes}`,
                href: '/api/vote?candidate=Smooth',
                type: 'transaction',
            },
        ]
    },
  }

  return NextResponse.json(actionMetaData, { headers: ACTIONS_CORS_HEADERS })
}

export async function POST(request: NextRequest) {
  const connection = new Connection('http://localhost:8899', 'confirmed');
  const program = new Program(IDL, { connection });

  const url = new URL(request.url)
  const candidate = url.searchParams.get('candidate')

  if (candidate !== 'Cranchy' && candidate !== 'Smooth') {
    return NextResponse.json({ error: 'Missing candidate' }, { status: 400, headers: ACTIONS_CORS_HEADERS })
  }

  const body: ActionPostRequest = await request.json()
  let voter: PublicKey;

  try {
    voter = new PublicKey(body.account);

  } catch (error) {
    return NextResponse.json({ error: 'Failed to vote' }, { status: 500, headers: ACTIONS_CORS_HEADERS })
  }

   const instruction = await program.methods.vote(candidate, new BN(1)).accounts({
    signer: voter,
  }
  ).instruction()

  const blockhash = await connection.getLatestBlockhash();

  const transaction = new Transaction({
    feePayer: voter,    
    blockhash: blockhash.blockhash,
    lastValidBlockHeight: blockhash.lastValidBlockHeight,
  }).add(instruction)

  const response = await createPostResponse({
    fields: {
        type: 'transaction',
        transaction,
    },
  })

  return NextResponse.json(response, { headers: ACTIONS_CORS_HEADERS })
}

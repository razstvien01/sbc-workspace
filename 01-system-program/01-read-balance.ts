import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const publicKey = new Web3.PublicKey('83WSkXysb3dvpUnexBtovktGUtzowP9rhis1fppFNUFs');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);
}

main()

// import * as Web3 from '@solana/web3.js';
// import base58 from 'bs58'; 'bs58'

// async function main() {
//     const decoded = base58.decode('4cUangAqVjmvBuNthi2fQhUkQoiz6n82w8JF7gSA4Aj72fCTzDBbrxYwXjS2XAovB9chd2sZkB6qvwXyQXc68scu')
//     const keyPair = Web3.Keypair.fromSecretKey(decoded)

//     const publicKeyFrom = new Web3.PublicKey('83WSkXysb3dvpUnexBtovktGUtzowP9rhis1fppFNUFs');
//     const publicKeyTo = new Web3.PublicKey('BWhydiC1XT9dvfso5foTzDkmfhYKuzuBycYr9bRdLpsw');

//     const instruction = Web3.SystemProgram.transfer({
//         fromPubkey: publicKeyFrom,
//         toPubkey: publicKeyTo,
//         lamports: 1,
//     });
//     const transaction = new Web3.Transaction();
//     transaction.add(instruction);

//     const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
//     const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

//     console.log('txHash', txSignature)
// }

// main();
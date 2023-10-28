import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("83WSkXysb3dvpUnexBtovktGUtzowP9rhis1fppFNUFs")
const decoded = base58.decode('4cUangAqVjmvBuNthi2fQhUkQoiz6n82w8JF7gSA4Aj72fCTzDBbrxYwXjS2XAovB9chd2sZkB6qvwXyQXc68scu')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();
import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'

import base58 from 'bs58';
async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode('4cUangAqVjmvBuNthi2fQhUkQoiz6n82w8JF7gSA4Aj72fCTzDBbrxYwXjS2XAovB9chd2sZkB6qvwXyQXc68scu');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

    const mintToken = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('A8sKV84cQzweH4hb5Zhfz7ZLq1tarmxuAaBDoLEhGiQi'), //mint 
        new Web3.PublicKey('DqBK6Qj7kSwXKHxqmzHSAeNaw4kwxbWRuwD8iE4Bxr7Y'), //owner
        new Web3.PublicKey('3YwFW8o5j6pwZsFK3s4ebPPE3yqGJgqsVf7bpkgj1geY'), //authority
        100000000000, //amount
    )
    console.log('mint Token ', mintToken)

}
main()
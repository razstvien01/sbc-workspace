use solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    pubkey::Pubkey,
};
entrypoint!(process_instruction);

fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8]
) -> ProgramResult {
        msg!("{},{},{:?}" , program_id, accounts.len(), instruction_data);
        Ok(())
}

fn main() {
    println!("Hello, world!");
    process_instruction(program_id, accounts, instruction_data)
}

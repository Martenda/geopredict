import userRepository from "../repositories/userRepository";
import databaseService from "../services/database/databaseService";

async function main() {
    await databaseService.init();
    userRepository.create();
}
main();

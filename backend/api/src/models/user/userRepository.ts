import Repository from "../../lib/repository/Repository";
import UserModel from "./user";

class UserRepository extends Repository {
    constructor() {
        super(UserModel);
    }
}

export default UserRepository;
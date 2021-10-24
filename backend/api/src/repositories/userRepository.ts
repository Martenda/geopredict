import Repository from "../lib/repository/Repository";
import UserModel from "../models/user";

class UserRepository extends Repository {
    constructor() {
        super(UserModel);
    }
}

export default new UserRepository();

import Repository from "../lib/repository/Repository";
import AuthModel from "../models/auth";

class AuthRepository extends Repository {
    constructor() {
        super(AuthModel);
    }
}

export default new AuthRepository();

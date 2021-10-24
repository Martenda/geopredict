import Controller from "../lib/controller/Controller";
import UserRepository from "../repositories/userRepository";

class UserController extends Controller {
    constructor() {
        super(UserRepository);
    }
}

export default new UserController();

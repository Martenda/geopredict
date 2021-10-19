import CrudController from "../lib/crudController";
import UserRepository from "../models/user/userRepository";

class UserController extends CrudController {
    constructor() {
        super(new UserRepository());
    }
}

export default UserController;
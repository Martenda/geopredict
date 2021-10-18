import UserModel from "../models/user/user";
import ReadController from "./readController";

class UserController extends ReadController {
    constructor() {
        super(UserModel);
    }
}

export default UserController;
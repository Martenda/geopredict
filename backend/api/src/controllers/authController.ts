import { Request, Response } from "express";
import { Auth } from "../models/auth";
import authRepository from "../repositories/authRepository";
import userRepository from "../repositories/userRepository";

class AuthController {
    async login(req: Request, res: Response) {
        const users = <Array<any>>await userRepository.findAll(req.body.email);

        const user = users.find(({ _id }) => _id);

        if (!user) {
            res.status(401);
            return res.send("Unauthorized");
        }

        const authRecords = <Array<Auth>>await authRepository.findAll();

        const userAuthRecord = authRecords.find(
            (authRecord) => authRecord.userId === user._id
        );

        if (!userAuthRecord) {
            res.status(401);
            return res.send("Unauthorized");
        }

        return res.json();
    }
}

export default new AuthController();

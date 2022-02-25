import AuthController from "../controllers/authController";
import { Route } from "./resource";

const baseRoute = "/auth";

const authResource: Array<Route> = [
    {
        url: "/login",
        method: "post",
        handler: (req, res) => AuthController.login(req, res),
    },
];

export default authResource;

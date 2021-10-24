import UserController from "../controllers/userController";
import crudRoutesFactory from "../lib/controller/crudRoutesFactory";
import { Route } from "./resource";

const baseRoute = "users";

const userResource: Array<Route> = [
    ...crudRoutesFactory(baseRoute, UserController),
];

export default userResource;

import UserController from "../controllers/userController";
import { Route } from "./resource"

const controller = new UserController();
const baseRoute = 'user'

const userResource: Array<Route> = [
    { url: `${baseRoute}/:id`, method: "get", handler: controller.findById },
]

export default userResource;
import UserController from "../../controllers/userController";
import { Route } from "../resource"

const controller = new UserController();
const baseRoute = 'user'

const userResource: Array<Route> = [
    { url: `${baseRoute}/:id`, method: "get", handler: controller.findById },
    { url: `${baseRoute}/:id`, method: "patch", handler: controller.updateOneById },
    { url: `${baseRoute}/:id`, method: "delete", handler: controller.deleteOneById },
    { url: `${baseRoute}`, method: "post", handler: controller.createOne },
]

export default userResource;
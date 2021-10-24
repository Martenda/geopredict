import { Route } from "../../resources/resource";
import Controller from "./Controller";

function crudRoutesFactory(
    baseRoute: string,
    controller: Controller
): Array<Route> {
    return [
        {
            url: `${baseRoute}/:id`,
            method: "get",
            handler: controller.findById,
        },
        {
            url: `${baseRoute}/:id`,
            method: "patch",
            handler: controller.updateById,
        },
        {
            url: `${baseRoute}/:id`,
            method: "delete",
            handler: controller.deleteById,
        },
        { url: `${baseRoute}`, method: "post", handler: controller.create },
    ];
}

export default crudRoutesFactory;

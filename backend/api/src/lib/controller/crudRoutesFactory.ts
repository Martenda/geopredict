import { Route } from "../../resources/resource";
import Controller from "./Controller";

function crudRoutesFactory(
    baseRoute: string,
    controller: Controller
): Array<Route> {
    return [
        {
            url: `${baseRoute}`,
            method: "get",
            handler: (req, res) => controller.findAll(req, res),
        },
        {
            url: `${baseRoute}/:id`,
            method: "get",
            handler: (req, res) => controller.findById(req, res),
        },
        {
            url: `${baseRoute}/:id`,
            method: "patch",
            handler: (req, res) => controller.updateById(req, res),
        },
        {
            url: `${baseRoute}/:id`,
            method: "delete",
            handler: (req, res) => controller.deleteById(req, res),
        },
        {
            url: `${baseRoute}`,
            method: "post",
            handler: (req, res) => controller.create(req, res),
        },
    ];
}

export default crudRoutesFactory;

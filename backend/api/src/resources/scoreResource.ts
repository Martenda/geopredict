import ScoreController from "../controllers/scoreController";
import crudRoutesFactory from "../lib/controller/crudRoutesFactory";
import { Route } from "./resource";

const baseRoute = "/scores";

const scoreResource: Array<Route> = [
    ...crudRoutesFactory(baseRoute, ScoreController),
];

export default scoreResource;

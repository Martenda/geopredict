import MapController from "../controllers/mapController";
import crudRoutesFactory from "../lib/controller/crudRoutesFactory";
import { Route } from "./resource";

const baseRoute = "/maps";

const scoreResource: Array<Route> = [
    ...crudRoutesFactory(baseRoute, MapController),
];

export default scoreResource;

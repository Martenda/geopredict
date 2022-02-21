import MapController from "../controllers/mapController";
import crudRoutesFactory from "../lib/controller/crudRoutesFactory";
import { Route } from "./resource";

const baseRoute = "/maps";

const mapResource: Array<Route> = [
    ...crudRoutesFactory(baseRoute, MapController),
];

export default mapResource;

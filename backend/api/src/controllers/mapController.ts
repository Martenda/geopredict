import Controller from "../lib/controller/Controller";
import MapRepository from "../repositories/mapRepository";

class MapController extends Controller {
    constructor() {
        super(MapRepository);
    }
}

export default new MapController();

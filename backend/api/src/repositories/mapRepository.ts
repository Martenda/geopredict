import Repository from "../lib/repository/Repository";
import MapModel from "../models/map";

class MapRepository extends Repository {
    constructor() {
        super(MapModel);
    }
}

export default new MapRepository();

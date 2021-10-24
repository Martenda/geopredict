import Repository from "../lib/repository/Repository";
import ScoreModel from "../models/score";

class ScoreRepository extends Repository {
    constructor() {
        super(ScoreModel);
    }
}

export default new ScoreRepository();

import Controller from "../lib/controller/Controller";
import ScoreRepository from "../repositories/scoreRepository";

class ScoreController extends Controller {
    constructor() {
        super(ScoreRepository);
    }
}

export default new ScoreController();

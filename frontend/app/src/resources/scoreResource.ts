import Resource from "./Resource";

class ScoreResource extends Resource {
    constructor() {
        super("scores");
    }

    async findScoresByMap(mapId: number, userToken: string): Promise<any> {
        return this.dataService.find({
            path: this.resourceName,
            body: { mapId, userToken },
        });
    }
}

export default new ScoreResource();

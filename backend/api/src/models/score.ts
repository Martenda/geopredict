import { model, Schema } from "mongoose";
import { BaseEntity, baseSchema } from "../lib/baseSchema";
import { Map, mapSchema } from "./map";
import { User, userSchema } from "./user";

interface Score extends BaseEntity {
    map: Map;
    user: User;
    points: number;
    timeSpentInSeconds: number;
}

const scoreSchema = new Schema<Score>({
    ...baseSchema.obj,
    map: mapSchema,
    user: userSchema,
    points: { type: Number, required: true },
    timeSpentInSeconds: { type: Number, required: true },
    place: { type: String, required: true },
});

const ScoreModel = model<Score>("Score", scoreSchema);

export default ScoreModel;

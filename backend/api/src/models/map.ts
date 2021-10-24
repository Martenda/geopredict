import { model, Schema } from "mongoose";
import { BaseEntity, baseSchema } from "../lib/baseSchema";

export interface Map extends BaseEntity {
    name: string;
    places: Array<Schema.Types.Point>;
}

export const mapSchema = new Schema<Map>({
    ...baseSchema.obj,
    name: { type: String, required: true },
    places: { type: Array, required: true },
});

const MapModel = model<Map>("Map", mapSchema);

export default MapModel;

import { BaseEntity } from "./baseEntity";
import { Point } from "./point";

export interface Map extends BaseEntity {
    name: string;
    places: Array<Point>;
}

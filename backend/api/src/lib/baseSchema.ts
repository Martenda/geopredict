import { Schema } from "mongoose";

export type BaseEntity = {
    created: Date;
    updated: Date;
};

export const baseSchema = new Schema<BaseEntity>({
    created: { type: Date, default: new Date() },
    updated: { type: Date, default: new Date() },
});

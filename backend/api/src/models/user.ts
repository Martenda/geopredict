import { model, Schema } from "mongoose";
import { BaseEntity, baseSchema } from "../lib/baseSchema";

export interface User extends BaseEntity {
    name: string;
    email: string;
}

export const userSchema = new Schema<User>({
    ...baseSchema.obj,
    name: { type: String, required: true },
    email: { type: String, required: true },
});

const userModel = model<User>("User", userSchema);

export default userModel;

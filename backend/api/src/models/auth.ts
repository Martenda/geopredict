import { model, Schema } from "mongoose";

export interface Auth {
    token: string;
    userId: string;
}

export const authSchema = new Schema<Auth>({
    token: { type: String },
    userId: { type: String },
});

const authModel = model<Auth>("Auth", authSchema);

export default authModel;

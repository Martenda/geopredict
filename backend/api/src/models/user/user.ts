import { model, Schema } from "mongoose";
import { BaseEntity, baseSchema } from "../../lib/baseSchema";

interface User extends BaseEntity {
  name: string;
  email: string;
}

const userSchema = new Schema<User>({
  ...baseSchema.obj,
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const UserModel = model<User>('User', userSchema);

export default UserModel;
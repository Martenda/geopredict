import { Schema, model } from 'mongoose';

export interface UserType {
  name: string;
  email: string;
}

const userSchema = new Schema<UserType>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const UserModel = model<UserType>('User', userSchema);

export default UserModel;
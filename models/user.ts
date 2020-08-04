// @ts-ignore
import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});


const User = mongoose.model('User', UserSchema, 'user');

export { User };

import mongoose from "mongoose";
import { EUserRole } from "../enums/user";

const Schema = mongoose.Schema;

const user = new Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    require: true,
    enum: EUserRole,
    default: EUserRole.USER,
  },
});

const User = mongoose.model("User", user);

export default User;

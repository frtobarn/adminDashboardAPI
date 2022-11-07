import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    }, 
    password: {
      type: String,
      required: true, 
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    savedShows:{
      type:[String],
      required:true,
      default:[]
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model("user", UserSchema);

export default UserModel;

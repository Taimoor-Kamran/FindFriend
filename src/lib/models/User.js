import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: String,
  email: String,
  password: String,
  location: {
    lat: String,
    long: String,
  },
  profileImg: String,
  address: String,
  bio: String,
});

export const UserModal =
  mongoose.models.Users || mongoose.model("Users", userSchema);
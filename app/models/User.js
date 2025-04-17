import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    phone: String,
    password: String
  })

const User=mongoose.models.UserModel || mongoose.model("UserModel",UserSchema);

export default User;
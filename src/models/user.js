import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true},
  email: {type: String, required: false },
  password: { type: String, required: false },
});

export const user = mongoose.model("User", userSchema);

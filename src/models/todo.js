import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  id: {type: mongoose.Types.ObjectId},
  text: { type: String, required: false },
  active: { type: Boolean, required: false },
  position: {type: Number}
});

export const todo = mongoose.model("Todo", TodoSchema);

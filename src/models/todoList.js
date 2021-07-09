import mongoose from "mongoose";

const TodoListSchema = new mongoose.Schema({
  name: { type: String, required: false},
  todos: { type: Array, required: true},
  description: { type: String, required: false },
});

export const todoList = mongoose.model("TodoList", TodoListSchema);

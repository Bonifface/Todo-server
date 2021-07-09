import { todoList } from "../../models/todoList.js";
import { todo } from "../../models/todo.js";

import mongoose from "mongoose";

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { listId } = req.body;
    if (!id) {
      res.status(400).json({ message: "ID is not specified" });
    }
    await todoList.findOneAndUpdate(
      { _id: listId },
      { $pull: { todos: mongoose.Types.ObjectId(id) } },
      { new: true }
    );
    const delTodo = await todo.findOneAndDelete({ _id: id });
    console.log(delTodo);
    return res.json(delTodo);
  } catch (e) {
    res.status(500).json(e);
  }
};

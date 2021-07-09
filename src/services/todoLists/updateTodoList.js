import { todoList } from "../../models/todoList.js";

export const updateTodoList = async (req, res) => {
  try {
    const { _id, name, description } = req.body;
    const updatedTodo = await todoList.findByIdAndUpdate(
      _id,
      { name: name, description: description },
      { new: true }
    );
    return res.json(updatedTodo);
  } catch (e) {
    res.status(500).json(e);
  }
};
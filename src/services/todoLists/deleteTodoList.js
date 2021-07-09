import { todoList } from "../../models/todoList.js";
import { todo } from "../../models/todo.js";

export const deleteTodoList = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: "ID is not specified" });
    }
    const delList = await todoList.findByIdAndDelete(id);
    const delAllTodo = await todo.deleteMany({id: id})
    return res.json(delList);
  } catch (e) {
    res.status(500).json(e);
  }
};

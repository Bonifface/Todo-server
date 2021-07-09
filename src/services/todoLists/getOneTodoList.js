import { todo } from "../../models/todo.js";

export const getOneTodoList = async (req, res) => {
  try {
    const { id } = req.params;
    const todos = await todo.find(
      { id: id },
      { text: true, active: true, position: true }
    );
    // console.log(todos)
    todos.sort((a, b) => a.position - b.position);
    return res.json(todos);
  } catch (e) {
    res.status(500).json(e);
  }
};

import { todoList } from "../../models/todoList.js";

export const createTodoList = async (req, res) => {
  try {
    const { name, description, todos, id } = req.body;
    const list = await todoList.create({ name, description , todos, id});
    res.json(list);
  } catch (e) {
    res.status(500).json(e);
  }
};



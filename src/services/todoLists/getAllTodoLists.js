import { todoList } from "../../models/todoList.js";

export const getAllTodoLists = async (req, res) => {
  try {
    // const posts = await todoList.find();
     const data = await todoList.find({}, { name: true, description: true} )
    // return res.json(posts);
    return res.json(data)
  } catch (e) {
    res.status(500).json(e);
  }
};

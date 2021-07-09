import { todoList } from "../../models/todoList.js";
import { todo } from "../../models/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { text, active, position } = req.body;
    const createTodo = await todo.create({ id, text, active, position });
    await todoList.findByIdAndUpdate(
      id,
      {
        $push: { todos: createTodo._id},
      },
      { new: true }
    );
    const todos = await todo.find(
      { id: id },
      { text: true, active: true, position: true }
    );
    res.json(todos);
  } catch (e) {
    res.status(500).json(e);
  }
};

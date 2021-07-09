import { todo } from "../../models/todo.js";
import {todoList} from "../../models/todoList.js";

export const changeTodo = async (req, res) => {
  try {
    const { _id, text, active} = req.body;
    const changeTodo = await todo.findByIdAndUpdate(
        _id,
        { text: text, active: active },
        { new: true }
    );

    return res.json(changeTodo);
  } catch (e) {
    res.status(500).json(e);
  }
};


import Router from "express";
import { createTodo } from "./createTodo.js";
import { deleteTodo} from "./deleteTodo.js";

import { changeTodo } from "./changeTodo.js";


export const todos = new Router();


todos.post("/:id", createTodo);
todos.put("/:id", deleteTodo)
todos.put("/", changeTodo)
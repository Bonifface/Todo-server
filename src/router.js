import Router from "express";
import { todoLists } from "./services/todoLists/index.js";
import { todos} from "./services/todos/index.js";

export const router = new Router();
router.use('/todo-lists', todoLists);
router.use('/todo-list', todos);


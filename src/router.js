import Router from "express";
import { todoLists } from "./services/todoLists/index.js";
import { todos} from "./services/todos/index.js";
import  { authorization } from "./services/authorization/index.js";

export const router = new Router();
router.use('/todo-lists', todoLists);
router.use('/todo-list', todos);
router.use('/authorization', authorization)


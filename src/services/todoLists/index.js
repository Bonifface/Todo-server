import Router from "express";
import { getAllTodoLists } from "./getAllTodoLists.js";
import { createTodoList } from "./createTodoList.js";
import { getOneTodoList } from "./getOneTodoList.js";
import { updateTodoList } from "./updateTodoList.js";
import { deleteTodoList } from "./deleteTodoList.js";
import { reorderTodoList} from "./reorderTodoList.js";


export const todoLists = new Router();

todoLists.get("/", getAllTodoLists);
todoLists.post("/", createTodoList);
todoLists.get("/:id", getOneTodoList);
todoLists.put("/", updateTodoList);
todoLists.put("/:id", reorderTodoList)
todoLists.delete("/:id", deleteTodoList);


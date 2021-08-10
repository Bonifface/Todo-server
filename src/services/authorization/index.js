import Router from "express";
import { signUp } from "./signUp.js";
import { login } from "./login.js";
import { getUsers } from "./getUsers.js";
import { check } from "express-validator";


export const authorization = new Router();

authorization.post(
  "/signUp",
  [
    check("username", "User name can't be empty").notEmpty(),
    // check("email"),
    check(
      "password",
      "Password must have length min 4 symbols max  24"
    ).isLength({ min: 4, max: 24 }),
  ],
  signUp
);
authorization.post("/login", login);
authorization.get("/getUsers", getUsers);

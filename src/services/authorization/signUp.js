import { user } from "../../models/user.js";
import { validationResult } from "express-validator";

export const signUp = async (req, res) => {
  try {
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Error during registration", errors });
    }
    const { username, email, password } = req.body;
    const conditional = await user.findOne({ username });
    if (conditional) {
      return res.status(400).json({ message: "User with this name exist" });
    }
    const User = await user.create({ username, email, password });
    console.log(User)
    return res.json({ message: "User successfully saved" });
  } catch (e) {
    console.log(e)
    res.status(400).json({ message: "Sing up error"});
  }
};
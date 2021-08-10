import {user} from "../../models/user.js";

export const getUsers = async (req, res) => {
  try {
    // const createUser = await user.create({ username: "Boniface", password: "1234" })
    // await res.json(createUser);
    const users = await user.find()
    res.json(users)
  } catch (e) {
    res.status(400).json({ message: "Login error" });
  }
};

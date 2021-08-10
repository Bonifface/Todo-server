import { user } from "../../models/user.js";
import jwt from "jsonwebtoken";
import { secretToken } from "../config.js";

const takeToken = secretToken.secret;
const generateToken = (id, username) => {
  const payload = {
    id,
    username,
  };
  return jwt.sign(payload, takeToken, { expiresIn: "1h" });
};


export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const findUser = await user.findOne({ username });
    if (!findUser) {
      return res
        .status(400)
        .json({ message: `User with username ${username} not found` });
    }
    if (password !== findUser.password) {
      return res.status(400).json({ message: "Password not correct" });
    }
    console.log(findUser._id);
    const token = generateToken(findUser._id, username);
    console.log({token})
    // res.json({message: `Hello ${username}!`});
    return res.json({token});
  } catch (e) {
    res.status(400).json({ message: "Login error" });
  }
};

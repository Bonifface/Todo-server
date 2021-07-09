import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { router } from "./router.js";

const port = 5000;
const DB_URL = `mongodb+srv://admin:admin1234@cluster0.iii7w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(port, () => console.log("SERVER STATING ON PORT", port));
  } catch (e) {
    console.log(e);
  }
}
startApp();

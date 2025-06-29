console.log("🧠 Running from:", import.meta.url);
import mongoose from "mongoose";
import express from "express";
import { todo } from "./models/todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");
console.log("🚀 Running the actual file now");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const TODO = new todo({
    name: "one",
    desc: "do  questions",
    isDone: true,
  });
  TODO.save();
  console.log("✅ Route / was hit");
  res.send("Hello Bye!");
});
app.get("/a", async (req, res) => {
  let hey = await todo.findOne({});
  console.log(hey);
  res.json({ name: hey.name, description: hey.desc });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
  name: String,
  desc: String,
  isDone: Boolean
});
export const todo = mongoose.model('todo', todoSchema);
const express = require("express");
const blog = require("./routes/blog");

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use("/blog", blog);

app.get("/", (req, res) => {
  console.log("hey its a get request");
  res.send("Hello GET!");
});
app.post("/", (req, res) => {
  console.log("hey its a post request");
  res.send("Hello POST!");
});
app.put("/", (req, res) => {
  console.log("hey its a put request");
  res.send("Hello PuT!");
});
app.get("/index", (req, res) => {
  console.log("hey its INDEX");
  res.sendFile("/templates/index.html", { root: __dirname });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

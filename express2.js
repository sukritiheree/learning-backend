const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

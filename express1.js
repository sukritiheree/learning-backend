const express = require("express");
const app = express();
const port = 3000;



app.get("/", (req, res) => {
  console.log("This is the real file being used"); 
  res.send("!! This is ME");// ROUTING HANDLING
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});


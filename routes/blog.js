const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  res.send("Birds home page");
});
// define the about route
router.get("/about", (req, res) => {
  res.send("About blog");
});
router.get("/blogpost/:slug", (req, res) => {
  res.send(`fetch the blog post for ${req.params.slug}`);
});
module.exports = router;

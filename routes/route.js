const express = require("express");
const route = express();

route.get("/", (req, res) => {
  try {
    res.render("home");
  } catch (err) {
    console.log(err.message);
  }
});
// login router
route.get("/login", (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = route;

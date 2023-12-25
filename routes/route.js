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
// teachers
route.get("/teachers", (req, res) => {
  try {
    res.render("teacher");
  } catch (err) {
    console.log(err.message);
  }
});
// contact
route.get("/contact", (req, res) => {
  try {
    res.render("contact");
  } catch (err) {
    console.log(err.message);
  }
});
// notice
route.get("/notice", (req, res) => {
  try {
    res.render("notice");
  } catch (err) {
    console.log(err.message);
  }
});
// classes
route.get("/classes", (req, res) => {
  try {
    res.render("classes");
  } catch (err) {
    console.log(err.message);
  }
});
module.exports = route;

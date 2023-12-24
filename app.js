const express = require("express");
const app = express();
// router
const route = require("./routes/route");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(route);
app.listen(2000, function () {
  console.log("Website Running On Port:2000");
});

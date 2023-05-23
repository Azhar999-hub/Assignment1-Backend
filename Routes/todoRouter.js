const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Get All Student Data");
});

//------------------

route.get("/:id", (req, res) => {
  res.send("Get single Student Data");
});

//------------------

route.post("/", (req, res) => {
  res.send("post Student Data");
});

//------------------

route.put("/:id", (req, res) => {
  res.send("Put single Student Data");
});

//------------------

route.delete("/:id", (req, res) => {
  res.send("Delete single Student Data");
});

module.exports = route;

const express = require("express");
const route = express.Router();
const studentModel = require("../models/studentmodel");
const { sendResponse } = require("../helpers/helper");




route.get("/", async (req, res) => {
  try {
    const result = await studentModel.find();
    if (!result) {
      res.send(sendResponse(false, null, "No Data Found")).status(404);
    } else {
      res.send(sendResponse(true, result)).status(200);
    }
  } catch (e) {
    console.log(e).send(sendResponse(false)).status(400);
  }
});

//------------------

route.get("/:id", (req, res) => {
  res.send("Get single Student Data");
});

//------------------

route.post("/", async (req, res) => {
  let { FirstName, LastName, Email, Password, Contact } = req.body;
  try {
    let errArr = [];
    if (!FirstName) {
      errArr.push("Required: First Name");
    }
    if (!Email) {
      errArr.push("Required: Email");
    }
    if (!Password) {
      errArr.push("Required: Password");
    }
    if (!Contact) {
      errArr.push("Required: Contact");
    }
    if (errArr.length > 0) {
      res.status(400).send(sendResponse(false, errArr, null, "Required All Fields"));
      return;
    } else {
      let obj = { FirstName, LastName, Email, Password, Contact };
      let student = new studentModel(obj);
      await student.save();
      if (!student) {
        res.status(500).send(sendResponse(false, null, "Failed to save data"));
      } else {
        res.status(200).send(sendResponse(true, student, "Saved Successfully"));
      }
    }
  } catch (e) {
    console.error(e);
    res.status(500).send(sendResponse(false, null, "Internal Server Error"));
  }
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

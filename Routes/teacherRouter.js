const express = require("express");
const route = express.Router();
const teacherModel = require("../models/teacherModel");
const { sendResponse } = require("../helpers/helper");

route.get("/", async (req, res) => {
  try {
    const result = await teacherModel.find();
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
  res.send("Get single Teacher Data");
});

//------------------

route.post("/", async (req, res) => {
  let { Name, Course, Contact } = req.body;
  console.log(req.body);
  try {
    let errArr = [];
    if (!Name) {
      errArr.push("Required : Name");
    }
    if (!Course) {
      errArr.push("Required :  Course");
    }
    if (!Contact) {
      errArr.push("Required : Contact");
    }
    if (errArr.length > 0) {
      res
        .send(sendResponse(false, errArr, null, "Required All Fields"))
        .status(400);
      return;
    } else {
      let obj = { Name, Course, Contact };
      let teacher = new teacherModel(obj);
      await teacher.save();
      if (!teacher) {
        res
          .send(sendResponse(false, null, "Internal Server Error"))
          .status(400);
      } else {
        res.send(sendResponse(true, teacher, "Saved Successfully")).status(200);
      }
    }
  } catch (e) {
    res.send(sendResponse(false, null, "Internal Server Error")).status(400);
  }
});

//------------------

route.put("/:id", (req, res) => {
  res.send("Put single Teacher Data");
});

//------------------

route.delete("/:id", (req, res) => {
  res.send("Delete single Teacher Data");
});

module.exports = route;

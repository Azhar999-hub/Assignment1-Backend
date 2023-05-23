const express = require("express");
const route = express.Router();
const courseModel = require("../models/courseModel");
const { sendResponse } = require("../helpers/helper");

route.get("/", async (req, res) => {
  try {
    const result = await courseModel.find();
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
  res.send("Get single Course Data");
});

//------------------

route.post("/", async (req, res) => {
  let { Name, Duration, ShortName, Fees } = req.body;
  console.log(req.body);
  try {
    let errArr = [];
    if (!Name) {
      errArr.push("Required : Name");
    }
    if (!Duration) {
      errArr.push("Required :  Duration");
    }
    if (!ShortName) {
      errArr.push("Required : ShortName");
    }
    if (!Fees) {
      errArr.push("Required : Fees");
    }
    if (errArr.length > 0) {
      res
        .send(sendResponse(false, errArr, null, "Required All Fields"))
        .status(400);
      return;
    } else {
      let obj = { Name, Duration, ShortName, Fees };
      let course = new courseModel(obj);
      await course.save();
      if (!course) {
        res
          .send(sendResponse(false, null, "Internal Server Error"))
          .status(400);
      } else {
        res.send(sendResponse(true, course, "Saved Successfully")).status(200);
      }
    }
  } catch (e) {
    res.send(sendResponse(false, null, "Internal Server Error")).status(400);
  }
});

//------------------

route.put("/:id", (req, res) => {
  res.send("Put single Course Data");
});

//------------------

route.delete("/:id", (req, res) => {
  res.send("Delete single Course Data");
});

module.exports = route;

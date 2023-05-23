const express = require("express");
const route = express.Router();
const instituteModel = require("../models/instituteModel");
const { sendResponse } = require("../helpers/helper");

route.get("/", async (req, res) => {
  try {
    const result = await instituteModel.find();
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
  res.send("Get single Institute Data");
});

//------------------

route.post("/", async (req, res) => {
  let { Name, ShortName, Address, Tel } = req.body;
  console.log(req.body);
  try {
    let errArr = [];
    if (!Name) {
      errArr.push("Required : Name");
    }
    if (!ShortName) {
      errArr.push("Required :  ShortName");
    }
    if (!Address) {
      errArr.push("Required : Address");
    }
    if (!Tel) {
      errArr.push("Required : Tel");
    }
    if (errArr.length > 0) {
      res
        .send(sendResponse(false, errArr, null, "Required All Fields"))
        .status(400);
      return;
    } else {
      let obj = { Name, ShortName, Address, Tel };
      let institute = new instituteModel(obj);
      await institute.save();
      if (!institute) {
        res
          .send(sendResponse(false, null, "Internal Server Error"))
          .status(400);
      } else {
        res.send(sendResponse(true, institute, "Saved Successfully")).status(200);
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

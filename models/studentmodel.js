const mongoose = require("mongoose");

const StudentsSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Contact: {
    type: Number,
    required: true,
  },
});

const StudentsModel = mongoose.model("students", StudentsSchema);

module.exports = StudentsModel;

const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    Name: {
      type:String,
      required: true
    },
    Course: {
      type:String,
      required: true
    },
    Contact: {
      type:Number,
      required: true
    }
});

const TeacherModel =  mongoose.model("teacher", TeacherSchema);

module.exports = TeacherModel;
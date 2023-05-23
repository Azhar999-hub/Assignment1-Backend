const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    Name: {
      type:String,
      required: true
    },
    Duration: {
      type:String,
      required: true
    },
    ShortName: {
      type:String,
      required: true
    },
    Fees: {
      type:Number,
      required: true
    }
});

const CourseModel =  mongoose.model("course", CourseSchema);

module.exports = CourseModel;
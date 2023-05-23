const mongoose = require('mongoose');

const InstituteSchema = new mongoose.Schema({
    Name: {
      type:String,
      required: true
    },
    ShortName: {
      type:String,
      required: true
    },
    Address: {
      type:String,
      required: true
    },
    Tel: {
      type:Number,
      required: true
    }
});

const InstituteModel =  mongoose.model("institute", InstituteSchema);

module.exports = InstituteModel;
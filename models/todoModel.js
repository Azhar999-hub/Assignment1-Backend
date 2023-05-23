const mongoose = require('mongoose');

const TodosSchema = new mongoose.Schema({
    text: {
      type:String,
      required: true
    }
});

const TodoModel =  mongoose.model("todo", TodosSchema);

module.exports = TodoModel;
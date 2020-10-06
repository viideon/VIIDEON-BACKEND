const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  emai: {type: String},
  name: {type: String},
  isUser: {type: Boolean}
}, {timestamps: true});

module.exports = mongoose.model("People", peopleSchema);
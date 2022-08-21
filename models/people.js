const mongoose = require("mongoose");

const userModel = require('./user');

const peopleSchema = new mongoose.Schema({
  userId: {type: userModel.model},
  email: {type: String, unique: true},
  name: {type: String},
  isUser: {type: Boolean}
}, {timestamps: true});

module.exports = mongoose.model("People", peopleSchema);
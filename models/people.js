const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  email: {type: String, unique: true},
  name: {type: String},
  isUser: {type: Boolean}
}, {timestamps: true});

module.exports = mongoose.model("People", peopleSchema);
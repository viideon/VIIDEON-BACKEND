const mongoose = require("mongoose");

const stepSchema = new mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  name: { type: String},
  logoUrl: {type: String},
  text: {type: String},
  colors: {}
}, {timestamps: true});

module.exports = mongoose.model("Setting", stepSchema);
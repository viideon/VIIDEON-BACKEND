const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {type: String, trim: true},
  branding: {type: Boolean},
  thumbnail: {type: String},
  steps: [{type: mongoose.Schema.Types.ObjectId, ref: 'Step'}],
  people: [{type: mongoose.Schema.Types.ObjectId, ref: 'People'}],
  userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {timestamps: true});
module.exports = mongoose.model("InteractiveMessage", roomSchema);

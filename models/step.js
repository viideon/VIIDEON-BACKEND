const mongoose = require("mongoose");

const stepSchema = new mongoose.Schema({
  roomId: {type: mongoose.Schema.Types.ObjectId, ref: 'InteractiveMessage'},
  stepNo: {type: String},
  videoId: {type: mongoose.Schema.Types.ObjectId, ref: 'Video'},
  replies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reply'}],
  isFull: {type: Boolean, default: false}
}, {timestamps: true});

module.exports = mongoose.model("Step", stepSchema);
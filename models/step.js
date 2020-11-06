const { string } = require("@hapi/joi");
const mongoose = require("mongoose");

const stepSchema = new mongoose.Schema({
  roomId: {type: mongoose.Schema.Types.ObjectId, ref: 'InteractiveMessage'},
  stepNo: {type: String},
  videoId: {type: mongoose.Schema.Types.ObjectId, ref: 'Video'},
  replies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reply'}],
  isFull: {type: Boolean, default: false},
  isAudio: {type: Boolean, default: false},
  isVideo: {type: Boolean, default: false},
  isText: {type: Boolean, default: false},
  text: {type: String},
  calendar: {type: String},
  responseType: {type: String},
  choices: [{type: String}],
}, {timestamps: true});

module.exports = mongoose.model("Step", stepSchema);
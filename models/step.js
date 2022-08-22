const mongoose = require("mongoose");

const interactiveModel = require('./interactive');

const stepSchema = new mongoose.Schema({
  roomId: { type: interactiveModel.model },
  stepNo: { type: String },
  videoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }],
  isFull: { type: Boolean, default: false },
  isAudio: { type: Boolean, default: false },
  isVideo: { type: Boolean, default: false },
  isText: { type: Boolean, default: false },
  text: { type: String },
  calendar: { type: String },
  responseType: { type: String },
  choices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Choices' }],
  jumpTo: { type: Number },
  jumpChoice: {}
}, { timestamps: true });

module.exports = mongoose.model("Step", stepSchema);
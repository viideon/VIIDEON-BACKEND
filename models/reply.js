const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  interActiveId: {type: mongoose.Schema.Types.ObjectId, ref: 'InteractiveMessage'},
  stepId: {type: mongoose.Schema.Types.ObjectId, ref: 'Step'},
  videoId: {type: mongoose.Schema.Types.ObjectId, ref: 'Video'},
  poepleId: {type: mongoose.Schema.Types.ObjectId, ref: 'People'},
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  url: {type: String},
  text: {type: String},
  type: {type: String, enum: ["video", "audio", "text"]}
}, {timestamps: true});

module.exports = mongoose.model("Reply", messageSchema);
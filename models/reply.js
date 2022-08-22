const mongoose = require("mongoose");

const interactiveModel = require('./interactive');

const messageSchema = new mongoose.Schema({
  chatvidId: {type: interactiveModel.model},
  stepId: {type: mongoose.Schema.Types.ObjectId, ref: 'Step'},
  videoId: {type: mongoose.Schema.Types.ObjectId, ref: 'Video'},
  peopleId: {type: mongoose.Schema.Types.ObjectId, ref: 'People'},
  choiceId: {type: mongoose.Schema.Types.ObjectId, ref: 'Choices'},
  url: {type: String},
  text: {type: String},
  calendar: {type: String},
  type: {type: String}
}, {timestamps: true});

module.exports = mongoose.model("Reply", messageSchema);
const mongoose = require("mongoose");

const choicesSchema = new mongoose.Schema({
  chatvidId: {type: mongoose.Schema.Types.ObjectId, ref: 'InteractiveMessage'},
  stepId: {type: mongoose.Schema.Types.ObjectId, ref: 'Step'},
  replies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reply'}],
  text: {type: String},
  userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {timestamps: true});

module.exports = mongoose.model("Choices", choicesSchema);
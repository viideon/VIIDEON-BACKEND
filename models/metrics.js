const mongoose = require("mongoose");

const metricsSchema = new mongoose.Schema({
  chatvidId: {type: mongoose.Schema.Types.ObjectId, ref: 'InteractiveMessage'},
  deviceType: {type: String},
  isLanded: {type:Boolean},
  isInteracted: {type:Boolean},
  isAnswered: {type:Boolean},
  isCompleted: {type:Boolean},
}, {timestamps: true});

module.exports = mongoose.model("Metrics", metricsSchema);
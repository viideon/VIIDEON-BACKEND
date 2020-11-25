const mongoose = require("mongoose");

const industrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  styles: [{type: mongoose.Schema.Types.ObjectId, ref: 'campaignTemplate'}]
}, { timestamps: true });

module.exports = mongoose.model("Industry", industrySchema);

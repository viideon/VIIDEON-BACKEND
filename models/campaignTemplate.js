const mongoose = require("mongoose");

const campaignTemplate = new mongoose.Schema({
  name: { type: String, required: true },
  templateDescription: { type: String, required: true },
  totalSteps: { type: Number, required: true },
  templateThumbnailUrl: { type: String },
  steps: [
    {
      title: { type: String },
      description: { type: String },
      examples: [{ type: String }]
    }
  ]
});

module.exports = mongoose.model("campaignTemplate", campaignTemplate);

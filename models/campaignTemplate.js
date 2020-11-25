const mongoose = require("mongoose");

const campaignTemplate = new mongoose.Schema({
  name: { type: String, required: true },
  templateDescription: { type: String, required: true },
  totalSteps: { type: Number, required: true },
  templateThumbnailUrl: { type: String },
  industryId: { type: mongoose.Schema.Types.ObjectId, ref: "Industry", required: true},
  duration: { type: Number},
  steps: [
    {
      title: { type: String },
      description: { type: String },
      duration: { type: String },
      examples: [{ type: String }]
    }
  ]
});

module.exports = mongoose.model("campaignTemplate", campaignTemplate);

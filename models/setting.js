const mongoose = require("mongoose");

const stepSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String },
    logoUrl: { type: String },
    text: { type: String },
    fbUrl: {
      type: String,
    },
    twitterUrl: {
      type: String,
    },
    youtubeUrl: {
      type: String,
    },
    linkedinUrl: {
      type: String,
    },
    colors: {},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Setting", stepSchema);

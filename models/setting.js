const mongoose = require("mongoose");

const userModel = require('./user');

const stepSchema = new mongoose.Schema(
  {
    userId: { type: userModel.model },
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

const mongoose = require("mongoose");

const userAssets = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  assets: [{ type: { type: String }, url: String }],
  musicAssets: [{ url: String, title: String }]
});

module.exports = mongoose.model("userAssets", userAssets);

const mongoose = require("mongoose");

const userAssets = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  assets: [{ type: { type: String }, url: String }],
  musicAssets: [{ type: { type: String }, url: String }]
});

module.exports = mongoose.model("userAssets", userAssets);

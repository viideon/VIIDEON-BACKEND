const mongoose = require("mongoose");

const publicMusicAssets = new mongoose.Schema({
  // assets: [{ type: { type: String }, url: String }],
  musicAssets: { url: String, title: String }
});

module.exports = mongoose.model("publicMusicassets", publicMusicAssets);

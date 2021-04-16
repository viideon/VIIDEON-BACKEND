const mongoose = require("mongoose");

const publicMusicAssets = new mongoose.Schema({
  url:{type:String},
  title:{type:String}
});

module.exports = mongoose.model("publicMusicassets", publicMusicAssets);

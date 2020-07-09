const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  url: { type: String, unique: true, required: true },
  thumbnail: { type: String, required: false },
  title: { type: String, required: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  recieverEmail: { type: String, required: false },
  campaign: { type: Boolean, required: false },
  logoProps: {
    url: { type: String },
    width: { type: String },
    height: { type: String },
    position: { type: String }
  },
  textProps: {
    text: { type: String },
    align: { type: String },
    vAlign: { type: String },
    textColor: { type: String },
    fontSize: { type: Number }
  },
  description: { type: String }
});
videoSchema.index({ title: "text" });
module.exports = mongoose.model("Video", videoSchema);

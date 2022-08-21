const mongoose = require("mongoose");

const userModel = require('./user');

const roomSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    branding: { type: Boolean },
    thumbnail: { type: String },
    steps: [{ type: mongoose.Schema.Types.ObjectId, ref: "Step" }],
    people: [{ type: mongoose.Schema.Types.ObjectId, ref: "People" }],
    userId: { type: userModel.model },
  },
  { timestamps: true }
);
module.exports = mongoose.model("InteractiveMessage", roomSchema);

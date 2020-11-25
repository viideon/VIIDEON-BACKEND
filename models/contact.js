const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  avatarUrl: { type: String },
  company: { type: String },
  displayName: { type: String, required: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  email: { type: String },
  firstName: { type: String },
  fullName: { type: String },
  lastName: { type: String },
  mobile: { type: String },
  notes: { type: String },
  phone: { type: String },
  source: { type: String },
  stage: { type: String },
  tags: [String],
  title: { type: String },
  unsubscribed: { type: Boolean },
  unsubscribedEmail: { type: String }
});
module.exports = mongoose.model("Contact", contactSchema);

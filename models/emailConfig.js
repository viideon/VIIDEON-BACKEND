const mongoose = require("mongoose");

const userModel = require('./user');

const emailConfigSchema = new mongoose.Schema({
  userId: { type: userModel.model },
  date: { type: Date, default: Date.now },
  userEmail: { type: String },
  tokenObj: {
    access_token: { type: String },
    expires_in: { type: Number },
    refresh_token: { type: String },
    scope: { type: String },
    token_type: { type: String },
    id_token: { type: String }
  }
});

module.exports = mongoose.model("emailConfig", emailConfigSchema);

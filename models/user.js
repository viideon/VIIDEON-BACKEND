const mongoose = require("mongoose");
const Token = require("./token");
const randomstring = require("randomstring");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  firstName: { type: String, minlength: 3, required: true },
  lastName: { type: String, minlength: 2, required: true },
  userName: { type: String, uniqe: true, required: true },
  password: { type: String, minlength: 6, required: true },
  mobileNumber: { type: String, minlength: 12, required: false },
  businessPhone: { type: String, minlength: 12, required: false },
  address: { type: String, required: false },
  webAddress: { type: String, minlength: 3, required: false },
  facebookAddress: { type: String, required: false },
  twitterAddress: { type: String, required: false },
  youtubeAddress: { type: String, required: false },
  linkedinAddress: { type: String, required: false },
  timeZone: { type: String, required: false },
  affiliateId: { type: String, required: false },
  url: { type: String, required: false },
  
  isVerified: {
    type: Boolean,
    default: false
  }
});

userSchema.methods.generateVerificationToken = function() {
  let payload = {
    userId: this._id,
    token: randomstring.generate({
      length: 6,
      charset: "numeric"
    })
  };

  return new Token(payload);
};

module.exports = mongoose.model("User", userSchema);

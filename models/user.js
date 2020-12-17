const mongoose = require("mongoose");
const Token = require("./token");
const randomstring = require("randomstring");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  firstName: { type: String, minlength: 3, required: true },
  lastName: { type: String, minlength: 2, required: true },
  userName: { type: String, uniqe: true, required: true },
  password: { type: String, minlength: 6, required: true },
  mobileNumber: { type: Number, minlength: 7, required: false },
  timeZone: { type: String, required: false },
  businessPhone: { type: Number, minlength: 7, required: false },
  webAddress: { type: String, minlength: 3, required: false },
  title: { type: String, minlength: 5, required: false },
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

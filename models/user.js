const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  firstName: { type: String, minlength: 3, required: true },
  lastName: { type: String, minlength: 2, required: true },
  userName: { type: String, unique: true, lowercase: true, required: true },
  password: { type: String, minlength: 6, required: true },
  mobileNumber: { type: Number, minlength: 7, required: false },
  timeZone: { type: String, required: false },
  businessPhone: { type: Number, minlength: 7, required: false },
  webAddress: { type: String, minlength: 3, required: false },
  title: { type: String, minlength: 5, required: false },
  affiliateId: { type: String, required: false }
})
module.exports = mongoose.model('User', userSchema)
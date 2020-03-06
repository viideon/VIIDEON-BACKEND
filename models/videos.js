const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
  url: { type: String, unique: true, required: true },
  thumbnail: { type: String, required: true },
  title: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now }
})
module.exports = mongoose.model('Video', videoSchema)
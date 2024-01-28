const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  messageId: { type: Number, unique: true, required: true },
  data: { type: String, required: true },
  likedBy: { type: Array, default: [] },
  createdAt: { type: TimeRanges, required: true}
});

module.exports = mongoose.model('User', userSchema);
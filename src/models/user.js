const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: TimeRanges, required: true },
  updatedAt: { type: TimeRanges }
});

module.exports = mongoose.model('User', userSchema);
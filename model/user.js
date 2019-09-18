const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
    max: 255
  },
  email: {
    type: String,
    require: true,
    max: 255
  },
  password: {
    type: String,
    require: true,
    max: 1024
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', userSchema);

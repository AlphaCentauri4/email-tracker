// models/emailOpen.js
const mongoose = require('mongoose');

const emailOpenSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const EmailOpen = mongoose.model('EmailOpen', emailOpenSchema);

module.exports = EmailOpen;

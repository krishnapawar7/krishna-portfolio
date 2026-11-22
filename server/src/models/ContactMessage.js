const mongoose = require('mongoose');

const contactMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: 100
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/.+@.+\..+/, 'Please provide a valid email address']
  },
  subject: {
    type: String,
    trim: true,
    default: 'General Portfolio Inquiry',
    maxlength: 200
  },
  message: {
    type: String,
    required: [true, 'Message content is required'],
    maxlength: 3000
  },
  ipAddress: String,
  status: {
    type: String,
    enum: ['unread', 'read', 'archived'],
    default: 'unread'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('ContactMessage', contactMessageSchema);

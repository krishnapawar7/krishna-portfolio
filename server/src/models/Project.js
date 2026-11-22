const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  year: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['ai', 'fullstack', 'frontend', 'backend'],
    required: true
  },
  tags: [String],
  summary: {
    type: String,
    required: true
  },
  highlights: [String],
  techStack: [String],
  architecture: [String],
  impact: String,
  githubUrl: {
    type: String,
    default: 'https://github.com/krishnapawar7'
  },
  liveUrl: {
    type: String,
    default: '#'
  },
  featured: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);

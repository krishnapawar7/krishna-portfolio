const express = require('express');
const router = express.Router();
const { profileData } = require('../data/seedData');

// GET /api/profile - Fetch Krishna's profile, resume, and skills
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: profileData
  });
});

// GET /api/profile/skills - Fetch categorized skills
router.get('/skills', (req, res) => {
  res.json({
    success: true,
    data: profileData.skills
  });
});

module.exports = router;

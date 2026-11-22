const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const { projectsData } = require('../data/seedData');
const { getDbStatus } = require('../config/db');

// GET /api/projects - list projects with optional ?category= filter
router.get('/', async (req, res) => {
  try {
    const { category, featured } = req.query;

    if (getDbStatus()) {
      const query = {};
      if (category && category !== 'all') {
        query.category = category;
      }
      if (featured === 'true') {
        query.featured = true;
      }
      const projects = await Project.find(query).sort({ year: -1 });
      return res.json({ success: true, count: projects.length, data: projects });
    }

    // In-memory fallback
    let filtered = [...projectsData];
    if (category && category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }
    if (featured === 'true') {
      filtered = filtered.filter(p => p.featured === true);
    }

    res.json({ success: true, count: filtered.length, data: filtered, source: 'seed' });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ success: false, message: 'Server error fetching projects' });
  }
});

// GET /api/projects/:slug - get project by slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    if (getDbStatus()) {
      const project = await Project.findOne({ slug });
      if (!project) {
        return res.status(404).json({ success: false, message: 'Project not found' });
      }
      return res.json({ success: true, data: project });
    }

    // In-memory fallback
    const project = projectsData.find(p => p.slug === slug);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    res.json({ success: true, data: project, source: 'seed' });
  } catch (error) {
    console.error('Error fetching project detail:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');
const { getDbStatus } = require('../config/db');

// In-memory messages cache if MongoDB is running offline
const inMemoryMessages = [];

// POST /api/contact - Submit a contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required.'
      });
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    const newMessageData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject ? subject.trim() : 'Portfolio Contact Message',
      message: message.trim(),
      ipAddress: req.ip || req.connection.remoteAddress,
      createdAt: new Date()
    };

    if (getDbStatus()) {
      const savedDoc = await ContactMessage.create(newMessageData);
      return res.status(201).json({
        success: true,
        message: 'Your message has been sent successfully! Krishna will get back to you soon.',
        data: {
          id: savedDoc._id,
          name: savedDoc.name,
          createdAt: savedDoc.createdAt
        }
      });
    }

    // In-memory fallback
    const mockId = 'msg_' + Date.now();
    const mockRecord = { _id: mockId, ...newMessageData, status: 'unread' };
    inMemoryMessages.unshift(mockRecord);

    console.log(`📨 [New Contact Message Received via In-Memory Store]: from ${name} (${email}) - "${subject}"`);

    return res.status(201).json({
      success: true,
      message: 'Your message has been recorded! Krishna will get back to you soon.',
      data: {
        id: mockId,
        name: mockRecord.name,
        createdAt: mockRecord.createdAt
      },
      note: 'Stored in memory (MongoDB offline)'
    });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process message. Please email directly at krishpawar214@gmail.com'
    });
  }
});

// GET /api/contact/messages - Review received messages
router.get('/messages', async (req, res) => {
  try {
    if (getDbStatus()) {
      const messages = await ContactMessage.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: messages.length, data: messages });
    }

    res.json({
      success: true,
      count: inMemoryMessages.length,
      data: inMemoryMessages,
      source: 'memory'
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;

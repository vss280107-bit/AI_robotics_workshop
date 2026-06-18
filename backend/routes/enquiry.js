const express = require('express');
const router = express.Router();

// In-memory store (used when MongoDB is not configured)
const enquiries = [];

// Helper: validate email format
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Helper: validate phone (10 digits)
const isValidPhone = (phone) => /^\d{10}$/.test(phone);

// POST /api/enquiry
router.post('/enquiry', async (req, res) => {
  const { name, email, phone } = req.body;

  // Validation
  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please enter a valid email address',
    });
  }

  if (!isValidPhone(phone)) {
    return res.status(400).json({
      success: false,
      message: 'Phone number must be exactly 10 digits',
    });
  }

  try {
    // Try MongoDB if available
    if (process.env.MONGO_URI) {
      const Enquiry = require('../models/Enquiry');
      const enquiry = new Enquiry({ name, email, phone });
      await enquiry.save();
    } else {
      // Fallback: in-memory
      enquiries.push({ name, email, phone, createdAt: new Date() });
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully! We will contact you soon.',
    });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
});

// GET /api/enquiries (admin utility)
router.get('/enquiries', async (req, res) => {
  try {
    if (process.env.MONGO_URI) {
      const Enquiry = require('../models/Enquiry');
      const data = await Enquiry.find().sort({ createdAt: -1 });
      return res.json({ success: true, data });
    }
    return res.json({ success: true, data: enquiries });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;

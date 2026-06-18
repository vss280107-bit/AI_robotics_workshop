const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const enquiryRoutes = require('./routes/enquiry');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err);
  });

// CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use('/api', enquiryRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'AI & Robotics Workshop API is running 🚀' });
});
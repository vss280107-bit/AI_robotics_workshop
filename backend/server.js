const express = require('express');
const cors = require('cors');
require('dotenv').config();

const enquiryRoutes = require('./routes/enquiry');

const app = express();

// PORT from env
const PORT = process.env.PORT || 5000;

// CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.options('*', cors());

app.use(express.json());

// Routes
app.use('/api', enquiryRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'AI & Robotics Workshop API is running 🚀' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
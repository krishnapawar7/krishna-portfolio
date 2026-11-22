const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { connectDB, getDbStatus } = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');
const profileRoutes = require('./routes/profileRoutes');
const contactRoutes = require('./routes/contactRoutes');
const aiRoutes = require('./routes/aiRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (non-blocking)
connectDB();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// API Routes
app.use('/api/profile', profileRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/ai', aiRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    database: getDbStatus() ? 'connected' : 'offline_memory_mode',
    uptime: process.uptime()
  });
});

// Serve frontend if built (production mode)
const clientDistPath = path.join(__dirname, '../../client/dist');
app.use(express.static(clientDistPath));

app.get('*', (req, res, next) => {
  if (req.url.startsWith('/api')) {
    return next();
  }
  const indexPath = path.join(clientDistPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.send(`MERN Portfolio Backend Running on Port ${PORT}`);
    }
  });
});

// Start listening
app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 Krishna Pawar MERN API Server running on port ${PORT}`);
  console.log(`🔗 API Base: http://localhost:${PORT}/api`);
  console.log(`🔗 AI Assistant: http://localhost:${PORT}/api/ai/chat`);
  console.log(`======================================================\n`);
});

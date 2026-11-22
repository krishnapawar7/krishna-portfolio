const mongoose = require('mongoose');

let isDbConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/krishna_portfolio';
  
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2500, // Quick timeout to avoid blocking startup if local Mongo isn't running
    });
    isDbConnected = true;
    console.log(`✅ [MongoDB] Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    isDbConnected = false;
    console.warn(`⚠️ [MongoDB] Local connection note: ${error.message}`);
    console.log(`ℹ️ [MongoDB] App will use in-memory store for contact inquiries and resume seed data until MongoDB is connected.`);
  }
};

const getDbStatus = () => isDbConnected;

module.exports = { connectDB, getDbStatus };

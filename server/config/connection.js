const mongoose = require('mongoose');

// this is my default to local MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/business-website';

// Connecting to DB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1); // Exit the application on connection failure
  });

// Handle connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connection successful');
});

module.exports = db;

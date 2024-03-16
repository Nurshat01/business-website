const mongoose = require('mongoose');

// Determine MongoDB URI based on the environment
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/business-website';

// Connecting to DB
mongoose.connect(mongoURI, { useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1); // Exit the application on connection failure
  });

// Handle MongoDB connection errors
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err.message);
});

// Export Mongoose connection
module.exports = mongoose.connection;

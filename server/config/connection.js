require('dotenv').config();

const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/business-website';

if (!mongoURI) {
  console.error('MongoDB URI is not defined in the environment variables');
  process.exit(1);
}

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1); 
  });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connection successful');
});

module.exports = db;

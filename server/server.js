// server.js

const express = require('express');
const { ApolloServer } = require('@apollo/server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const app = express();

// Apollo Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Apply Apollo middleware to Express
server.applyMiddleware({ app });

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

// Start server
db.once('open', () => {
  app.listen({ port: process.env.PORT || 3001 }, () => {
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT || 3001}${server.graphqlPath}`);
  });
});

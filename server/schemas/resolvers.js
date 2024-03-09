const { User } = require('../models');

const resolvers = {
    Query: {
        users: async (parent, args, context) => {
            return User.find();
          },
    }
};

module.exports = resolvers;
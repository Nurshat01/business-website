const { User } = require('../models/User');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {

            return User.find();
          },
    },
  
     Mutation: {
        addUser: async (parent,args) => {
            const user = await User.create (
                args
            )
            // const token = 'sign token' ()
            // return {token, user}
        }
     }
        },

        user: async (parent, { username }) => {

            return User.findOne({ username});
        },
    },

    Mutation: {
        createUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            };

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            };

            const token = signToken(user);

            return { token, user };
        },
    }
};
// make cud operation
module.exports = resolvers;
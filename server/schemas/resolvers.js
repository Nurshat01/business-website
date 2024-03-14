const { User } = require('../models/User');

const resolvers = {
    Query: {
        users: async (parent, args, context) => {
            return User.find();
          },
    },
     Mutation: {
        addUser: async (parent,args) =>
        {
            const user = await User.create (
                args
            )
            // const token = 'sign token' ()
            // return {token, user}
        }
     }
};
// make cud operation
module.exports = resolvers;
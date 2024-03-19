const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError;
        },
        users: async () => {
            const users = User.find()
            .populate('serviceRequests');

            return users;
        }, 
        // serviceRequests: async () => {
        //     const serviceRequests = ServiceRequest.find();

        //     return serviceRequests;
        // }
    },

    Mutation: {
        createUser: async (parent, { firstName, lastName, email, password }) => {
            const user = await User.create({ firstName, lastName, email, password });
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
        requestService: async (parent, { serviceRequest }, context) => {
            if (context.user) {
                const serviceRequestData = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { serviceRequests: serviceRequest } },
                    { new: true },
                );

                return serviceRequestData;
            }
            throw AuthenticationError;
            ('You need to be logged in!');
        },
        cancelServiceRequest: async (parent, { serviceRequestId }, context) => {
            if (context.user) {
                const serviceRequestData = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { serviceRequests: {serviceRequestId}  } },
                    { new: true },
                );

                return serviceRequestData;
            }
            throw AuthenticationError;
            ('You need to be logged in!');
        }
    }
};

module.exports = resolvers;
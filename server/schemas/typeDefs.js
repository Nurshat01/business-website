// typeDefs.js 
const typeDefs = `
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    createdAt: Date
    serviceRequests: [ServiceRequest]
  }

  type Service {
    _id: ID!
    serviceName: String!
    description: String!
  }

  input ServiceInput {
    _id: ID!
    serviceName: String!
    description: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    services: [Service]
  }

  type Mutation {
    createUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(
      email: String!
      password: String!
    ): Auth
    addService(serviceName: String!, description: String! ): Service
    removeService(serviceId: ID!): Service
    requestService(): User
    cancelServiceRequest(): User
  }
`;


// User review array field

// reviews: [Review]!



// Type and Input definitions for reviews

// type Review {
//   reviewId: ID!
//   reviewBody: String!
// }

// input ReviewInput {
//   reviewId: ID!
//   reviewBody: String!
// }



// Mutations definitions for reviews

// addReview(review: ReviewInput!): User
// removeReview(reviewId: ID!): User

module.exports = typeDefs;
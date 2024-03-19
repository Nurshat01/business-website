// typeDefs.js 
const typeDefs = `
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    serviceRequests: [ServiceRequest]
  }

  type ServiceRequest {
    serviceRequestId: ID!
    serviceImage: String!
    serviceName: String!
    price: String!
    description: String!
  }

  input ServiceRequestInput {
    serviceImage: String!
    serviceName: String!
    price: String!
    description: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
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

    requestService(
      serviceRequest: ServiceRequestInput!
    ): User

    cancelServiceRequest(
      serviceRequestId: ID!
    ): User
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
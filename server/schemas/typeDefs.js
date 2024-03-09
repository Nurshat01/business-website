// typeDefs.js 
const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }
  
  type Query {
    users: User
  }
`


module.exports = typeDefs;
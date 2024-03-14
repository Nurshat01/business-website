// typeDefs.js 
const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }
  type Auth {
    token:ID!
    user:User
  }
  
  type Query {
    users: [User]
  }
type Mutation {
  addUser(email:String!,  password:String!): Auth 
}
  
`

 // mutatations
 


module.exports = typeDefs;
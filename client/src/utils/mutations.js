// mutations.js 
import {gql} from '@apollo/client'
export const Mutation_USERS = gql `{users { _id username email password}}`
// add user 
export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


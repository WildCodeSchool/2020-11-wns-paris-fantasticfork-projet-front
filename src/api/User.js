import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const REGISTER_USER = gql`
  mutation SignUp(
    $email: String!
    $password: String!
    $firstname: String!
    $lastname: String!
    $tags: [String]
    $role: String
  ) {
    signUp(email: $email, password: $password, firstname: $firstname, lastname: $lastname, tags: $tags, role: $role) {
      _id
      email
      password
      firstname
      lastname
      role
    }
  }
`;

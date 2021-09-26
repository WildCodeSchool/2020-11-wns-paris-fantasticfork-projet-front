import { gql } from '@apollo/client';

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
      userID
      token
      tokenExpiration
      firstname
      lastname
      role
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userID
      token
      tokenExpiration
      firstname
      lastname
      role
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

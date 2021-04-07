import { gql } from '@apollo/client';

// TODO: need to add avatar
// eslint-disable-next-line import/prefer-default-export
export const GET_USERS_TO_CREATE_CHAT = gql`
  query Users {
    users {
      _id
      firstname
      lastname
    }
  }
`;

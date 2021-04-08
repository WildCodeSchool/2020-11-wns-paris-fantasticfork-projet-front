import { gql } from '@apollo/client';

export const GET_CHAT_ROOMS = gql`
  query MyChatRooms($userId: String!) {
    myChatRooms(userId: $userId) {
      _id
      participants {
        userId
        name
        lastConnected
      }
      messages {
        userId
        text
        createdAt
      }
    }
  }
`;

// TODO: need to add avatar
export const GET_USERS = gql`
  query Users {
    users {
      _id
      firstname
      lastname
    }
  }
`;

export const READ_CHAT = gql`
  mutation ConnectedToChatRoom($chatRoomId: String!, $userId: String) {
    connectedToChatRoom(chatRoomId: $chatRoomId, userId: $userId) {
      _id
      participants {
        userId
        lastConnected
      }
    }
  }
`;

export const CREATE_CHAT = gql`
  mutation newChatRoom($participants: [ChatRoomInput!]) {
    newChatRoom(participants: $participants) {
      _id
      participants {
        userId
        lastConnected
      }
    }
  }
`;

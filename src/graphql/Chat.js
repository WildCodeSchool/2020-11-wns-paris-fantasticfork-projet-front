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
      lastMessage {
        userId
        text
        createdAt
      }
      unreadMessages
      updatedAt
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

export const NEW_MESSAGE = gql`
  mutation NewMessage($text: String!, $userId: String!, $chatRoomId: String!) {
    newMessage(text: $text, userId: $userId, chatRoomId: $chatRoomId) {
      text
      userId
      chatRoomId
      createdAt
    }
  }
`;

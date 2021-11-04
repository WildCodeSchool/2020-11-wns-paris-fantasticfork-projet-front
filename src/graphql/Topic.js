import { gql } from '@apollo/client';

export const TOPICS = gql`
  query Topics {
    topics {
      _id
      username
      subject
      body
      createdAt
      updatedAt
      url
      tags
      likes
      dislike
      comments {
        commentBody
      }
    }
  }
`;

export const GET_TOPIC = gql`
  query Topic($topicId: ID!) {
    topic(_id: $topicId) {
      _id
      username
      authorID
      subject
      body
      createdAt
      updatedAt
      url
      tags
      likes
      dislike
      comments {
        _id
        author
        commentBody
        topicId
        authorID
        like
        dislike
        createdAt
        updatedAt
        votersIdLikes
        votersIdDislikes
      }
    }
  }
`;

export const ADD_TOPIC = gql`
  mutation CreateTopic(
    $username: String!, 
    $authorID: ID!, 
    $subject: String!, 
    $body: String!, 
    $url: [String], 
    $tags: [String]
  ) {
    createTopic(
      username: $username, 
      authorID: $authorID, 
      subject: $subject,
      body: $body, 
      url: $url, 
      tags: $tags
    ) {
      subject
    }
  }
`;

export const UPDATE_TOPIC = gql`
  mutation UpdateTopic($_id: ID!, $username: String, $subject: String, $body: String, $url: [String], $tags: [String]) {
    updateTopic(_id: $_id, username: $username, subject: $subject, body: $body, url: $url, tags: $tags) {
      subject
    }
  }
`;

export const HANDLE_LIKE_TOPIC = gql`
  mutation HandleLikeTopic($topicID: ID!, $userID: ID!) {
    handleLikeTopic(topicID: $topicID, userID: $userID) 
  }
`;

export const GET_LIKES_TOPIC = gql`
  query GetLikesTopic($_id: ID!) {
    topic(_id: $_id) {
      likes
      dislike
    }
  }
`;

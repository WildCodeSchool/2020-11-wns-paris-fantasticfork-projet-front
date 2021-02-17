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
      like
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
      subject
      body
      createdAt
      updatedAt
      url
      tags
      like
      dislike
      comments {
        _id
        author
        commentBody
        topicId
        like
        dislike
        createdAt
        updatedAt
      }
    }
  }
`;

export const ADD_TOPIC = gql`
  mutation CreateTopic($username: String!, $subject: String!, $body: String!, $url: [String], $tags: [String]) {
    createTopic(username: $username, subject: $subject, body: $body, url: $url, tags: $tags) {
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

export const ADD_LIKE_TOPIC = gql`
  mutation AddLikeTopic($_id: ID!, $like: Int) {
    updateTopic(_id: $_id, like: $like) {
      like
      dislike
    }
  }
`;

export const GET_LIKES_TOPIC = gql`
  query GetLikesTopic($_id: ID!) {
    topic(_id: $_id) {
      like
      dislike
    }
  }
`;

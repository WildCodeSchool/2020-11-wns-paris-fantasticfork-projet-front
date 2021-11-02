/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

export const CREATE_COMMENT = gql`
  mutation CreateComment($topicId: ID!, $author: String!, $authorID: ID!, $commentBody: String!) {
    createComment(topicId: $topicId, author: $author, authorID: $authorID, commentBody: $commentBody) {
      _id
      commentBody
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment($commentId: ID!, $commentBody: String, $voteType: String) {
    updateComment(commentId: $commentId, commentBody: $commentBody, voteType: $voteType) {
      updatedAt
    }
}`;

export const LIKE_COMMENT = gql`
  mutation likeComment($commentId: ID!, $commentBody: String, $voterID: ID!, $voteType: String) {
    likeComment(commentId: $commentId, commentBody: $commentBody, voterID: $voterID, voteType: $voteType) {
      updatedAt
    }
  }
`;

export const DISLIKE_COMMENT = gql`
  mutation dislikeComment($commentId: ID!, $commentBody: String, $voterID: ID!, $voteType: String) {
    dislikeComment(commentId: $commentId, commentBody: $commentBody, voterID: $voterID, voteType: $voteType) {
      updatedAt
    }
  }
`;

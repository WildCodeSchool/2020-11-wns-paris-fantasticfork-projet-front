/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

export const CREATE_COMMENT = gql`
  mutation CreateComment($topicId: ID!, $author: String!, $commentBody: String!) {
    createComment(topicId: $topicId, author: $author, commentBody: $commentBody) {
      _id
      commentBody
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment($commentId: ID!, $commentBody: String, $like: Int, $dislike: Int) {
    updateComment(commentId: $commentId, commentBody: $commentBody, like: $like, dislike: $dislike) {
      updatedAt
    }
  }
`;

import React from 'react';
import { Paper } from '@material-ui/core';
import { gql, useMutation } from '@apollo/client';

// const CREATE_COMMENT = gql`
//   mutation CreateComment($topicId: ID!, $author: String!, $commentBody: String!) {
//     createComment(topicId: $topicId, author: $author, commentBody: $commentBody) {
//       _id
//       commentBody
//     }
//   }
// `;

export default function Register() {
  return <Paper style={{ width: '100%', height: '100%' }}>register</Paper>;
}

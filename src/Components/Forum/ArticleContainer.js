import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Article from './Article';

const GET_TOPIC = gql`
  query Topic($topicId: ID!) {
    topic(_id: $topicId) {
      _id
      username
      subject
      body
      date
      url
      tags
      comments {
        _id
        author
        commentBody
        topicId
        date
        like
        dislike
        lastUpdateDate
      }
    }
  }
`;

function ArticleContainer({ match }) {
  const topicId = match.params.id;
  const { loading, error, data } = useQuery(GET_TOPIC, {
    variables: { topicId },
  });

  return (
    loading === false && (
      <Article
        data={data.topic}
        setNewMessage={() => {
          console.log('refresh needed');
        }}
      />
    )
  );
}

export default ArticleContainer;

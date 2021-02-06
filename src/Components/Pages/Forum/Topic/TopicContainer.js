import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Topic from './Topic';

// prettier-ignore
const GET_TOPIC = gql`
  query Topic($topicId: ID!) {
    topic(_id: $topicId) {
      _id
      username
      subject
      body
      date
      lastUpdateDate
      url
      tags
      like
      dislike
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

function TopicContainer({ match }) {
  const topicId = match.params.id;
  // eslint-disable-next-line no-unused-vars
  const { loading, data, refetch } = useQuery(GET_TOPIC, {
    variables: { topicId },
  });

  return loading === false && <Topic data={data.topic} refresh={() => refetch()} />;
}

export default TopicContainer;

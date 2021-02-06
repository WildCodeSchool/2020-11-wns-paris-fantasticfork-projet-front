import React from 'react';
import { useQuery } from '@apollo/client';
import Topic from './Topic';
import { GET_TOPIC } from '../../../../graphql/Topic';

function TopicContainer({ match }) {
  const topicId = match.params.id;
  const { loading, data, refetch } = useQuery(GET_TOPIC, {
    variables: { topicId },
  });

  return loading === false && <Topic data={data.topic} refresh={() => refetch()} />;
}

export default TopicContainer;

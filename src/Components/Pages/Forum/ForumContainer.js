import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Forum from './Forum';
import TopicForm from './TopicEditor/TopicForm';
import SearchTools from './SearchTools/SearchTools';
import { TOPICS } from '../../../graphql/Topic';

function ForumContainer({ history }) {
  const [open, setOpen] = React.useState(false);
  const { loading, error, data, refetch } = useQuery(TOPICS);
  const [topics, setTopics] = React.useState([]);
  const [isRefetching, setIsRefetching] = React.useState(true);

  useEffect(() => {
    if (isRefetching) refetch();

    return () => setIsRefetching(false);
  }, [open, refetch, isRefetching]);

  useEffect(() => {
    if (!loading) setTopics(data.topics);
  }, [loading, data])

  const goToPage = (topicId) => {
    history.push(`/topics/${topicId}`);
  };

  if (loading) return <p>LOADING...</p>;
  if (error) return <p>{`ERROR: ${error}`}</p>;

  return (
    <>
      <SearchTools modalOpen={setOpen} topics={{ get: topics, set: setTopics, list: data.topics }}/>
      <Forum topics={topics} goToPage={(TopicId) => goToPage(TopicId)} />
      <TopicForm open={open} close={() => setOpen(false)} />
    </>
  );
}

export default ForumContainer;

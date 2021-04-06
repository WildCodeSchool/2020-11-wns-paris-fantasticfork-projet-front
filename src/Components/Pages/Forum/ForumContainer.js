import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Forum from './Forum';
import TopicForm from './TopicEditor/TopicForm';
import SearchTools from './SearchTools/SearchTools';
import { TOPICS } from '../../../graphql/Topic';

function ForumContainer({ history }) {
  const [open, setOpen] = React.useState(false);
  const { loading, error, data, refetch } = useQuery(TOPICS);
  const [isRefetching, setIsRefetching] = React.useState(true);

  useEffect(() => {
    if (isRefetching) refetch();

    return () => setIsRefetching(false);
  }, [open, refetch, isRefetching]);

  const goToPage = (topicId) => {
    history.push(`/topics/${topicId}`);
  };

  if (loading) return <p>LOADING...</p>;
  if (error) return <p>{`ERROR: ${error}`}</p>;

  return (
    <div>
      <SearchTools/>
      <Forum data={data} modalOpen={setOpen} goToPage={(TopicId) => goToPage(TopicId)} />
      <TopicForm open={open} close={() => setOpen(false)} />
    </div>
  );
}

export default ForumContainer;

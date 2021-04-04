import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TOPIC, ADD_LIKE_TOPIC } from '../../../../graphql/Topic';
import Topic from './Topic';
import TopicForm from '../TopicEditor/TopicForm';
import Comment from '../Comment/Comment';
import NewComment from '../Comment/NewComment';

function TopicContainer({ match }) {
  const topicId = match.params.id;
  const { loading, error, data, refetch } = useQuery(GET_TOPIC, {
    variables: { topicId },
  });
  // eslint-disable-next-line no-unused-vars
  const [addLikeTopic, { addLikeError, addLikeLoading }] = useMutation(ADD_LIKE_TOPIC, {
    refetchQueries: [{ query: GET_TOPIC, variables: { topicId } }],
    awaitRefetchQueries: true,
  });
  const [toggle, setToggle] = useState(true);
  const [toggleWrite, setToggleWrite] = useState(false);
  const [modifiyFormOpened, setModifyFormOpened] = useState(false);
  const [bestComment, setBestComment] = useState(null);
  const [sortedComments, setSortedComments] = useState(null);

  useEffect(() => {
    if (data?.topic.comments?.length > 0) {
      const _bestComment = data.topic.comments.reduce((prev, current) => (prev.like > current.like ? prev : current));

      const _sortedComments = Array.from(data.topic.comments);
      const indexBestComment = data.topic.comments.indexOf(_bestComment);
      _sortedComments.splice(indexBestComment, 1);
      _sortedComments.unshift(bestComment);

      setBestComment(_bestComment);
      setSortedComments(_sortedComments);
    }
  }, [bestComment, data]);

  const handleTopicLike = async () => {
    const likes = data.topic.like + 1;
    try {
      addLikeTopic({ variables: { _id: match.params.id, like: likes } });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.err(err, addLikeError);
    }
  };

  if (loading) return <p>LOADING...</p>;
  if (error) return <p>{`ERROR: ${error}`}</p>;
  return (
    <>
      <div className='Article'>
        <Topic
          data={data.topic}
          handleTopicLike={handleTopicLike}
          toggle={toggle}
          setToggle={setToggle}
          toggleWrite={toggleWrite}
          setToggleWrite={setToggleWrite}
          setModifyFormOpened={setModifyFormOpened}
        />
        {modifiyFormOpened && (
          <TopicForm
            mode='update_topic'
            open={() => setModifyFormOpened(true)}
            topicData={data.topic}
            close={() => setModifyFormOpened(false)}
          />
        )}

        {toggleWrite && (
          <NewComment topic_id={data.topic._id} uploaded={() => refetch()} cancel={() => setToggleWrite(false)} />
        )}
        {toggle && sortedComments && (
          <>
            {sortedComments.map((comment) => {
              if (!comment) {
                return null;
              }
              return (
                <div key={comment._id}>
                  <Comment
                    commentId={comment._id}
                    name={comment.author}
                    message={comment.commentBody}
                    createdAt={comment.createdAt}
                    like={comment.like}
                    dislike={comment.dislike}
                    updatedAt={comment.updatedAt}
                    refresh={() => refetch()}
                    best={comment._id === bestComment._id ? true : null}
                  />
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default TopicContainer;

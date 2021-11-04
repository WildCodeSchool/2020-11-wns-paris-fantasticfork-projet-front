/* eslint-disable import/no-named-as-default */
import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { CircularProgress } from '@material-ui/core'
import { GET_TOPIC, HANDLE_LIKE_TOPIC } from '../../../../graphql/Topic';
import Topic from './Topic';
import TopicForm from '../TopicEditor/TopicForm';
import CommentContainer from '../Comment/CommentContainer';
import NewComment from '../NewComment/NewComment'

function TopicContainer({ match }) {
  const topicId = match.params.id;
  const { data, loading, error, refetch } = useQuery(GET_TOPIC, {
    variables: { topicId },
  });
  const [addLikeTopic] = useMutation(HANDLE_LIKE_TOPIC);
  const [toggle, setToggle] = useState(true);
  const [toggleWrite, setToggleWrite] = useState(false);
  const [modifiyFormOpened, setModifyFormOpened] = useState(false);
  const [sortedComments, setSortedComments] = useState(null);

  useEffect(() => {
    if (!data?.topic?.comments?.length) { return null }
    const _bestComment = data.topic.comments.reduce((prev, current) => (prev.like > current.like ? prev : current));
    const _sortedComments = Array.from(data.topic.comments);
    const indexBestComment = data.topic.comments.indexOf(_bestComment);
    _sortedComments.splice(indexBestComment, 1);
    _sortedComments.unshift(_bestComment);
    setSortedComments(_sortedComments);    
  }, [data]);

  const handleTopicLike = async () => {
    const likes = data.topic.like + 1;
    try {
      await addLikeTopic({ variables: { 
        topicID: match.params.id, 
        userID: localStorage.getItem('stud-connect@userID'), 
        likes 
      }});
      refetch();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.err(err);
    }
  };

  if (loading) return <CircularProgress />;
  if (error) return <p>{`ERROR: ${error}`}</p>;
  return (
    <>
      <div className='Article'>
        <Topic
          data={data.topic}
          handleTopicLike={handleTopicLike}
          toggle={toggle}
          setToggle={()=>setToggle(!toggle)}
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
          <NewComment 
            topic_id={data.topic._id} 
            uploaded={() => refetch()} 
            cancel={() => setToggleWrite(false)} 
          />
        )}
        {toggle && sortedComments?.length && sortedComments?.map((comment, idx) => {
          if (!comment) { return null; }
          return (
            <div key={comment._id}>
              <CommentContainer
                authorID={comment.authorID}
                author={comment.author}
                commentId={comment._id}
                name={comment.author}
                message={comment.commentBody}
                createdAt={comment.createdAt}
                like={comment.votersIdLikes}
                dislike={comment.votersIdDislikes}
                updatedAt={comment.updatedAt}
                refresh={refetch}
                best={idx===0}
                votersID={{likes: comment.votersIdLikes, dislikes: comment.votersIdDislikes}}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TopicContainer;

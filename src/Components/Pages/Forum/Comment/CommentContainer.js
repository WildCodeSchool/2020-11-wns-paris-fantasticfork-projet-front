import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_COMMENT, LIKE_COMMENT, DISLIKE_COMMENT } from '../../../../graphql/Comment';
import Comment from './Comment';

function CommentContainer(props) {

  const { authorID, 
        commentId, 
        createdAt, 
        name, 
        message, 
        like, 
        dislike, 
        best, 
        updatedAt, 
        refresh, 
        votersID, 
  } = props;

  const [updateComment] = useMutation(UPDATE_COMMENT);
  const [likeComment] = useMutation(LIKE_COMMENT);
  const [dislikeComment] = useMutation(DISLIKE_COMMENT);
  const [isInEditMode, setEditMode] = useState(false);
  const [commentMessage, setCommentMessage] = useState(message);

  async function updateLike () {
    const likeNumber = like ? like + 1 : 1;
    const voterID = localStorage.getItem('stud-connect@userID');
    const payload = { commentId, like: likeNumber, voterID, voteType: 'like' };

    await likeComment({ variables: payload });
    refresh();
  }   

  async function updateDislike () {
    const dislikeNumber = dislike ? dislike + 1 : 1;
    const voterID = localStorage.getItem('stud-connect@userID');
    const payload = { commentId, dislike: dislikeNumber, voterID, voteType: 'dislike' };
    await dislikeComment({ variables: payload });
    refresh();
  }

  const updateMessage = () => {
    const userID = localStorage.getItem('stud-connect@userID');
    updateComment({ variables: { commentId, userID, commentBody: commentMessage } });
    setEditMode(false);
    refresh();
  };

  const hasUserVotedComment = (type) => {
    if (type === 'like') {
      if (votersID.likes.length && votersID.likes.includes(localStorage.getItem('stud-connect@userID'))) {
        return true;
      } 
      return false;    
    }

    if (type === 'dislike') {
      if (votersID.dislikes.length && votersID.dislikes.includes(localStorage.getItem('stud-connect@userID'))) {
        return true;
      } 
      return false;    
    }

    if (type === 'all') {
      if (votersID.likes.length && votersID.likes.includes(localStorage.getItem('stud-connect@userID'))
        || votersID.dislikes.length && votersID.dislikes.includes(localStorage.getItem('stud-connect@userID'))
      ) {
        return true;
      } 
      return false;    
    }
  }

  return (
      <Comment 
        isBestComment={best} 
        author={{id: authorID, name}} 
        dates={{createdAt, updatedAt}}
        editMode={{isInEditMode, setEditMode}}
        setCommentMessage={setCommentMessage}
        votes={{like, dislike, updateLike, updateDislike}}
        updateMessage={updateMessage}
        hasUserVotedComment={hasUserVotedComment}
        message={message}
        commentMessage={commentMessage}
      />
  );
}

export default CommentContainer;
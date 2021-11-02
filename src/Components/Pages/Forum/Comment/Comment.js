import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Paper, Icon, Avatar, Chip, Typography, Button, TextField } from '@material-ui/core';
import { UPDATE_COMMENT, LIKE_COMMENT, DISLIKE_COMMENT } from '../../../../graphql/Comment';
import getDateFromTimestamp from '../helpers/dates';
import './Comment.css';

export default function Comment(props) {
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
  const [editMode, setEditMode] = useState(false);
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
    <Paper className='Comment_container' elevation={3}>
      <div className='flex_'>
        <Avatar alt={name} />
        <div className='flex_column' style={{ marginLeft: 10 }}>
          <Typography variant='button' className='blue'>
            {name}
          </Typography>

          <Typography variant='caption' className='lightgrey'>
            Posted on
            <span className='lightgrey'> {getDateFromTimestamp(createdAt)} </span>
            {updatedAt && updatedAt !== createdAt && (
              <>
                | Modified on
                <span className='lightgrey'> {getDateFromTimestamp(updatedAt)}</span>
              </>
            )}
          </Typography>
        </div>
        {best && (
          <>
            <div style={{ flex: 1 }} />
            <Chip icon={<Icon fontSize='small'>thumb_up_alt</Icon>} label='Best answer' color='primary' />
          </>
        )}
      </div>
      <div className='Comment_element'>
        {!editMode ? (
          <Typography variant='body1' gutterBottom>
            {message}
          </Typography>
        ) : (
          <TextField
            id='Comment'
            label='Comment'
            multiline
            rows={4}
            variant='outlined'
            className='NewComment_textfield'
            value={commentMessage}
            onChange={(e) => setCommentMessage(e.target.value)}
          />
        )}
      </div>
      <div className='Comment_like'>
        {authorID !== localStorage.getItem('stud-connect@userID') && (
          <>
            <Button 
              // disabled={hasUserVotedComment('all')} 
              onClick={() => updateLike()}
            >
              <Icon className='blue' style={{ marginRight: 5 }}>
                {hasUserVotedComment('like') ? 'thumb_up' : 'thumb_up_off_alt'}
              </Icon>
              {like && like.length}
            </Button>
            <Button /* disabled={hasUserVotedComment('all')} */ onClick={() => updateDislike()}>
              <Icon className='blue' style={{ marginRight: 5 }}>
                {hasUserVotedComment('dislike') ? 'thumb_down' : 'thumb_down_off_alt'}
              </Icon>
              {dislike && dislike.length}
            </Button>
            <div className='flex1' />
          </>
        )}
        {editMode ? (
          <Button size='small' className='Comment_sendbutton' onClick={() => updateMessage()}>
            <Icon fontSize='small' className='Comment_editbutton_icon'>
              send
            </Icon>
            Send
          </Button>
        ) : (
          authorID === localStorage.getItem('stud-connect@userID') && (
            <Button size='small' className='Comment_editbutton' onClick={() => setEditMode(true)}>
              <Icon fontSize='small' className='Comment_editbutton_icon'>
                edit
              </Icon>
              edit
            </Button>
          )
        )}
      </div>
    </Paper>
  );
}

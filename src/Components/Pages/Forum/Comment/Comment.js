import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Paper, Icon, Avatar, Chip, Typography, Button, TextField } from '@material-ui/core';
import { UPDATE_COMMENT } from '../../../../graphql/Comment';
import getDateFromTimestamp from '../helpers/dates';
import './Comment.css';

export default function Comment(props) {
  const { authorID, commentId, createdAt, name, message, like, dislike, best, updatedAt, refresh } = props;
  const [updateComment] = useMutation(UPDATE_COMMENT);
  const [editMode, setEditMode] = useState(false);
  const [commentMessage, setCommentMessage] = useState(message);

  const updateLikeDislike = (mode) => {
    const likeNumber = like ? like + 1 : 1;
    const dislikeNumber = dislike ? dislike + 1 : 1;
    let variables;
    if (mode === 'like') {
      variables = { commentId, like: likeNumber };
    } else {
      variables = { commentId, dislike: dislikeNumber };
    }
    updateComment({ variables });
    refresh();
  };

  const updateMessage = () => {
    updateComment({ variables: { commentId, commentBody: commentMessage } });
    setEditMode(false);
    refresh();
  };

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
            <Button onClick={() => updateLikeDislike('like')}>
              <Icon className='blue' style={{ marginRight: 5 }}>
                thumb_up
              </Icon>
              {like && like}
            </Button>
            <Button onClick={() => updateLikeDislike('dislike')}>
              <Icon className='blue' style={{ marginRight: 5 }}>
                thumb_down
              </Icon>
              {dislike && dislike}
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

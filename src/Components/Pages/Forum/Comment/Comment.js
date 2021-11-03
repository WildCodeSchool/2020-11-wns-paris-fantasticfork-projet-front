import React from 'react';
import { Paper, Icon, Avatar, Chip, Typography, Button, TextField } from '@material-ui/core';
import getDateFromTimestamp from '../helpers/dates';
import './Comment.css';

export default function Comment(props) {
  const { 
    isBestComment, 
    editMode, 
    author, 
    dates, 
    setCommentMessage, 
    votes, 
    updateMessage, 
    hasUserVotedComment,
    message,
    commentMessage
  } = props;
  
  const { isInEditMode, setEditMode } = editMode;
  const { like, dislike, updateLike, updateDislike } = votes;
  const { createdAt, updatedAt } = dates;

  return (
    <Paper className='Comment_container' elevation={3}>
      <div className='flex_'>
        <Avatar alt={author.name} />
        <div className='flex_column' style={{ marginLeft: 10 }}>
          <Typography variant='button' className='blue'>
            {author.name}
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
        {isBestComment && (
          <>
            <div style={{ flex: 1 }} />
            <Chip icon={<Icon fontSize='small'>thumb_up_alt</Icon>} label='Best answer' color='primary' />
          </>
        )}
      </div>
      <div className='Comment_element'>
        {!isInEditMode ? (
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
        {author.id !== localStorage.getItem('stud-connect@userID') && (
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
        {isInEditMode ? (
          <Button size='small' className='Comment_sendbutton' onClick={() => updateMessage()}>
            <Icon fontSize='small' className='Comment_editbutton_icon'>
              send
            </Icon>
            Send
          </Button>
        ) : (
          author.id === localStorage.getItem('stud-connect@userID') && (
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

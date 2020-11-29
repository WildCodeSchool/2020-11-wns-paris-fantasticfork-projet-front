import React, { useState } from 'react';
import axios from 'axios';
import { Paper, Icon, Avatar, TextField, IconButton } from '@material-ui/core';
import './NewComment.css';

export default function NewComment({ reply, topic_id, uploaded }) {
  const [message, setMessage] = useState('');

  const submitCommment = () => {
    axios
      .post(`http://localhost:5000/message/${topic_id}`, {
        date: Date.now(),
        name: 'ThisIsMe',
        message,
      })
      .then(() => uploaded())
      .catch((err) => console.log(err));
  };

  return (
    <div className='NewComment'>
      {reply && (
        <div className='NewComment_reply'>
          <Icon className='NewComment_reply_icon'>subdirectory_arrow_right</Icon>
        </div>
      )}
      <Paper className='NewComment_container' elevation={3}>
        <Avatar className='NewComment_avatar'>M</Avatar>
        <TextField
          id='Comment'
          label='Comment'
          multiline
          rows={4}
          variant='outlined'
          className='NewComment_textfield'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <IconButton style={{ marginRight: 0 }} color='primary' onClick={submitCommment}>
          <Icon>create</Icon>
        </IconButton>
      </Paper>
    </div>
  );
}

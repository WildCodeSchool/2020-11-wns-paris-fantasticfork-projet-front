import React from 'react';
import { Avatar, Typography } from '@material-ui/core';

export default function ChatMessageBox({ message, username, userId, createdAt, img }) {
  const isMyMessage = () => {
    const myId = localStorage.getItem('stud-connect@userID') || '';
    return userId === myId;
  };

  if (isMyMessage()) {
    return (
      <div className='ChatMessageBox'>
        <div className='flex1' />

        <div className='ChatMessageBox_msg_container'>
          <div className='ChatMessageBox_chat'>
            <Typography>{message}</Typography>
          </div>
          <Typography className='ChatMessageBox_date' variant='caption'>
            {createdAt}
          </Typography>
        </div>
      </div>
    );
  }
  return (
    <div className='ChatMessageBox'>
      <Avatar src={img} />

      <div className='ChatMessageBox_msg_container'>
        <div className='flex_'>
          <Typography variant='subtitle2' className='ChatMessageBox_name'>
            {username}
          </Typography>
          <Typography className='not_my_chat ChatMessageBox_date' variant='caption'>
            {createdAt}
          </Typography>
        </div>
        <div className='ChatMessageBox_chat not_my_chat'>
          <Typography>{message}</Typography>
        </div>
      </div>

      <div className='flex1' />
    </div>
  );
}

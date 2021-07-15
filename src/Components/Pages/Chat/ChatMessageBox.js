import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import timestampFormatter from '../../../helper/dates';

export default function ChatMessageBox({ text, userId, createdAt, username, img }) {
  const isMyMessage = () => userId === global.userId;

  if (isMyMessage()) {
    return (
      <div className='ChatMessageBox'>
        <div className='flex1' />

        <div className='ChatMessageBox_msg_container'>
          <div className='ChatMessageBox_chat'>
            <Typography>{text}</Typography>
          </div>
          <Typography className='ChatMessageBox_date' variant='caption'>
            {timestampFormatter(createdAt)}
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
            {timestampFormatter(createdAt)}
          </Typography>
        </div>
        <div className='ChatMessageBox_chat not_my_chat'>
          <Typography>{text}</Typography>
        </div>
      </div>

      <div className='flex1' />
    </div>
  );
}

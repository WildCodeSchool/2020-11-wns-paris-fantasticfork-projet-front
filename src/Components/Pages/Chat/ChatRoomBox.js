import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import sampleImage from '../../../images/cat.jpg';

export default function ChatRoomBox({ name, message, time, unread }) {
  return (
    <div className='ChatRoomBox'>
      <Avatar src={sampleImage} />
      <div className='ChatRoomBox_texts'>
        <Typography variant='subtitle2'>{name}</Typography>
        <Typography variant='caption'>{message}</Typography>
      </div>

      <div className='flex1' />

      <div className='ChatRoomBox_texts second'>
        <Typography variant='caption' display='block'>
          {time}
        </Typography>

        {unread && <div className='badge'>{unread}</div>}
      </div>
    </div>
  );
}

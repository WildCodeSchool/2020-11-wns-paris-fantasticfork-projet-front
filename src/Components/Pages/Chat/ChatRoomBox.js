import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import sampleImage from '../../../images/cat.jpg';
import timestampFormatter from '../../../helper/dates';

// eslint-disable-next-line max-len
export default function ChatRoomBox({ index, participants, lastMessage, unreadMessages, setSelectedRoom }) {
  return (
    <div className='ChatRoomBox' onClick={() => setSelectedRoom(index)}>
      <Avatar src={sampleImage} />
      <div className='ChatRoomBox_texts'>
        <Typography variant='subtitle2'>
          {participants?.filter(p=>p.userId!==global.userId)[0].name}
          {participants?.length > 2 && 
          <span style={{ color: 'grey' }}> + {participants?.length-1}</span>}
        </Typography>

        {lastMessage && (
          <Typography variant='caption'>
            {lastMessage?.text?.length > 50 ? `${lastMessage?.text.slice(0, 50)}...` : lastMessage.text}
          </Typography>
        )}
      </div>

      <div className='flex1' />

      <div className='ChatRoomBox_texts second'>
        {lastMessage && (
          <Typography variant='caption' display='block'>
            {timestampFormatter(lastMessage.createdAt)}
          </Typography>
        )}
        {unreadMessages>0 && <div className='badge'>{unreadMessages}</div>}
      </div>
    </div>
  );
}

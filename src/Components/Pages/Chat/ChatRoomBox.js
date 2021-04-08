import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import sampleImage from '../../../images/cat.jpg';

export default function ChatRoomBox({ index, participants, lastMessage, unreadMessages, setSelectedRoom }) {
  if (!lastMessage) {
    return null;
  }
  let participantsNames = participants[0].name;
  if (participants?.length > 1) {
    participants.forEach((p) => {
      participantsNames += ` | ${p.name}`;
    });
  }
  return (
    <div className='ChatRoomBox' onClick={() => setSelectedRoom(index)}>
      <Avatar src={sampleImage} />
      <div className='ChatRoomBox_texts'>
        <Typography variant='subtitle2'>{participantsNames}</Typography>

        <Typography variant='caption'>
          {lastMessage?.text?.length > 50 ? `${lastMessage.text.slice(0, 50)}...` : lastMessage.text}
        </Typography>
      </div>

      <div className='flex1' />

      <div className='ChatRoomBox_texts second'>
        <Typography variant='caption' display='block'>
          {lastMessage?.createdAt}
        </Typography>

        {unreadMessages && <div className='badge'>{unreadMessages}</div>}
      </div>
    </div>
  );
}

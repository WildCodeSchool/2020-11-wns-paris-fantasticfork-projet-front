import React, { useState } from 'react';
import { Paper, Avatar, Typography, InputBase, Button } from '@material-ui/core';
import sampleImage from '../../../images/cat.jpg';
import ChatMessageBox from './ChatMessageBox';

export default function ChatMessages({ data }) {
  const dummyMessages = {
    chatRoom: { ...data },
    messages: [
      { id: '1-1', message: 'Hey', username: 'John', userId: '6021a23d07591c28b6614d19', createdAt: '06/04' },
      { id: '1-2', message: 'Hey there', username: 'Tom', userId: '6021a23d07591c28b6614d190', createdAt: '11:50' },
      {
        id: '1-3',
        message: 'This is a message more than 50 letters. I am long very long',
        username: 'John',
        userId: '6021a23d07591c28b6614d19',
        createdAt: '06/04',
      },
    ],
  };

  const [messageInput, setMessageInput] = useState('');

  if (!data) {
    return null;
  }
  return (
    <div className='ChatMessages'>
      <Paper className='ChatMessages_container' elevation={0}>
        <div className='ChatMessages_header'>
          <Avatar src={sampleImage} />
          <Typography variant='subtitle2'>{data.name}</Typography>
        </div>

        <div className='ChatMessages_body'>
          {dummyMessages.messages &&
            dummyMessages.messages.map((msg) => <ChatMessageBox key={msg.id} {...msg} img={sampleImage} />)}
        </div>

        <div className='ChatMessages_input'>
          <InputBase
            className='ChatMessages_input_box'
            placeholder='Message'
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <Button variant='contained' color='primary'>
            send
          </Button>
        </div>
      </Paper>
    </div>
  );
}

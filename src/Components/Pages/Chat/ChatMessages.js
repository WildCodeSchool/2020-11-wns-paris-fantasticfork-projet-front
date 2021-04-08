import React, { useState } from 'react';
import { Paper, Avatar, Typography, InputBase, Button } from '@material-ui/core';
import sampleImage from '../../../images/cat.jpg';
import ChatMessageBox from './ChatMessageBox';

export default function ChatMessages({ data }) {
  const [messageInput, setMessageInput] = useState('');

  let messages = data?.messages;
  if (messages && data?.participants) {
    messages = messages.map((msg) => {
      const username = data.participants.find((p) => p.userId === msg.userId).name;
      return { ...msg, username };
    });
  }

  if (!data.messages) {
    return null;
  }
  return (
    <div className='ChatMessages'>
      <Paper className='ChatMessages_container' elevation={0}>
        <div className='ChatMessages_header'>
          <Avatar src={sampleImage} />
          <Typography variant='subtitle2'>
            {' '}
            {data.participants[0].name}
            {data.participants?.length > 1 && <span style={{ color: 'grey' }}> + {data.participants?.length}</span>}
          </Typography>
        </div>

        <div className='ChatMessages_body'>
          {messages && messages.map((msg) => <ChatMessageBox key={msg.createdAt} {...msg} img={sampleImage} />)}
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

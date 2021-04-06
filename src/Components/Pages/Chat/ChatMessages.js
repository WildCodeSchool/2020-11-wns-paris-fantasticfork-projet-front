import React from 'react';
import { Paper, Avatar, Typography } from '@material-ui/core';
import sampleImage from '../../../images/cat.jpg';

export default function ChatMessages({ data }) {
  return (
    <div className='ChatMessages'>
      <Paper className='ChatMessages_container' elevation={0}>
        <div className='ChatMessages_header'>
          <Avatar src={sampleImage} />
          <Typography variant='subtitle2'>{data.name}</Typography>
        </div>
        <h1>THIS IS CHAT</h1>
      </Paper>
    </div>
  );
}

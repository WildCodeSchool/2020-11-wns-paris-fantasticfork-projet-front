import React, { useState } from 'react';
import { Paper, Icon, Avatar, Chip, Typography, Button } from '@material-ui/core';
import NewComment from './NewComment';

export default function Comment({ date, name, message, best }) {
  const [reply, setReply] = useState(false);
  return (
    <>
      <Paper style={{ margin: 20, padding: 40, display: 'flex', flexDirection: 'column' }} elevation={3}>
        <div style={{ display: 'flex' }}>
          <Avatar alt={name} />
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
            <Typography variant='button' style={{ color: '#3f51b5' }}>
              {name}
            </Typography>
            <Typography variant='caption' style={{ color: '#9e9e9e' }}>
              Posted on
              <span style={{ fontWeight: 'bold' }}> {date}</span>
            </Typography>
          </div>
          {best && (
            <>
              <div style={{ flex: 1 }} />
              <Chip icon={<Icon fontSize={'small'}>thumb_up_alt</Icon>} label='Best answer' color='primary' />
            </>
          )}
        </div>
        <div style={{ display: 'flex', marginTop: 20 }}>
          <Typography variant='body1' gutterBottom>
            {message}
          </Typography>
        </div>
        <div style={{ display: 'flex', marginTop: 20 }}>
          {!reply && (
            <Button size='small' style={{ color: '#9e9e9e' }} onClick={() => setReply(true)}>
              <Icon fontSize={'small'}>subdirectory_arrow_right</Icon>reply
            </Button>
          )}
        </div>
      </Paper>
      {reply && <NewComment reply={true} />}
    </>
  );
}

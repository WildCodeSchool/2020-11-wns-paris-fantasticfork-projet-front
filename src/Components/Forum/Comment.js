import React, { useState } from 'react';
import { Paper, Button, Icon, Avatar, Chip, Typography, IconButton } from '@material-ui/core';
import sampleImage from '../../images/cat.jpg';

export default function Comment({ date, name, message, best }) {
  return (
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
    </Paper>
  );
}

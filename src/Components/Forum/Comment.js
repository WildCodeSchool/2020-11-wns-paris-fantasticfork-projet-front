import React from 'react';
import { Paper, Icon, Avatar, Chip, Typography } from '@material-ui/core';
import './Comment.css';

export default function Comment({ date, name, message, best }) {
  return (
    <>
      <Paper className='Comment_container' elevation={3}>
        <div className='flex_'>
          <Avatar alt={name} />
          <div className='flex_column' style={{ marginLeft: 10 }}>
            <Typography variant='button' className='blue'>
              {name}
            </Typography>
            <Typography variant='caption' className='lightgrey'>
              Posted on
              <span className='lightgrey'> {date}</span>
            </Typography>
          </div>
          {best && (
            <>
              <div style={{ flex: 1 }} />
              <Chip icon={<Icon fontSize={'small'}>thumb_up_alt</Icon>} label='Best answer' color='primary' />
            </>
          )}
        </div>
        <div className='Comment_element'>
          <Typography variant='body1' gutterBottom>
            {message}
          </Typography>
        </div>
      </Paper>
    </>
  );
}

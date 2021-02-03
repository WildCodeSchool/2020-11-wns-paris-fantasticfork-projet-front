import React from 'react';
import { Typography, Badge, Icon } from '@material-ui/core';
import './SubNavbar.css';

export default function SubNavbar({ title }) {
  return (
    <div className='flex_ subNavbar'>
      <Typography variant='h4' gutterBottom style={{ marginLeft: 60 }} className='blue'>
        {title}
      </Typography>
      <div style={{ flex: 1 }} />
      <Badge badgeContent={7} color='secondary' style={{ position: 'fixed', right: 100 }}>
        <Icon>comments</Icon>
      </Badge>
      <Badge badgeContent={4} color='secondary' style={{ position: 'fixed', right: 50 }}>
        <Icon>mail</Icon>
      </Badge>
    </div>
  );
}

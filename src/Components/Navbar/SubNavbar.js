import React, { useState } from 'react';
import { Typography, Badge, Icon } from '@material-ui/core';
import './SubNavbar.css';

export default function SubNavbar({ title }) {
  const [Log, setLog] = useState(false);
  return (
    <div className='flex_ subNavbar'>
      <Typography variant='h4' gutterBottom style={{ marginLeft: 60 }} className='blue'>
        {title}
      </Typography>
      <div style={{ flex: 1 }} />
      {/* <Badge badgeContent={7} color='secondary' style={{ position: 'fixed', right: 100 }}>
        <Icon>comments</Icon>
      </Badge>
      <Badge badgeContent={4} color='secondary' style={{ position: 'fixed', right: 50 }}>
        <Icon>mail</Icon>
      </Badge> */}

      <Badge badgeContent={3} color='secondary' style={{ display: 'block', position: 'fixed', right: 250 }}>
        <Icon>notifications</Icon>
      </Badge>
      <Badge badgeContent={7} color='secondary' style={{ position: 'fixed', right: 200 }}>
        <Icon>comments</Icon>
      </Badge>
      <Badge badgeContent={4} color='secondary' style={{ position: 'fixed', right: 150 }}>
        <Icon>mail</Icon>
      </Badge>
      <div className='logButton' style={{ right: 20, position: 'fixed' }} onClick={() => setLog(!Log)}>
        <p style={Log ? { display: 'none' } : { display: 'block' }}>Login</p>
        <p style={!Log ? { display: 'none' } : { display: 'block' }}>Logout</p>
      </div>
    </div>
  );
}

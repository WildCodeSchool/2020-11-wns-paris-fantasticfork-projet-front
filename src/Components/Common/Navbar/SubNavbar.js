import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Badge, Icon, Button } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { LOGOUT } from '../../../graphql/User';
import './SubNavbar.css';

export default function SubNavbar({ title }) {
  const isAuth = !!localStorage.getItem('stud-connect@userID');
  const history = useHistory();
  const [logoutUser, { client }] = useMutation(LOGOUT);

  const goToLogin = () => {
    history.push('/login');
  };

  const handleLogout = async () => {
    await logoutUser();

    localStorage.setItem('stud-connect@userID', '');
    localStorage.setItem('stud-connect@token', '');
    localStorage.setItem('stud-connect@tokenExpiration', '');

    await client.resetStore();

    history.push('/');
  };

  return (
    <div className='flex_ subNavbar'>
      <Typography variant='h4' gutterBottom style={{ marginLeft: 60 }} className='blue'>
        {title}
      </Typography>

      <div style={{ flex: 1 }} />
      <Badge badgeContent={3} color='secondary' style={{ display: 'block', position: 'fixed', right: 250 }}>
        <Icon>notifications</Icon>
      </Badge>
      <Badge badgeContent={7} color='secondary' style={{ position: 'fixed', right: 200 }}>
        <Icon>comments</Icon>
      </Badge>
      <Badge badgeContent={4} color='secondary' style={{ position: 'fixed', right: 150 }}>
        <Icon>mail</Icon>
      </Badge>
      <h5>test</h5>
      <div className='logButton'>
        {isAuth ? (
          <Button variant='outlined' color='primary' onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button variant='contained' color='primary' onClick={goToLogin}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
}

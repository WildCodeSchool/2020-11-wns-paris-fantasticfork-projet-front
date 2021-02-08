import React from 'react';
import { Container, Avatar, Icon, Typography, TextField, Button, Grid, Link } from '@material-ui/core';
import '../Register/Register.css';

export default function Login(props) {
  const { formData, handleInputChange, onSubmitHandler } = props;

  return (
    <div className='Register_container'>
      <Container component='main' maxWidth='xs'>
        <div className='Register_box'>
          <Avatar className='Register_avatar'>
            <Icon>assignment_ind</Icon>
          </Avatar>
          <Typography component='h1' variant='h5'>
            Login
          </Typography>
          <form className='Register_form' onSubmit={(e) => onSubmitHandler(e)} noValidate>
            <TextField
              id='email'
              name='email'
              label='Email Address'
              type='email'
              variant='outlined'
              margin='normal'
              required
              fullWidth
              autoFocus
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              label='Password'
              type='password'
              id='password'
              name='password'
              variant='outlined'
              margin='normal'
              required
              fullWidth
              value={formData.password}
              onChange={handleInputChange}
            />
            <Button type='submit' fullWidth variant='contained' color='primary' className='Register_button'>
              Login
            </Button>
            <Grid container justify='center' alignItems='center'>
              <Grid item>
                <Link href='/register' variant='body2'>
                  New here? Create an Account
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

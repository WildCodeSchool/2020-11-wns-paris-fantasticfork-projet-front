import React from 'react';
import { Container, Avatar, Icon, Typography, TextField, Button, Grid, Link } from '@material-ui/core';
import './Register.css';

export default function Login() {
  // TODO : Add a function "forgot password?"
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
          <form className='Register_form' onSubmit={() => {}}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              type='email'
              // value={Email}
              // onChange={onEmailHandler}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              // value={Password}
              // onChange={onPasswordHandler}
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

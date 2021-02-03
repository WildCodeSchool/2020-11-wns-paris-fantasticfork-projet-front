import React from 'react';
import { Container, Avatar, Icon, Typography, TextField, Button, Grid, Link } from '@material-ui/core';
import './Register.css';

export default function Register({ onSubmitHandler }) {
  return (
    <div className='Register_container'>
      <Container component='main' maxWidth='xs'>
        <div className='Register_box'>
          <Avatar className='Register_avatar'>
            <Icon>assignment_ind</Icon>
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <form className='Register_form' onSubmit={onSubmitHandler} noValidate>
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
              id='name'
              label='name'
              name='name'
              autoComplete='name'
              autoFocus
              type='text'
              // value={Name}
              // onChange={onNameHandler}
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
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='confirmed-password'
              label='Confirm password'
              type='password'
              id='confirmed-password'
              autoComplete='confirmed-password'
              // value={ConfirmPassword}
              // onChange={onConfirmPasswordHandler}
            />
            <Button type='submit' fullWidth variant='contained' color='primary' className='Register_button'>
              Create an account
            </Button>
            <Grid container justify='center' alignItems='center'>
              <Grid item>
                <Link href='/login' variant='body2'>
                  Do you have an account? Sign In
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

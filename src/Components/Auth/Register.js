import React from 'react';
import { Container, Avatar, Icon, Typography, TextField, Button, Grid, Link } from '@material-ui/core';
import './Register.css';

export default function Register(props) {
  const {
    onSubmitHandler,
    email,
    onEmailHandler,
    emailErrorText,
    password,
    onPasswordHandler,
    confirmPassword,
    onConfirmPasswordHandler,
    confirmPasswordErrorText,
    firstname,
    onFirstnameHandler,
    lastname,
    onLastnameHandler,
  } = props;

  return (
    <div className='Register_container flex_column'>
      <Container component='main' maxWidth='xs'>
        <div className='Register_box'>
          <Avatar className='Register_avatar'>
            <Icon>assignment_ind</Icon>
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>

          <form className='Register_form' onSubmit={(e) => onSubmitHandler(e)} noValidate>
            <TextField
              id='email'
              label='Email Address'
              type='email'
              variant='outlined'
              margin='normal'
              required
              fullWidth
              autoFocus
              value={email}
              onChange={onEmailHandler}
              error={!!emailErrorText}
              helperText={emailErrorText}
            />

            <div className='Register_name_container'>
              <TextField
                id='firstname'
                label='First name'
                type='text'
                variant='outlined'
                margin='normal'
                required
                value={firstname}
                onChange={onFirstnameHandler}
              />
              <div className='form_beween_space' />
              <TextField
                id='lastname'
                label='Last name'
                type='text'
                variant='outlined'
                margin='normal'
                required
                value={lastname}
                onChange={onLastnameHandler}
              />
            </div>

            <TextField
              label='Password'
              type='password'
              id='password'
              variant='outlined'
              margin='normal'
              required
              fullWidth
              value={password}
              onChange={onPasswordHandler}
            />
            <TextField
              label='Confirm password'
              type='password'
              id='confirmed-password'
              variant='outlined'
              margin='normal'
              required
              fullWidth
              value={confirmPassword}
              onChange={onConfirmPasswordHandler}
              error={!!confirmPasswordErrorText}
              helperText={confirmPasswordErrorText}
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

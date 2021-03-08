import React from 'react';
import { Container, Avatar, Icon, Typography, TextField, Button, Grid, Link } from '@material-ui/core';
import './Register.css';

export default function Register(props) {
  const {
    formData,
    handleInputChange,
    onSubmitHandler,
    emailErrorText,
    passwordErrorText,
    confirmPasswordErrorText,
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
              error={!!emailErrorText}
              helperText={emailErrorText}
            />

            <div className='Register_name_container'>
              <TextField
                id='firstname'
                name='firstname'
                label='First name'
                type='text'
                variant='outlined'
                margin='normal'
                required
                value={formData.firstname}
                onChange={handleInputChange}
              />
              <div className='form_beween_space' />
              <TextField
                id='lastname'
                name='lastname'
                label='Last name'
                type='text'
                variant='outlined'
                margin='normal'
                required
                value={formData.lastname}
                onChange={handleInputChange}
              />
            </div>

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
              error={!!passwordErrorText}
              helperText={passwordErrorText}
            />
            <TextField
              label='Confirm password'
              type='password'
              id='confirmed-password'
              name='confirmPassword'
              variant='outlined'
              margin='normal'
              required
              fullWidth
              value={formData.confirmPassword}
              onChange={handleInputChange}
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

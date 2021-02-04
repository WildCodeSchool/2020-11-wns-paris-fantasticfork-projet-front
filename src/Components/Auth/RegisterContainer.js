import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../api/User';
import Register from './Register';

export default function RegisterContainer({ history }) {
  const [registerUser, { loading }] = useMutation(REGISTER_USER);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      return alert('Password does not match');
    }
    const body = {
      email: Email,
      name: Name,
      password: Password,
    };
    dispatch(registerUser(body)).then((res) =>
      res.payload.success ? props.history.push('/login') : alert('Failed to sign up')
    );
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (this.state.emailErrorText == '' && this.state.confirmPasswordErrorText == '') {
      console.log('_onSubmit: state=', this.state);
    } else {
      console.log('has error, unable to submit');
    }

    try {
      const response = await registerUser({
        email,
        password,
        firstname,
        lastname,
      });

      console.log(response);
    } catch (err) {
      console.log(err);
    }

    history.push('/');
  };

  return <Register onSubmitHandler={(e) => onSubmitHandler(e)} />;
}

// https://gist.github.com/hsinhoyeh/505e7ae4734350da33903ef3ea68a0b8

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../api/User';
import Register from './Register';

export default function RegisterContainer({ history }) {
  const [registerUser] = useMutation(REGISTER_USER);

  const [email, setEmail] = useState('');
  const [emailErrorText, setEmailErrorText] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };
  const onFirstnameHandler = (e) => {
    setFirstname(e.currentTarget.value);
  };
  const onLastnameHandler = (e) => {
    setLastname(e.currentTarget.value);
  };

  const validMail = (_email) => {
    const regex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    const valid = regex.test(_email);

    return valid;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!validMail(email)) {
      setEmailErrorText('Email address is not valid');
      return null;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordErrorText('Passwords are not matched');
      return null;
    }

    // res.success ? props.history.push('/login') : alert('Failed to sign up')

    try {
      await registerUser({
        variables: {
          email,
          password,
          firstname,
          lastname,
        },
      });

      history.push('/');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      history.push('/login');
    }
  };

  return (
    <Register
      onSubmitHandler={(e) => onSubmitHandler(e)}
      email={email}
      onEmailHandler={(e) => onEmailHandler(e)}
      emailErrorText={emailErrorText}
      password={password}
      onPasswordHandler={(e) => onPasswordHandler(e)}
      confirmPassword={confirmPassword}
      onConfirmPasswordHandler={(e) => onConfirmPasswordHandler(e)}
      confirmPasswordErrorText={confirmPasswordErrorText}
      firstname={firstname}
      onFirstnameHandler={(e) => onFirstnameHandler(e)}
      lastname={lastname}
      onLastnameHandler={(e) => onLastnameHandler(e)}
    />
  );
}

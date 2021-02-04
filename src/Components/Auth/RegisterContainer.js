import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../api/User';
import Register from './Register';

export default function RegisterContainer({ history }) {
  const [registerUser] = useMutation(REGISTER_USER);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
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

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // if (password !== ConfirmPassword) {
    //   need to send an error 'Password does not match'
    // }

    // res.success ? props.history.push('/login') : alert('Failed to sign up')

    try {
      const response = await registerUser({
        email,
        password,
        firstname,
        lastname,
      });

      // eslint-disable-next-line no-console
      console.log(response);
      history.push('/');
    } catch (err) {
      // console.log(err);
      history.push('/login');
    }
  };

  return (
    <Register
      onSubmitHandler={(e) => onSubmitHandler(e)}
      email={email}
      setEmail={(e) => onEmailHandler(e)}
      password={password}
      setPassword={(e) => onPasswordHandler(e)}
      ConfirmPassword={ConfirmPassword}
      setConfirmPassword={(e) => onConfirmPasswordHandler(e)}
      firstname={firstname}
      setFirstname={(e) => onFirstnameHandler(e)}
      lastname={lastname}
      setLastname={(e) => onLastnameHandler(e)}
    />
  );
}

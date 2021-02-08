import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../../graphql/User';
import Register from './Register';
import { validMail } from '../../../helper/Auth';

const initialFormData = {
  email: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  lastname: '',
};

export default function RegisterContainer({ history }) {
  const [registerUser] = useMutation(REGISTER_USER, {
    onCompleted: ({ signUp }) => {
      localStorage.setItem('userID', signUp.userID);
      localStorage.setItem('token', signUp.token);
      localStorage.setItem('tokenExpiration', signUp.tokenExpiration);
      history.push('/home');
    },
  });

  const [formData, setFormData] = useState(initialFormData);
  const [emailErrorText, setEmailErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState('');

  const handleInputChange = ({ target: { name, value } }) => {
    if (name === 'password' && value.length < 8) {
      setPasswordErrorText('Password must have at least 8 caracters');
    } else {
      setPasswordErrorText('');
    }

    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!validMail(formData.email)) {
      setEmailErrorText('Email address is not valid');
      return null;
    }

    if (formData.password !== formData.confirmPassword) {
      setConfirmPasswordErrorText('Passwords are not matched');
      return null;
    }

    try {
      await registerUser({
        variables: {
          email: formData.email,
          password: formData.password,
          firstname: formData.firstname,
          lastname: formData.lastname,
        },
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      history.push('/register');
    }
  };

  return (
    <Register
      formData={formData}
      handleInputChange={handleInputChange}
      onSubmitHandler={(e) => onSubmitHandler(e)}
      emailErrorText={emailErrorText}
      passwordErrorText={passwordErrorText}
      confirmPasswordErrorText={confirmPasswordErrorText}
    />
  );
}

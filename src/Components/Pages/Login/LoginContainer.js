import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../graphql/User';
import Login from './Login';

const initialFormData = {
  email: '',
  password: '',
  confirmPassword: '',
};

export default function LoginContainer({ history }) {
  const [formData, setFormData] = useState(initialFormData);

  // eslint-disable-next-line no-unused-vars
  const [loginUser] = useMutation(LOGIN, {
    onCompleted: ({ login }) => {
      localStorage.setItem('userID', login.userID);
      localStorage.setItem('token', login.token);
      localStorage.setItem('tokenExpiration', login.tokenExpiration);
      history.push('/home');
    },
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await loginUser({
        variables: {
          email: formData.email,
          password: formData.password,
        },
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  // if (loginError) {
  //   return <p>{loginError}</p>;
  // }
  return (
    <Login formData={formData} handleInputChange={handleInputChange} onSubmitHandler={(e) => onSubmitHandler(e)} />
  );
}

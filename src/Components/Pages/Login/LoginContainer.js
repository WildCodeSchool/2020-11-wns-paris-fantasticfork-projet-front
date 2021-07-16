import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../graphql/User';
import Login from './Login';
import Notification from '../../Common/Notification/Notification';

const initialFormData = {
  email: '',
  password: '',
  confirmPassword: '',
};

const initialNotification = {
  show: false,
  severity: '',
  message: '',
};

export default function LoginContainer({ history }) {
  const [formData, setFormData] = useState(initialFormData);
  const [notification, setNotification] = useState(initialNotification);

  const [loginUser] = useMutation(LOGIN, {
    onCompleted: ({ login }) => {
      localStorage.setItem('stud-connect@userID', login.userID);
      localStorage.setItem('stud-connect@token', login.token);
      localStorage.setItem('stud-connect@tokenExpiration', login.tokenExpiration);
      localStorage.setItem('stud-connect@firstname', login.firstname);
      localStorage.setItem('stud-connect@lastname', login.lastname);
      localStorage.setItem('stud-connect@role', login.role);
      history.push('/home');
    },
  });

  const resetNotification = () => {
    setNotification(initialNotification);
  };

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
      setNotification({ show: true, severity: 'error', message: `Login failed: ${err.message}` });
      setTimeout(() => {
        resetNotification();
      }, 5000);
    }
  };

  return (
    <>
      <Login formData={formData} handleInputChange={handleInputChange} onSubmitHandler={(e) => onSubmitHandler(e)} />
      {notification.show && (
        <Notification severity={notification.severity} message={notification.message} closed={resetNotification} />
      )}
    </>
  );
}

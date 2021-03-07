import React, { useState, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../../graphql/User';
import UserContext from '../../../Contexts/UserContext';
import Register from './Register';
import Notification from '../../Common/Notification/Notification';
import { validMail } from '../../../helper/Auth';

const initialFormData = {
  email: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  lastname: '',
};

const initialNotification = {
  show: false,
  severity: '',
  message: '',
};

export default function RegisterContainer({ history }) {
  const { user, setUser } = useContext(UserContext);

  const [registerUser] = useMutation(REGISTER_USER, {
    onCompleted: ({ signUp }) => {
      localStorage.setItem('stud-connect@userID', signUp.userID);
      localStorage.setItem('stud-connect@token', signUp.token);
      localStorage.setItem('stud-connect@tokenExpiration', signUp.tokenExpiration);
      setUser({
        ...user,
        isAuth: true,
        userID: signUp.userID,
        token: signUp.token,
        tokenExpiration: signUp.tokenExpiration,
      });
      history.push('/home');
    },
  });

  const [formData, setFormData] = useState(initialFormData);
  const [emailErrorText, setEmailErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState('');
  const [notification, setNotification] = useState(initialNotification);

  const resetNotification = () => {
    setNotification(initialNotification);
  };

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
      setNotification({ show: true, severity: 'error', message: `Sign up failed: ${err.message}` });
      setTimeout(() => {
        resetNotification();
      }, 5000);

      history.push('/register');
    }
  };

  return (
    <>
      <Register
        formData={formData}
        handleInputChange={handleInputChange}
        onSubmitHandler={(e) => onSubmitHandler(e)}
        emailErrorText={emailErrorText}
        passwordErrorText={passwordErrorText}
        confirmPasswordErrorText={confirmPasswordErrorText}
      />
      {notification.show && (
        <Notification severity={notification.severity} message={notification.message} closed={resetNotification} />
      )}
    </>
  );
}

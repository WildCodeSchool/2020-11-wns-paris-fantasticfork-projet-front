import React from 'react';
import { Paper } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../api/User';

export default function Register() {
  const [registerUser, { loading }] = useMutation(REGISTER_USER);

  return <Paper style={{ width: '100%', height: '100%' }}>register</Paper>;
}

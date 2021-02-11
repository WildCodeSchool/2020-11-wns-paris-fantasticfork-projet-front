import React from 'react';

const initialState = {
  isAuth: false,
  userID: '',
  token: '',
  tokenExpiration: '',
};

const UserContext = React.createContext(initialState);

export default UserContext;

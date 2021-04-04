import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloLink, HttpLink, ApolloProvider, InMemoryCache, from } from '@apollo/client';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';

const httpLink = new HttpLink({
  // uri: process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4000/graphql',
  uri: process.env.REACT_APP_GRAPHQL_URI,
  credentials: 'include',
});

const refreshToken = new TokenRefreshLink({
  accessTokenField: 'token',
  isTokenValidOrUndefined: () => {
    const token = localStorage.getItem('stud-connect@token') || '';

    if (!token) {
      return true;
    }

    try {
      const { exp } = jwt_decode(token);
      if (Date.now() >= exp * 1000) {
        return false;
      }
      return true;
    } catch {
      return false;
    }
  },
  fetchAccessToken: () => {
    const token = localStorage.getItem('stud-connect@token') || null;
    return fetch(
      process.env.ENV === 'dev'
        ? 'http://localhost:4000/refresh_token'
        : 'https://stud-connect.herokuapp.com/refresh_token',
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          Authorization: token ? `bearer ${token}` : null,
        },
      }
    );
  },
  handleFetch: (accessToken) => {
    localStorage.setItem('stud-connect@token', accessToken);
  },
  handleError: (err) => {
    // eslint-disable-next-line no-console
    console.warn('Your refresh token is invalid. Try to relogin');
    // eslint-disable-next-line no-console
    console.error(err);
  },
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('stud-connect@token') || null;

  // add the authorization to the headers
  if (token) {
    operation.setContext({
      headers: {
        Authorization: token ? `bearer ${token}` : null,
      },
    });
  }

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: 'include',
  link: from([refreshToken, authMiddleware, httpLink]),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

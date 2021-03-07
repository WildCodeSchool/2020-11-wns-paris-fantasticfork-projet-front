import React, { useState, useContext, useMemo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import UserContext from './Contexts/UserContext';
import { Authenticated, Visitor } from './Layouts';
import RegisterContainer from './Components/Pages/Register/RegisterContainer';
import LoginContainer from './Components/Pages/Login/LoginContainer';
import TopicContainer from './Components/Pages/Forum/Topic/TopicContainer';
import ForumContainer from './Components/Pages/Forum/ForumContainer';
import './App.css';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem('stud-connect@token') || '',
  },
});

const initialState = {
  isAuth: !!localStorage.getItem('stud-connect@userID'),
  userID: localStorage.getItem('stud-connect@userID') || '',
  token: localStorage.getItem('stud-connect@token') || '',
  tokenExpiration: localStorage.getItem('stud-connect@tokenExpiration') || '',
};

function App() {
  const [user, setUser] = useState(initialState);
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={userValue}>
        <Switch>
          <RouteWrapper exact path='/' component={ForumContainer} layout={Visitor} />
          <RouteWrapper
            exact
            path='/home'
            component={RegisterContainer}
            protectedRoute
            layout={Authenticated}
            text='Home'
          />
          <RouteWrapper exact path='/register' component={RegisterContainer} layout={Visitor} />
          <RouteWrapper exact path='/login' component={LoginContainer} layout={Visitor} />
          <RouteWrapper exact path='/topics' history component={ForumContainer} layout={Authenticated} text='Forum' />
          <RouteWrapper path='/topics/:id' component={TopicContainer} protectedRoute layout={Authenticated} />
        </Switch>
      </UserContext.Provider>
    </ApolloProvider>
  );
}

function RouteWrapper(props) {
  const { component: Component, layout: Layout, text, protectedRoute, ...rest } = props;
  // eslint-disable-next-line no-unused-vars
  const { user } = useContext(UserContext);
  console.log(user);
  if (protectedRoute && !user?.isAuth) {
    return <Redirect to={{ pathname: '/login' }} />;
  }

  return (
    <Route
      {...rest}
      render={(_props) => (
        <Layout title={text} {..._props}>
          <Component {..._props} />
        </Layout>
      )}
    />
  );
}

export default App;

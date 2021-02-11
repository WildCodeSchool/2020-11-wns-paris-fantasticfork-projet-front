import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
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
    authorization: localStorage.getItem('token') || '',
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

function RouteWrapper(props) {
  const { component: Component, layout: Layout, text, protectedRoute, ...rest } = props;
  const token = localStorage.getItem('token');
  if (protectedRoute && !token) {
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

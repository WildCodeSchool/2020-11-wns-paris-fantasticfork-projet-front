import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Authenticated, Visitor } from './Layouts';
import RegisterContainer from './Components/Pages/Register/RegisterContainer';
import LoginContainer from './Components/Pages/Login/LoginContainer';
import TopicContainer from './Components/Pages/Forum/Topic/TopicContainer';
import Forum from './Components/Pages/Forum/Forum';
import './App.css';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <RouteWrapper exact path='/' component={Forum} layout={Visitor} />
        <RouteWrapper exact path='/home' component={RegisterContainer} layout={Authenticated} text='home' />
        <RouteWrapper exact path='/register' component={RegisterContainer} layout={Visitor} />
        <RouteWrapper exact path='/login' component={LoginContainer} layout={Visitor} />
        <RouteWrapper exact path='/topics' history component={Forum} layout={Authenticated} text='Forum' />
        <RouteWrapper path='/topics/:id' component={TopicContainer} layout={Authenticated} />
      </Switch>
    </ApolloProvider>
  );
}

function RouteWrapper({ component: Component, layout: Layout, text, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout title={text} {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default App;

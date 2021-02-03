import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Authenticated, Visitor } from './Layouts';
import Register from './Components/Auth/Register';
import ArticleContainer from './Components/Forum/ArticleContainer';
import ArticleList from './Components/Forum/ArticleList';
import './App.css';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <RouteWrapper exact path='/' component={ArticleList} layout={Authenticated} />
        <RouteWrapper exact path='/register' component={Register} layout={Visitor} />
        <RouteWrapper exact path='/topics' history component={ArticleList} layout={Authenticated} />
        <RouteWrapper path='/topics/:id' component={ArticleContainer} layout={Authenticated} />
      </Switch>
    </ApolloProvider>
  );
}

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default App;

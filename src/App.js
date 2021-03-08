import React, { useState, useContext, useMemo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserContext from './Contexts/UserContext';
import { Authenticated, Visitor } from './Layouts';
import LandingPage from './Components/Pages/LandingPage/LandingPage';
import Home from './Components/Pages/Home/Home';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import MyClass from './Components/Pages/MyClass/MyClass';
import Daily from './Components/Pages/Daily/Daily';
import RegisterContainer from './Components/Pages/Register/RegisterContainer';
import LoginContainer from './Components/Pages/Login/LoginContainer';
import TopicContainer from './Components/Pages/Forum/Topic/TopicContainer';
import ForumContainer from './Components/Pages/Forum/ForumContainer';
import './App.css';

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
    <UserContext.Provider value={userValue}>
      <Switch>
        <RouteWrapper exact path='/' component={LandingPage} layout={Visitor} />
        <RouteWrapper exact path='/home' component={Home} protectedRoute layout={Authenticated} text='Home' />
        <RouteWrapper exact path='/register' component={RegisterContainer} layout={Visitor} />
        <RouteWrapper exact path='/login' component={LoginContainer} layout={Visitor} />
        <RouteWrapper
          exact
          path='/dashboard'
          component={Dashboard}
          protectedRoute
          layout={Authenticated}
          text='Dashboard'
        />
        <RouteWrapper
          exact
          path='/classroom'
          component={MyClass}
          protectedRoute
          layout={Authenticated}
          text='My Class'
        />
        <RouteWrapper exact path='/daily' component={Daily} protectedRoute layout={Authenticated} text='Daily' />
        <RouteWrapper exact path='/topics' history component={ForumContainer} layout={Authenticated} text='Forum' />
        <RouteWrapper path='/topics/:id' component={TopicContainer} protectedRoute layout={Authenticated} />
      </Switch>
    </UserContext.Provider>
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

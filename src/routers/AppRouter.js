import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Home from 'views/home/Home';
import SignUp from 'views/auth/SignUp';
import SignIn from 'views/auth/SignIn';
import Navigation from 'components/common/Navigation';

const AppRouter = () => (
  <BrowserRouter>
    <>
      <Navigation />
      <Switch>
        <PrivateRoute 
            component={Home}
            exact
            path="/"
        />
        <PublicRoute 
            component={SignUp}
            exact  
            path="/signup" 
        />
        <PublicRoute 
            component={SignIn}
            exact  
            path="/signin" 
        />
      </Switch>
    </>
  </BrowserRouter>
);

export default AppRouter;

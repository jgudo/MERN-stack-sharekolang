import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import withContext from 'components/hoc/withContext';

const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
  return <Route {...rest} component={(props) => {
    return isAuth ? <Component {...props} /> : <Redirect to="/signup" />
  }}/>
};

const mapStateToProps = ({ auth }) => ({ 
  isAuth: !!auth.token 
});

export default withContext(mapStateToProps)(PrivateRoute);

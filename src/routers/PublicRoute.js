import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import withContext from 'components/hoc/withContext';

const PublicRoute = ({ isAuth, component: Component, ...rest }) => {
  return <Route {...rest} component={(props) => {
    return isAuth ? <Redirect to="/" /> : <Component {...props} />
  }}/>
};

const mapStateToProps = ({ auth }) => ({ 
  isAuth: !!auth.token  
});

export default withContext(mapStateToProps)(PublicRoute);

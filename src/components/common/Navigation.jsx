import React from 'react';
import { NavLink } from 'react-router-dom';
import withContext from '../hoc/withContext';

const Navigation = ({ action, isAuth }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="is-active">Home</NavLink>
        </li>
        {isAuth ? (
          <li>
            <button onClick={action.authAction.signout}>Sign Out</button>
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/signup" activeClassName="is-active">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/signin" activeClassName="is-active">Sign In</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({
  isAuth: !!auth.token
});

export default withContext(mapStateToProps)(Navigation);

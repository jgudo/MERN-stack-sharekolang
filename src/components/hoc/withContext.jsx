import React, { useContext } from 'react';
import { AppContext } from '../../context/context';

const withContext = mapStateToProps => Component => (props) => {
  const store = useContext(AppContext);
  const state = mapStateToProps ? mapStateToProps(store.state) : {};
  
  return (
    <Component {...props} {...state} action={store.action} />
  );
};

export default withContext;

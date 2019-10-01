import React, { useReducer, useEffect, useState } from 'react';
import { useRecipeActions } from './actions/recipeActions';
import { useAuthActions } from './actions/authActions';
import recipeReducer from './reducer/recipeReducer';
import authReducer from './reducer/authReducer';

export const AppContext = React.createContext();

const Context = (props) => {
  const [recipes, recipeDispatch] = useReducer(recipeReducer, []);
  const [auth, authDispatch] = useReducer(authReducer, {});
  const [storageRehydrated, rehydrateStorage] = useState(false);
  const recipeAction = useRecipeActions(recipeDispatch, auth);
  const authAction = useAuthActions(authDispatch, auth);
  const storageName = 'gagongStorage';

  useEffect(() => {
    if (localStorage.getItem(storageName)) {
      const storage = JSON.parse(localStorage.getItem(storageName));
      
      authDispatch({
        type: 'SET_AUTH_TOKEN',
        payload: storage.token
      });
    } else {
      localStorage.setItem(storageName, JSON.stringify({ token: '' }));
    }

    rehydrateStorage(true);
  }, []);

  useEffect(() => {
    if (localStorage.getItem(storageName)) {
      localStorage.setItem(storageName, JSON.stringify({ token: auth.token }));
    } 
  }, [auth.token]);

  const Loader = () => (
    <h1>Loading ...</h1>
  );

  return (
    <AppContext.Provider value={{ 
      state: {
        recipes,
        auth
      },
      action: {
        recipeAction,
        authAction
      }
    }}>
      {storageRehydrated ? props.children : <Loader />}
    </AppContext.Provider>
  );
};

export default Context;

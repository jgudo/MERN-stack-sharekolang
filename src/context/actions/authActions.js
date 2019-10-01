import { signup, signin, signout } from 'api/api';

export const useAuthActions = (dispatch, auth) => ({
  signup: async (credentials) => {
    try {
      const user = await signup(credentials);

      dispatch({
        type: 'SIGNUP',
        payload: user.data
      });
      console.log('SIGNUP SUCCESS: ', user.data);
      return Promise.resolve(user);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  },
  signin: async (credentials) => {
    try {
      const user = await signin(credentials);

      dispatch({
        type: 'SIGNIN',
        payload: user.data
      });
    } catch (e) {
      return Promise.reject(e);
    }
  },
  signout: async () => {
    try {
      await signout(auth.token);

      dispatch({ type: 'SIGNOUT' });
    } catch (e) {
      console.log(e);
    }
  }
});

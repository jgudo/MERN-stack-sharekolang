export default (state = {
  token: '',
  user: {}
}, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return { 
        ...state, 
        user: action.payload.user,
        token: action.payload.token 
      };
    case 'SIGNIN':
      return { 
        ...state, 
        user: action.payload.user,
        token: action.payload.token 
      };
    case 'SET_AUTH_TOKEN':
      return { ...state, token: action.payload };
    case 'SIGNOUT':
      return {};
    default:
      return state;
  }
};

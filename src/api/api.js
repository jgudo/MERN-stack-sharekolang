import axios from 'axios';
const api = process.env.API_ENDPOINT || 'http://localhost:3000/api/v1';

axios.defaults.baseURL = api;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.response.use((response) => response, (error) => {
  return Promise.reject(error.response.data || error);
});

axios.interceptors.request.use((config) => {  
  console.log(config); 
  return config
}, (error) => {
  return Promise.reject(error.response.data || error);
});

export const signup = (credentials) => {
  return axios.post('/user', credentials);
};

export const signin = (credentials) => {
  return axios.post('/user/login', credentials);
};

export const signout = (token) => {
  return axios({
    method: 'DELETE',
    url: '/user/token',
    headers: {
      'x-auth': token
    }
  });
};

export const addRecipe = (recipe, token) => {
  return axios({
    method: 'POST',
    url: '/recipe',
    data: recipe,
    headers: {
      'x-auth': token
    }
  });
};

export const getAllRecipes = () => {
  return axios.get('/recipes/all')
}
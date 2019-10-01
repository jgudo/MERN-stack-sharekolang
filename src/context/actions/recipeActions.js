import { addRecipe } from 'api/api';

export const useRecipeActions = (dispatch, auth) => ({
  addRecipe: async (recipe) => {
    try {
      const newRecipe = await addRecipe(recipe, auth.token);

      dispatch({
        type: 'ADD_RECIPE',
        payload: newRecipe.data
      });
      console.log('SUCCESS: ', newRecipe.data);
    } catch (e) {
      console.log(e);
      return Promise.reject();
    }
  },
  getAllRecipes: async () => {

  }
});

// pagination with mongo
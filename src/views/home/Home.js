import React from 'react';
import withContext from 'components/hoc/withContext';

const Home = ({ action }) => (
  <div>
    <h1>HOME</h1>
    <button onClick={() => action.recipeAction.addRecipe()}>Fetch</button>
  </div>
);

export default withContext()(Home);

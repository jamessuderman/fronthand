import React from 'react';
import Recipecard from '../UI/RecipeCard/RecipeCard';

import './RecipeList.css';

const RecipeList = (props) => {
  const list = props.list.map(recipe => {
    return <Recipecard key={recipe.id} recipeName={recipe.name} recipeCuisine={recipe.cuisine} recipeStars={recipe.stars}/>;
  });

  return(
    <div className={"content grid"}>
      {list}
    </div>
  );
};

export default RecipeList;
import React from 'react';

import './RecipeCard.css';

const Recipecard = (props) => {
  return(
    <div className="recipecard">
      <img />
      <h4>{props.recipeName}</h4>
      <p>{props.recipeCuisine}</p>
      <p>Stars: {props.recipeStars}</p>
    </div>
  );
};

export default Recipecard;
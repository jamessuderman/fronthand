import React, { Component } from 'react';
import axios from 'axios';
import RecipeList from '../../components/RecipeList/RecipeList';
import Recipeform from "./Recipeform/Recipeform";

import './Recipes.css';

class Recipes extends Component {
  state = {
    mode: 'list',
    buttonText: 'Add a Recipe',
    recipeList: []
  };

  componentDidMount() {
    axios.get('http://localhost:8080/recipes')
      .then(res => {
        console.log(res)
        this.setState({recipeList: res.data});
      });
  }

  render() {

    const addRecipeClickHandler = () => {
      if(this.state.mode === 'list') {
        this.setState({mode: 'add', buttonText: 'Save Recipe'});
      } else {
        this.setState({mode: 'list', buttonText: 'Add a Recipe'});
      }
    };

    let mode = <RecipeList list={this.state.recipeList}/>;

    if(this.state.mode === 'add') {
      mode = <Recipeform/>;
    } else {
      mode = <RecipeList list={this.state.recipeList}/>;
    }

    return (
      <div className='Recipes'>
        <button className="btn btn-light" onClick={addRecipeClickHandler}>{this.state.buttonText}</button>
        {mode}
      </div>
    );
  }
}

export default Recipes;
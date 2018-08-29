import React, { Component } from 'react';

import './Recipeform.css';

class Recipeform extends Component {
  render() {
    return (
      <div className="Recipeform">
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="recipeName">Recipe Name</label>
              <input type="text" className="form-control" id="recipeName"/>
            </div>
            <div className="form-group">
              <label htmlFor="cuisineName">Cuisine</label>
              <input type="text" className="form-control" id="cuisineName"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Recipeform;
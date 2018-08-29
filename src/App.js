import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Toolbar from './components/Toolbar/Toolbar';
import Recipes from "./containers/Recipes/Recipes";

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Toolbar className={"header"}/>
        <Sidebar className={"sidebar"}/>
        <div className={"content"}>
          <Route path="/application/home" component={() => <p>Home</p>}/>
          <Route path="/application/recipes" component={Recipes}/>
          <Route path="/application/chat" component={() => <p>Chat</p>}/>
          <Route path="/application/contacts" component={() => <p>Contacts</p>}/>
          <Route path="/application/shopping" component={() => <p>Shopping</p>}/>
          <Route path="/application/pinterest" component={() => <p>Pinterest</p>}/>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../../App';
import Login from '../../containers/Login/Login';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Login}/>
          <Route path={'/application'} component={App}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
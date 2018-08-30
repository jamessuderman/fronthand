import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SimpleLineIcon from 'react-simple-line-icons';

import './Login.css';

class Login extends Component {
  render() {
    const form = (<div className="formGrid center"><span>username</span><input type="text"/></div>);

    return (
      <div className="Login">
        <div className="logoBox center"><SimpleLineIcon name={"chart"} size={"Large"}/></div>
        <div className="formBox center loginGrid">
          <div className="btn-group btn-group-toggle loginFormButtonGroup" data-toggle="buttons">
            <label className="btn btn-dark active">
              <input type="radio" name="options" id="signIn" autoComplete="off" checked/>
              <span>Sign In</span>
            </label>
            <label className="btn btn-outline-dark">
              <input type="radio" name="options" id="signUp" autoComplete="off"/>
              <span>Sign Up</span>
            </label>
          </div>
          {form}
          <Link to={'/application/home'}><SimpleLineIcon name={"menu"} size={"Large"}/></Link>
        </div>
      </div>
    );
  }
}

export default Login;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SimpleLineIcon from 'react-simple-line-icons';

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="logoBox center"><SimpleLineIcon name={"chart"} size={"Large"}/></div>
        <div className="formBox center"><Link to={'/application'}><SimpleLineIcon name={"menu"} size={"Large"}/></Link></div>
      </div>
    );
  }
}

export default Login;
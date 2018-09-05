import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SimpleLineIcon from 'react-simple-line-icons';

import './Login.css';

class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
        signUpStyle: "btn btn-outline-dark shadow-none headerButton",
        signInStyle: "btn btn-outline-dark shadow-none headerButton active",
        Member: true
      };
  }

  toggleActiveClass = (e) => {
    const button = e.currentTarget.textContent;
    if(button === "Members") {
      this.setState({signInStyle: "btn btn-outline-dark shadow-none headerButton active",
                      signUpStyle: "btn btn-outline-dark shadow-none headerButton",
                      member: true});
    } else {
      this.setState({signUpStyle: "btn btn-outline-dark shadow-none headerButton active",
                      signInStyle: "btn btn-outline-dark shadow-none headerButton",
                      member: false});
    }
  };

  render() {
    let form = (<div className="formGrid center">
                    <div className="center">
                      <div className="row inputRow">
                        <span className="darkText">username:</span><input type="text"/>
                      </div>
                    </div>
                    <div className="center">
                      <div className="row inputRow">
                        <span className="darkText">password:</span><input type="text"/>
                      </div>
                    </div>
                    <Link className="center" to={'/application/home'}><button className="btn btn-outline-dark signInButton">Sign In</button></Link>
                  </div>);

    if(this.state.member === false) {
      form = (<div className="formGrid center">
        <div className="center">
          <div className="row inputRow">
            <span className="darkText">username:</span><input type="text"/>
          </div>
        </div>
        <div className="center">
          <div className="row inputRow">
            <span className="darkText">password:</span><input type="text"/>
          </div>
        </div>
        <Link className="center" to={'/application/home'}><button className="btn btn-outline-dark signInButton">Sign Up</button></Link>
      </div>);
    }

    return (
      <div className="Login">
        <div className="logoBox center"><SimpleLineIcon name={"notebook"} size={"Large"}/></div>
        <div className="formBox loginGrid center ">
          <div className="btn-group btn-group-toggle loginFormButtonGroup" data-toggle="buttons">
            <button className={this.state.signInStyle} onClick={this.toggleActiveClass}>Members</button>
            <button className={this.state.signUpStyle} onClick={this.toggleActiveClass}>Register</button>
          </div>
          {form}
        </div>
      </div>
    );
  }
}

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

const Sidebar = (props) => {
  return(
    <div className="sidedrawer">
      <div className="logobar">
        <Link to="/"><i className="fa fa-cutlery"/><span>On Hand</span></Link>
      </div>

      <div className="profile">
        <div className="profile_pic">
          <img src={require('../../assets/images/profile.JPG')} alt="profile"/>
        </div>
      </div>

      <ul>
        <Link to='/application/home'><li className="listitem"><i className="fa fa-home"/>Home</li></Link>
        <Link to='/application/recipes'><li className="listitem"><i className="fa fa-book"/>Recipes</li></Link>
        <Link to='/application/chat'><li className="listitem"><i className="fa fa-comments"/>Chat</li></Link>
        <Link to='/application/contacts'><li className="listitem"><i className="fa fa-users"/>Contacts</li></Link>
        <Link to='/application/shopping'><li className="listitem"><i className="fa fa-shopping-cart"/>Shopping</li></Link>
        <Link to='/application/pinterest'><li className="listitem"><i className="fa fa-pinterest"/>Pinterest</li></Link>
      </ul>
    </div>
  );
};

export default Sidebar;
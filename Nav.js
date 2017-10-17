import React from "react";
import './Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#search">Search</a></li>
  <li><a href="#contact">Contact</a></li>
  <li id = "Title">Mr Maille</li>
  <li><a href="#Login" className="active">Login</a></li>  
 </ul>
      </div>
    );
  }
}

export default Nav;
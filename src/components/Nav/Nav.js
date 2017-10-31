import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    console.log("hi");
  }
  render() {
    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <header>Mr Maille</header>
        <a href="#login" className="active" >Login</a>
      </div>
    );
  }
}

export default Nav;
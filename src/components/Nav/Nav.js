import React from "react";
import './Nav.css';

const Nav = () =>
<div>
<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#search">Search</a></li>
  <li><a href="#contact">Contact</a></li>
  <li id = "Title">Mr Maille</li>
  <li><a href="#Login" class = "active">Login</a></li>  
 </ul>
</div>

export default Nav;
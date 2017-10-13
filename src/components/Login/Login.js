import React from "react";
import './Login.css';

const Login = () =>
<div>
<form id = "form">
    <input type="text" placeholder="First name" ></input>
    <br></br>
    <br></br>
    <input type="text" placeholder="Last name"></input>
    <br></br>
    <br></br>
    <button id = "login">Login</button>
</form>
</div>

export default Login;
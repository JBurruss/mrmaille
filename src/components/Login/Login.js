import React from "react";
import './Login.css';

const Login = () =>
<div>
<form id = "form">
    <input type="text" placeholder="First name" id= "input1" ></input>
    <br></br>
    <br></br>
    <input type="text" placeholder="Last name" id= "input2"></input>
    <br></br>
    <br></br>
    <button id = "login">Login</button>
</form>
</div>

export default Login;
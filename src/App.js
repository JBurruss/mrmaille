import React from "react";

import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Nav from './components/Nav/Nav';

class App extends React.Component {
  state = {
    loggedIn: false
  }

  login = () => {
    console.log("click");
    this.setState({loggedIn: true});
  }

  render(){
    return(
      <div>    
      <Nav /> 
      {!this.state.loggedIn ? (<div><Login click={this.login}/>
      <Signup/></div>): ""}
      {/* <Login />
      <Signup/> */}
    </div>
    );
  }
 
  }
export default App;
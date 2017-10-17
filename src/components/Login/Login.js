import React from "react";
import './Login.css';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          firstName:"",
          lastName:""

      }
      this.formSubmit = this.formSubmit.bind(this);
      this.handleFirstName = this.handleFirstName.bind(this);
      this.handleLastName = this.handleLastName.bind(this);
      
    }
    formSubmit(e) {
        e.preventDefault();
        console.log("is working", this.state.firstName);
        console.log("is working", this.state.lastName);
        
    }
    handleFirstName(e){
        this.setState({firstName: e.target.value});
        console.log(e.target.value);
    }
    handleLastName(e){
        this.setState({lastName: e.target.value});
        console.log(e.target.value);
    }
    render() {
// this.formSubmit();
      
      return (
        <div>
        <form id = "form">
            <input type="text" placeholder="First name" id= "input1" onChange={this.handleFirstName} ></input>
            <br></br>
            <br></br>
            <input type="text" placeholder="Last name" id= "input2" onChange={this.handleLastName}></input>
            <br></br>
            <br></br>
            <button id = "login" onClick={this.formSubmit}>Login</button>
        </form>
        </div>
      );
    }
  }
  
  export default Login;
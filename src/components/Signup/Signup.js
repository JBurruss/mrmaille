import React from "react";
import './Signup.css';

class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          firstName:"",
          lastName:"",
          email:""

      }
      this.formSubmit = this.formSubmit.bind(this);
      this.handleFirstName = this.handleFirstName.bind(this);
      this.handleLastName = this.handleLastName.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      
    }
    formSubmit(e) {
        e.preventDefault();
        console.log("is working", this.state.firstName);
        console.log("is working", this.state.lastName);
        console.log("is working", this.state.email);
        
    }
    handleFirstName(e){
        this.setState({firstName: e.target.value});
        console.log(e.target.value);
    }
    handleLastName(e){
        this.setState({lastName: e.target.value});
        console.log(e.target.value);
    }
    handleEmail(e){
        this.setState({email: e.target.value});
        console.log(e.target.value);
    }
    render() {
// this.formSubmit();
      
      return (
        <div>
        <form id = "form1">
            <input type="text" placeholder="User Name" id= "input1" onChange={this.handleFirstName} ></input>
            <br></br>
            <br></br>
            <input type="password" placeholder="Password" id= "input2" onChange={this.handleLastName}></input>
            <br></br>
            <br></br>
            <input type="text" placeholder="Email" id= "input3" onChange={this.handleEmail}></input>
            <br></br>
            <br></br>
            <button id = "signup" onClick={this.formSubmit}>Sign up</button>
        </form>
        </div>
      );
    }
  }
  
  export default Signup;

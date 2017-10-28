import React from "react";
import './Nav.css';
import '../Signup/Signup';
import '../Login/Login';

class Nav extends React.Component {
  constructor(props) {
    super(props);

  //   this.state = {
  //     isHidden: true
  //   }
  // }
  // toggleHidden () {
  //   this.setState({
  //     isHidden: !this.state.isHidden
  //   })
  // }
  }
  render() {
    return (
      <div className="navbar">
      <a href="#home">Home</a>
      <a href="#search">Search</a>
      <header>Mr Maille</header>
      <a href="#contact">Contact</a>
      <a href="#Cart" className="active" >Cart [0]</a>
    </div>      
    );
  }
}

export default Nav;

// onClick={this.toggleHidden.bind(this)}
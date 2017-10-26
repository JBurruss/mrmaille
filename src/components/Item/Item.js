import React from "react";
import './Item.css';
class Item extends React.Component {
    constructor(props) {
      super(props);
  
   
    }
    render() {
      return (
        <div>
        <div class="container">
          <h4><b>Hauberk</b></h4> 
          <p>$89.99</p>
          <p>25 Left!</p> 
          </div>
        
        </div>
    );
}
}

export default Item;
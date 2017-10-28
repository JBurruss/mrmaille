import React from "react";
import './Item.css';
class Item extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        cart:"",
        click: props.click

    }
    this.formSubmit = this.formSubmit.bind(this);
    this.handleCart = this.handleCart.bind(this);
   
    }
    formSubmit(e) {
      e.preventDefault();
      console.log("potato");
      console.log("is working", this.state.firstName);
      console.log("is working", this.state.lastName);
      this.state.click();
      
  }
  handleCart(e){
      this.setState({firstName: e.target.value});
      console.log(e.target.value);
  }
    render() {
      return (
        <div>
        <div class="container">
        <img src="img/Hauberk.jpg" />
        <h1>Chain Hauberk</h1>
        <p>The hauberk is typically a type of mail armour 
          which is constructed of interlocking loops of metal woven
           into a tunic or shirt. The sleeves sometimes only went to the elbow, 
           but often were full arm length, with some covering the hands with a 
           supple glove leather face on the palm of the hand, or even full mail 
           gloves. It was usually thigh or knee length, with a split in the front 
           and back to the groin so the wearer could ride a horse.</p>
             
           <button id = "cart" onClick={this.formSubmit}>Add to cart</button>                
          </div>

          <div class="container">
        <img src="img/Hauberk.jpg" />
        <h1>Chain Hauberk</h1>
        <p>The hauberk is typically a type of mail armour 
          which is constructed of interlocking loops of metal woven
           into a tunic or shirt. The sleeves sometimes only went to the elbow, 
           but often were full arm length, with some covering the hands with a 
           supple glove leather face on the palm of the hand, or even full mail 
           gloves. It was usually thigh or knee length, with a split in the front 
           and back to the groin so the wearer could ride a horse.</p>
             
           <button id = "cart" onClick={this.formSubmit}>Add to cart</button>                
          </div>

          <div class="container">
        <img src="img/Hauberk.jpg" />
        <h1>Chain Hauberk</h1>
        <p>The hauberk is typically a type of mail armour 
          which is constructed of interlocking loops of metal woven
           into a tunic or shirt. The sleeves sometimes only went to the elbow, 
           but often were full arm length, with some covering the hands with a 
           supple glove leather face on the palm of the hand, or even full mail 
           gloves. It was usually thigh or knee length, with a split in the front 
           and back to the groin so the wearer could ride a horse.</p>
             
           <button id = "cart" onClick={this.formSubmit}>Add to cart</button>                
          </div>

          <div class="container">
        <img src="img/Hauberk.jpg" />
        <h1>Chain Hauberk</h1>
        <p>The hauberk is typically a type of mail armour 
          which is constructed of interlocking loops of metal woven
           into a tunic or shirt. The sleeves sometimes only went to the elbow, 
           but often were full arm length, with some covering the hands with a 
           supple glove leather face on the palm of the hand, or even full mail 
           gloves. It was usually thigh or knee length, with a split in the front 
           and back to the groin so the wearer could ride a horse.</p>
             
           <button id = "cart" onClick={this.formSubmit}>Add to cart</button>                
          </div>

          <div class="container">
        <img src="img/Hauberk.jpg" />
        <h1>Chain Hauberk</h1>
        <p>The hauberk is typically a type of mail armour 
          which is constructed of interlocking loops of metal woven
           into a tunic or shirt. The sleeves sometimes only went to the elbow, 
           but often were full arm length, with some covering the hands with a 
           supple glove leather face on the palm of the hand, or even full mail 
           gloves. It was usually thigh or knee length, with a split in the front 
           and back to the groin so the wearer could ride a horse.</p>
             
           <button id = "cart" onClick={this.formSubmit}>Add to cart</button>                
          </div>

          <div class="container">
        <img src="img/Hauberk.jpg" />
        <h1>Chain Hauberk</h1>
        <p>The hauberk is typically a type of mail armour 
          which is constructed of interlocking loops of metal woven
           into a tunic or shirt. The sleeves sometimes only went to the elbow, 
           but often were full arm length, with some covering the hands with a 
           supple glove leather face on the palm of the hand, or even full mail 
           gloves. It was usually thigh or knee length, with a split in the front 
           and back to the groin so the wearer could ride a horse.</p>
             
           <button id = "cart" onClick={this.formSubmit}>Add to cart</button>                
          </div>

          <div class="container">
        <img src="img/Hauberk.jpg" />
        <h1>Chain Hauberk</h1>
        <p>The hauberk is typically a type of mail armour 
          which is constructed of interlocking loops of metal woven
           into a tunic or shirt. The sleeves sometimes only went to the elbow, 
           but often were full arm length, with some covering the hands with a 
           supple glove leather face on the palm of the hand, or even full mail 
           gloves. It was usually thigh or knee length, with a split in the front 
           and back to the groin so the wearer could ride a horse.</p>
             
           <button id = "cart" onClick={this.formSubmit}>Add to cart</button>                
          </div>

          <div class="container">
        <img src="img/Hauberk.jpg" />
        <h1>Chain Hauberk</h1>
        <p>The hauberk is typically a type of mail armour 
          which is constructed of interlocking loops of metal woven
           into a tunic or shirt. The sleeves sometimes only went to the elbow, 
           but often were full arm length, with some covering the hands with a 
           supple glove leather face on the palm of the hand, or even full mail 
           gloves. It was usually thigh or knee length, with a split in the front 
           and back to the groin so the wearer could ride a horse.</p>
             
           <button id = "cart" onClick={this.formSubmit}>Add to cart</button>                
          </div>

          <div class="container">
        <img src="img/Hauberk.jpg" />
        <h1>Chain Hauberk</h1>
        <p>The hauberk is typically a type of mail armour 
          which is constructed of interlocking loops of metal woven
           into a tunic or shirt. The sleeves sometimes only went to the elbow, 
           but often were full arm length, with some covering the hands with a 
           supple glove leather face on the palm of the hand, or even full mail 
           gloves. It was usually thigh or knee length, with a split in the front 
           and back to the groin so the wearer could ride a horse.</p>
             
           <button id = "cart" onClick={this.formSubmit}>Add to cart</button>                
          </div>
          
        </div>
    );
}
}

export default Item;
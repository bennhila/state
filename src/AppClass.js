import React, { Component } from 'react'
import styleCss from './App.css'
export default class AppClass extends Component {
    constructor(props){
    super (props);
    this.state = {
        name:'',
        firstName:'',
        showInput:false,
        age:'',
        work:'',
        closeInput:false,
    };
}
closeInput =()=>{
  this.setState({
    closeInput : ! this.state.closeInput,
  });
}
showInput =()=>{
    this.setState({
        showInput : ! this.state.showInput,
    });
}
handeleChange =(e)=>{
 this.setState({
   [e.target.id]:e.target.value ,
 });
};
  render() {
    console.log(this.state)
    return (
        
      <div>
            <button onClick={this.showInput}> tasjil</button><br/>
          { this.state.showInput ?  <input type="text" placeholder='name'id='name' onChange={this.handeleChange}/>: null}<br/>
          { this.state.showInput ?  <input type= "text" placeholder='first name'id='firstName'onChange={this.handeleChange}/>: null}<br/>
          { this.state.showInput ?  <input type= "text" placeholder='age'id='age'onChange={this.handeleChange}/>: null}<br/>
          { this.state.showInput ?  <input type= "text" placeholder='work or study'id='work' onChange={this.handeleChange}/>: null}<br/> 
          { this.state.showInput ? <button  onClick={this.showInput} onClike={this.closeInput}  >takid </button>: null}
          <p></p>
          {this.state.closeInput ? <img src='/user.png' alt='picUser'/>:null}
          {this.state.closeInput ? <h3>{this.state.name}  {this.state.firstName} </h3> :null} 
           {this.state.closeInput ? <p>my age is {this.state.age} and study in {this.state.work}</p> :null} 
       </div>
    )
  }
}
  


import React, { Component } from 'react'
class CBCStateEX extends Component{
  constructor(){
    super();
    this.state={
      users:["mahi","211","eshwar" ,"akhil","kavya"],
      num:100
    };
  }

changeNumber=()=>{
  this.setState({num:200})
}
render() {
  console.log(this);
  return(
    <div>
      {
        this.state.users.map((user , i)=>{
          return <li key={i}>{user}</li>
        })
      }
      <h1>{this.state.num}</h1>
      <button onClick={this.changeNumber}>Change number</button>
    </div>
  )
}
}
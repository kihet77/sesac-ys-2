import { Component } from "react";

class HandlerEx extends Component{

  state={
    text: "Hello World!"
  }

  onClickHandler = ()=>{
    this.setState({text:"Goodbye World!"})
  }

  render(){
    return(
      <>
        <h1>{this.state.text}</h1>
        <button onClick={this.onClickHandler}>Click!!</button>
      </>
    )
  }
}

export default HandlerEx
import { Component } from "react";

class LifeCycleClass extends Component {
  state = { text: "" }

  componentDidMount(){
    console.log("ClassComponent: 🅾️mount ")
  }

  componentDidUpdate(prevProps, prevState){
    console.log("ClassComponent: ✅update ")

    if(prevState.text != this.state.text){
      console.log("ClassComponent: ✅textupdate ")
    }
  }

  componentWillUnmount(){
    console.log("ClassComponent: ❌unmount ")
  }


  render() {
    return (
      <>
        <h2>클래스형 컴포넌트 LifeCycle 공부</h2>
        <div>number: {this.props.number}</div>
        <input
          type="text"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />
      </>
    );
  }
}

export default LifeCycleClass
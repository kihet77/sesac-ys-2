import { Component } from "react"

class EventClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: "hello"
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }



  handleOnClick(){
    this.setState({msg:"bye"})
  }//함수 선언문에서의 동적바인딩을 하므로 함수가 사용될때 this결정되므로 constructor에서 this를 bind해줌

  handleOnClickHello = () =>{
    this.setState({msg:"Hello"})
  }//함수표현문은 함수가 선언될때 this를 결정


  render() {
    return (
      <>
        <h3>클래스형 컴포넌트 event Handling 공부</h3>
        {this.state.msg}
        <button onClick={this.handleOnClick}>잘가</button>
        <button onClick={this.handleOnClickHello}>안녕</button>

        <h3>React가 만든 합성객체</h3>
        <button onClick={(e)=>{
          console.log(e)
        }}>event</button>
      </>
    )
  }
}

export default EventClass
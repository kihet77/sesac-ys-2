import { Component } from "react";

// class StateClass extends Component {
//   // 01옛날방식
//   // constructor(props) {
//   //   super(props) // this객체를 사용가능하게
//   //   this.state = {
//   //     number: 0,
//   //     text: "hellooooo"
//   //   }
//   // }

//   // 02최근방식
//   state = {
//     number: 0,
//     text: "hellooooo"
//   }


//   render() {
//     return (
//       <>
//         <div>props 예시 : {this.props.name}</div>
//         <h3>클래스형 컴포넌트 공부</h3>
//         <div>
//           nameber stage value : {this.state.number}<br />
//           <button onClick={() => {
//             // this.setState({ number: this.state.number + 1 })
//             this.setState((prevState) => {
//               return { number: prevState.number + 1 }
//             })
//             this.setState((prevState) => ({ number: prevState.number + 1 }))
//             //this.setState에서 콜백함수를 활용해 인자로 이전 값을 지정해주고 return하면 순서대로 중복으로 작업 가능
//           }}>setState + 2</button>
//         </div>
//       </>
//     )
//   }
// }

// 실슬
class StateClass extends Component {

  state={
    upNumber:0,
    downNumber:0,
  }

  render(){

    return(
      <>
        <div>
        <button onClick={()=>{
            this.setState({upNumber:this.state.upNumber + 2})
          }}>2씩 증가</button>{"   "}
          <span>{this.state.upNumber}</span> 
        </div>
        <div>
        <button onClick={()=>{
            this.setState((prevState) => ({downNumber:this.state.downNumber - 1}))
          }}>1씩 감소</button>{"   "}
          <span>{this.state.downNumber}</span> 
        </div>
      </>
    )
  }
}

export default StateClass
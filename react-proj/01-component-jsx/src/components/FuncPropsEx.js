import PropTypes from "prop-types"

// function FuncPropsEx({ title, content,number }) {
//   return (
//     <>
//       <div>함수형 컴포넌트 이용해서 Props 사용하기</div>
//       <h3>{title}, {content}, number : {number}</h3>
//     </>
//   )
// }
// FuncPropsEx.defaultProps = {
//   title: "코딩온"
// }

// FuncPropsEx.propTypes = {
//   title: PropTypes.string,
//   content: PropTypes.string.isRequired,
//   number: PropTypes.number,
// }

// import { Component } from "react";
// import PropTypes from "prop-types";

// class ClassPropsEx extends Component {
//   render() {
//     return (
//       <>
//         <div>클래스형 컴포넌트를 이용 ( Props )</div>
//         <div>
//           제목은 {this.props.title}, 내용은 {this.props.content}, 숫자는:{" "}
//           {this.props.number}
//         </div>
//       </>
//     );
//   }

//   static defaultProps = {
//     name: "코딩온",
//   };

//   static propTypes = {
//     title: PropTypes.string,
//     content: PropTypes.string.isRequired,
//     number: PropTypes.number,
//   };
// }

// ClassPropsEx.defaultProps = {
//   name: "코딩온",
// };

// ClassPropsEx.propTypes = {
//   title: PropTypes.string,
//   content: PropTypes.string.isRequired,
//   number: PropTypes.number,
// };

function FuncPropsEx(props){
  return(
    <div style={{color:"red"}}>좋아하는 음식은 {props.food}</div>
  )
}

export default FuncPropsEx
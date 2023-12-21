import { useState } from "react"


// function StateFunc() {
//   const [number, setNumber] = useState(0)

//   return (
//     <>
//       <h3>함수형 컴포넌트 state공부</h3>
//       <div>
//         number state value {number}

//         <button
//           onClick={() => {
//             // number(number + 1)
//             setNumber((prevNumber)=>prevNumber+1)
//           }}>  +1
//         </button>
//       </div>
//     </>
//   )
// }

function StateFunc() {
  const [number, setNumber] = useState(0)
  function increase(){
    setNumber((prevNumber)=>prevNumber+1)
  }
  function decrease(){
    setNumber((prevNumber)=>prevNumber-2)
  }

  return(
    <>
      <div>
        <h3>{number}</h3>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-2</button>
      </div>
    </>
  )
}


export default StateFunc
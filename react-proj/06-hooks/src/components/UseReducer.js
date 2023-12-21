import { useReducer, useState, useCallback } from "react"


const initialValue = { value: 0 }
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'PLUS':
      return { value: prevState.value + 1 }
    case 'MINUS':
      return { value: prevState.value - 1 }
    case 'MULTIFLY':
      return { value: prevState.value * action.number }
    case 'DIVISION':
      return { value: prevState.value / action.number }
    case 'RESET':
      return initialValue
    default:
      return { value: prevState.value }
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialValue)
  const [number, setNumber] = useState(0)
  const [divNumber, setDivNumber] = useState(0)

  const handleChangeNumber = useCallback((e) => setNumber(e.target.value), [])
  const handleDivNumber = useCallback((e) => setDivNumber(e.target.value), [])
  const plus = () => dispatch({ type: 'PLUS' })
  const minus = () => dispatch({ type: 'MINUS' })
  const reset = () => dispatch({ type: 'RESET' })
  const multifly = () => dispatch({ type: 'MULTIFLY', number: number })
  const division = () => dispatch({ type: 'DIVISION', number: number })

  // const [state, setState] = useState(initialValue)
  // const plus = ()=>{setState({value : state.value+1})}
  // const minus = ()=>{setState({value : state.value+1})}
  // const reset = ()=>{setState(initialValue)}


  return (
    <>
      <h3>useReducer공부</h3>
      <div>{state.value}</div>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
      <button onClick={reset}>reset</button>
      <br />
      <input type="number" value={number} onChange={handleChangeNumber} />
      <button onClick={multifly}>곱하기</button>
      <br />
      <input type="divNumber" value={divNumber} onChange={handleDivNumber} />
      <button onClick={division}>나누기</button>
    </>
  )
}
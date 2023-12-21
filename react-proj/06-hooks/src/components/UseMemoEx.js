import { useMemo, useState } from "react"

export default function UseMemo() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [list, setList] = useState([])

  

  // const calc = () => {
  //   console.log("calc........")
  //   return count * 2
  // }

  const calc = useMemo(() => {
    //console.log("calc........")
    return count * 2
  }, [count])

  return (
    <>
      <h3>useMemo 공부</h3>
      <div>count : {count} <button onClick={() => { setCount(count + 1) }}>+1</button></div>
      <div>calc :{calc}</div>
      <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
    </>
  )
}
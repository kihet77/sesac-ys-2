import { useCallback, useState } from "react"
export default function UseCallbackEx() {
  const [text, setText] = useState("")
  const handleOnChange = useCallback((e) => {
    setText(e.target.value)
  },[])

  return (
    <>
      <h3>useCallback 공부</h3>
      <input type="text" value={text} onChange={handleOnChange} />
    </>
  )
}
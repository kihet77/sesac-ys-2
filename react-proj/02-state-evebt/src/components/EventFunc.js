import { useState } from "react"


export default function EventFunc() {
  const [msg, setMsg] = useState("hello")
  const [name, setName] = useState("")

  const handleOnClick = (e) => {
    setMsg("bye")
  }
  const handleOnClickHello = (e) => {
    setMsg("Hello")
  }
  const handleOnClickTest = (message) => {
    setMsg(message)
  }
  const handleOnClickHelloBind = (message) => {
    setMsg(message)
  }
  const handleEnter = (e) => {
    if (e.key == "Enter") {

    }
  }

  return (
    <>
      <h3>함수형 컴포넌트 event Handling 공부</h3>
      <div>{msg}</div>
      <button onClick={handleOnClick}>잘가</button>
      <button onClick={handleOnClickHello}>안녕</button>
      <button onClick={() => {
        handleOnClickTest("안녕?")
      }}>테스트</button>
      <button onClick={handleOnClickHelloBind.bind(null, "안녕바인딩")}>Bind</button>
      <br /><br />
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        onKeyDown={handleEnter} />
    </>
  )
}
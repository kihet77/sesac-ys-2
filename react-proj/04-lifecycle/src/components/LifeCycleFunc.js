import { useEffect, useState } from "react";

function LifeCycleFunc(props) {
  const { number } = props
  const [text, setText] = useState('')

  useEffect(() => {
    console.log("의존성 배열이 빈 경우,🅾️(mount) ")
    return()=>{console.log("의존성 배열이 빈 경우,❌(unmount) ")}
   }, [])

   useEffect(()=>{
    console.log("의존성 배열이 없는 경우 ,✅(update) ")
   })

   useEffect(()=>{
    console.log("의존성 배열이 있는 경우 ,🆚(textupdate) ")
   }, [text])



  return (
    <>
      <h2>함수형 컴포넌트 LifeCycle 공부</h2>
      <div>number: {number}</div>
      <input type="text" value={text} onChange={(e) => {
        setText(e.target.value)
      }} />
    </>
  )
}

export default LifeCycleFunc
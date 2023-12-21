import { useState } from "react"
import '../../App.css';


function HandlerFunc() {
  const [color, setColor] = useState("black")
  const fontStyle = {
    color:color
  }

  const colorHandler=(colors)=>{
    setColor(colors)
  }

  return (
    <>
      <h1 style={fontStyle}>{color}글씨</h1>
      <button onClick={()=>{colorHandler("red")}}>빨간색</button>
      <button onClick={()=>{colorHandler("blue")}}>파란색</button>

    </>
  )
}

export default HandlerFunc
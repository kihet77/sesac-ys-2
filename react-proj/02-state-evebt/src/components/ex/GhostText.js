import { useState } from "react"

export default function GhostText(props) {
  const [btnText, setBtnText] = useState(false)


  return (
    <>
      <button onClick={(e) => { setBtnText((e) => !e) }}>
        {btnText ? "사라져라" : "보여라"}
      </button>
      <h1>{btnText && (props.text)}</h1>
    </>
  )
}
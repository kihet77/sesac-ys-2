import { useState } from "react"

export default function Handler() {
  const [fruit, setFruit] = useState()
  const [bgColor, setbgColor] = useState()
  const [textColor, settextColor] = useState()
  const [content, setcontent] = useState()

  return (
    <>
      <div>
        과일 :
        <select onClick={ }>
          <option value="복숭아" selected>복숭아</option>
          <option value="바나나">바나나</option>
        </select>
        배경색 :
        <select>
          <option value="backcolor__pink" selected>분홍</option>
          <option value="backcolor__yellow">노랑</option>
        </select>
        과일 :
        <select>
          <option value="textcolor__blue" selected>파랑</option>
          <option value="textcolor__green">초록</option>
        </select>
      </div>
      <div>내용 : <input placeholder="내용을 입력해주세요."/></div>
      <div><img src="/logo192.png"/></div>
      <div></div>
    </>
  )
}
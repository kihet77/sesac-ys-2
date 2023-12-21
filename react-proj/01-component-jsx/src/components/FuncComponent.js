
export default function FuncComponent() {
  const text = "hello?"
  const name = "kiseon"

  const ifRenderTest = () => {
    if (name === "kiseon") {
      return "안녕하세요 " + name
    } else if (name === "lily") {
      return "HI" + name
    } else {
      return "누구세요?"
    }
  }

  return (
    <>
      <div> Funtional Component 입니다. </div>
      <h3>User {text}</h3>

      <h4>{name === "kison" ? "HI" : "Who R U"}</h4>
      <h4>{ifRenderTest()}</h4>

      <h5>{name === "kiseon" && "HI"}</h5>

      <div style={{ fontSize: '20px', color: 'red' }}>hello</div>

      <div className="test-css">jsx에서 css 사용하기</div>

      <button onClick={() => {
        console.log("onClick")
      }}>onClick</button>

    </>
  )
}
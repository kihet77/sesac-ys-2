import "./App.css"
import FuncComponent from "./components/FuncComponent";
import ClassComponent from "./components/ClassComponent";
import FuncPropsEx from "./components/FuncPropsEx";
import BookCard from "./components/BookCard"
import ClassComp from "./components/ClassComp"

function App() {
  const name1 = "기봉"
  const name2 = "기쁨"
  const animal = "강아지"
  const a = 8
  const b = 5


  return (
    <>
      {/* 하나의 태그로 감싸서 사용, <></> 빈 태그도 가능 */}
      {/* <FuncComponent />
      <ClassComponent /> */}

      {/* JSX실습 1 */}
      {/* <h2>
        저의 반려동물의 이름은 {name1},{name2}입니다. <br />
        {name1},{name2}은 {animal}입니다.
      </h2> */}

      {/* JSX실습 2 */}
      {/* <div>{3 + 5 === 8 ? "정답입니다!" : "오답입니다!"}</div> */}

      {/* JSX실습 3 */}
      {/* <div>{a>b && "a가 b보다 큽니다."}</div> */}

      {/* JSX실습 4 */}
      {/* <form>
        <div className="form__title">Hello Word</div>
        <div className="form__input">아이디 : <input></input></div>
        <div className="form__input">비밀번호 : <input></input></div>
      </form> */}

      {/* <FuncPropsEx content="Hello World" number={5}/> */}
      {/* <FuncPropsEx food="초코우유"/> */}
      {/* < BookCard title="나의 하루는 4시 40분에 시작된다" author="김유진" price="13,500" type="자기계발서"/> */}
      <ClassComp text="text"/>
    </>
  )
}

export default App;

import "./BookCard.css"


export default function BookCard(props) {
  return (
    <div className="BookCard">
      <p className="BookCard__best">이번주 베스트셀러</p>
      <img src="/logo512.png" alt="책이름" />
      <div className="BookCard__content">
       <p className="BookCard__title">{props.title}</p>
        <p>저자: {props.author}</p>
        <p>판매가: {props.price}원</p>
        <p>구분: {props.type}</p>
      </div>

    </div>
  )
}
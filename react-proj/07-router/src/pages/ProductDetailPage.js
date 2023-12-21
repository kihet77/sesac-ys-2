import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function ProductDetailPage() {
  const [procuct, setProduct] = useState(null);
  const [error, setError] = useState("Loading...");
  const { id } = useParams();
  console.log(id);

  const [query, setQuery] = useSearchParams();

  console.log(query);
  console.log(query.get("name"));

  const navigator = useNavigate();

  const getProduct = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      if (res.ok) {
        const prod = await res.json();
        setProduct(prod);
      } else {
        throw Error("존재하지 않는 상품입니다.");
      }

    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div>여기는 상품 상세 페이지</div>
      <button onClick={() => navigator(-1)}>목록으로 이동</button>
      <button onClick={() => navigator("/")}>홈 이동</button>

      {procuct ? (
        <ul>
          <li>번호: {procuct.id}</li>
          <li>상품명: {procuct.title}</li>
          <li><img src={procuct.thumbnailUrl}/></li>
        </ul>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
}
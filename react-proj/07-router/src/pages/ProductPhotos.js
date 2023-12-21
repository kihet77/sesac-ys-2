import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"

export default function ProductPhotos() {
  const [prodcuct, setProduct] = useState(null);
  const { id } = useParams()



  const getProduct = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const prod = await res.json();
    setProduct(prod);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div>여기는 이미지 페이지</div>
      <ul>
        <li>번호: {prodcuct.id}</li>
        <li>상품명: {prodcuct.title}</li>
        <li><img src={prodcuct.thumbnailUrl} /></li>
      </ul>
    </>
  )
}
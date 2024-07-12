"use client"
import { useState, useEffect } from "react"

const TotalProductInCart = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/cart", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [products])

  return (<p className="mt-3 me-3 fw-bold">{products.length}</p>)
}

export default TotalProductInCart
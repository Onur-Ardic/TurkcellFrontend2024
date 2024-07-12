"use client"
import { useState, useEffect } from "react"
import Product from "./Product"

const YouMightLike = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/youMightLike", { cache: "no-store" })
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])

    return (
        <div className="youMightLike-container">
            <div className="container">
                <h2 className="text-center">YOU MIGHT ALSO LIKE</h2>
                <div className="row">
                    {products.map((product, index) => <Product productType={product?.productType} product={product} responsive={3} key={index} />)}
                </div>
            </div>
        </div>
    )
}

export default YouMightLike
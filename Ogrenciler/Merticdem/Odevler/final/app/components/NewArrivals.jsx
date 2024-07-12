"use client"
import { useState, useEffect } from "react"
import Product from "./Product"
import ViewAllButton from "./ViewAllButton"

const NewArrivals = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/newArrivals", { cache: "no-store" })
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])

    return (
        <div className="newArrivals-container">
            <div className="container">
                <h2 className="text-center">NEW ARRIVALS</h2>
                <div className="row">
                    {products.map((product, index) => <Product productType={product?.productType} product={product} responsive={3} key={index} />)}
                </div>
                <ViewAllButton />
            </div>
        </div>
    )
}

export default NewArrivals
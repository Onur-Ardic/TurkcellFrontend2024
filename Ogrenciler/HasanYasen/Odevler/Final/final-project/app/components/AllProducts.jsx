"use client"
import { useState, useEffect } from "react"
import Product from "./Product"

const AllProducts = ({ selectedDressTypes, selectedPrice, selectedColors, selectedDressStyles }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/allProducts", { cache: "no-store" })
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])

    const filteredByDressTypes = products.filter(product =>
        selectedDressTypes.some(dressType => product.dressType.includes(dressType)))

    const filteredByPrice = filteredByDressTypes.filter(product => product.price < selectedPrice || product.price == selectedPrice)

    const filteredByColor = filteredByPrice.filter(product =>
        selectedColors.some(color => product.color.includes(color)))

    const filteredByDressStyles = filteredByColor.filter(product =>
        selectedDressStyles.some(dressStyle => product.dressStyle.includes(dressStyle)))

    return (
        <div className="container" style={{ borderBottom: "1px solid #0000001A" }}>
            <div className="d-flex justify-content-between align-items-center px-2">
                <h2>All Products</h2>
                <p className="text-muted">Showing {filteredByDressStyles?.length} of {products?.length} Products</p>
            </div>
            <div className="row">
                {filteredByDressStyles.map((product, index) => <Product productType={product?.productType} product={product} responsive={4} key={index} />)}
            </div>
        </div>
    )
}

export default AllProducts
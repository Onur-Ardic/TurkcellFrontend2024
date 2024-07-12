"use client";

import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductList = ({ initialProducts }) => {
  const products =
    useSelector((state) => state.products.filteredProducts) || initialProducts;

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;

"use client";

import ProductCard from "./ProductCard";

const CategoryProductList = ({ products }) => {
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

export default CategoryProductList;

import React from "react";

function ProductsColor({product}) {
  return (
    <>
      <p className="mb-1 transparent-6">Select Colors</p>
      <div className="d-flex gap-2">
        {product.colors.map((color, index) => (
          <div
            key={index}
            className="color-circle"
            style={{ backgroundColor: color, border: `1px solid #f0f0f0` }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default ProductsColor;

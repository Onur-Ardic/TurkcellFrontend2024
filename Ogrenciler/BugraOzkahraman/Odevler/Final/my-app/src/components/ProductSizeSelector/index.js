"use client";

import { useState } from "react";

const ProductSizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState("Medium");

  return (
    <div className="productSize">
      <h6>Choose Size</h6>
      <div className="d-flex gap-2 ">
        <button
          className={`btn ${
            selectedSize === "Small" ? "bg-dark text-white" : "bg-light"
          } rounded-pill px-3`}
          onClick={() => setSelectedSize("Small")}>
          Small
        </button>
        <button
          className={`btn ${
            selectedSize === "Medium" ? "bg-dark text-white" : "bg-light"
          } rounded-pill px-3`}
          onClick={() => setSelectedSize("Medium")}>
          Medium
        </button>
        <button
          className={`btn ${
            selectedSize === "Large" ? "bg-dark text-white" : "bg-light"
          } rounded-pill px-3`}
          onClick={() => setSelectedSize("Large")}>
          Large
        </button>
        <button
          className={`btn ${
            selectedSize === "X-Large" ? "bg-dark text-white" : "bg-light"
          } rounded-pill px-3`}
          onClick={() => setSelectedSize("X-Large")}>
          X-Large
        </button>
      </div>
    </div>
  );
};

export default ProductSizeSelector;

'use client'
import React, { useState, useEffect } from 'react';

function ProductSize({ product }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [productSize, setProductSize] = useState([]);
  console.log(selectedSize);

  useEffect(() => {
    if (product && product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
      setProductSize(product.sizes)
    }
  }, [product]);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // const productSizes = product?.sizes || [];
  // console.log(productSizes);

  return (
    <div className="products-size">
      <h5>Sizes</h5>
      <div className="size-container">
        {productSize.length > 0 ? (
          productSize.map((size, index) => (
            <div
              key={index}
              className={`size-box ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </div>
          ))
        ) : (
          <p>No sizes available</p>
        )}
      </div>
    </div>
  );
}

export default ProductSize;

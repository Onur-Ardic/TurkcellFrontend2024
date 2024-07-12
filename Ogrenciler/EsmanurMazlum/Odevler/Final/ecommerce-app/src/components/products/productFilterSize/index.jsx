import React from 'react';

function ProductsSize({ products, selectedSize, onSelectSize }) {
  const productSizes = [...new Set(products.flatMap(product => product.sizes))];

  return (
    <div className="products-size">
      <h5>Sizes</h5>
      <div className="size-container">
        {productSizes.map((size, index) => (
          <div
            key={index}
            className={`size-box ${selectedSize === size ? 'selected' : ''}`}
            onClick={() => onSelectSize(size)}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsSize;

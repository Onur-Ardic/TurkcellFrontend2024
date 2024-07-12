'use client'
import React from 'react';

function ProductsFilterColor({ products, selectedColor, onSelectColor }) {

  const productColors = [...new Set(products.flatMap(product => product.colors))];

  return (
    <div className="products-color">
      <h5>Colors</h5>
      <div className="color-container">
        {productColors.length > 0 ? (
          productColors.map((color, index) => (
            <div
              key={index}
              className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => onSelectColor(color)}
            >
              {selectedColor === color && <div className="checkmark">✓</div>}
            </div>
          ))
        ) : (
          <p>No colors available</p>
        )}
      </div>
    </div>
  );
}

export default ProductsFilterColor;

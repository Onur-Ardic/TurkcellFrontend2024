"use client"

import React, { useState } from 'react';
import ProductCard from '../productCard';

function ProductList({ data }) {
  console.log("product list");

  const initialVisibleProducts = 5;
  const [visibleProducts, setVisibleProducts] = useState(initialVisibleProducts);

  if (data === null) {
    return <p>No products available</p>;
  }

  const handleToggleView = () => {
    if (visibleProducts > initialVisibleProducts) {
      setVisibleProducts(initialVisibleProducts); 
    } else {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
    }
  };

  return (
    <>
      <div className='row mt-5'>
        {
          data.slice(1, visibleProducts).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
      {visibleProducts < data.length || visibleProducts > initialVisibleProducts ? (
        <div className='w-100 mt-3 text-center'>
          <button className='view-all-btn' onClick={handleToggleView}>
            {visibleProducts > initialVisibleProducts ? 'Show Less' : 'View All'}
          </button>
        </div>
      ) : null}
      
    </>
  );
}

export default ProductList;

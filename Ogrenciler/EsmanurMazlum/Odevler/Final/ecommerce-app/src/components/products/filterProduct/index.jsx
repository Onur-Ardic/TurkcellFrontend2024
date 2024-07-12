'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredProducts } from '../../../stores/products-store/selector';
import ProductCard from '../productCard';
import { fetchProducts } from '@/stores/products-store';

function FilterProduct() {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="product-list row">
      {products.map((product) => (
        <div key={product.id} className="col-lg-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default FilterProduct;

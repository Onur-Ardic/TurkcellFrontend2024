'use client'
import ProductList from '@/components/products/ProductList';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/stores/products-store';

const NewArrivals = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchProducts());
    };

    fetchData();
  }, [dispatch]);


  return (
    <div className='container mt-5'>
      <h2 className='text-center'>NEW ARRIVALS</h2>
      <ProductList data={products.slice(0, 10)} />
    </div>
  );
};

export default NewArrivals;

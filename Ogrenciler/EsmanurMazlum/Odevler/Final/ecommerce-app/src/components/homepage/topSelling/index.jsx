import ProductList from '@/components/products/productList';
import React from 'react'

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const TopSelling = async () => {

  const productsData = await getProducts();
  console.log(productsData);

  return (
    <div className='container mt-5'>
        <h2 className='text-center'>TOP SELLING</h2>
        <ProductList data={productsData.slice(5,13)} />
    </div>
  )
}

export default TopSelling
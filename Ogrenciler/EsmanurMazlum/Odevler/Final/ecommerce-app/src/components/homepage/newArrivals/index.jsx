import ProductList from '@/components/products/productList';
import React from 'react'
import {store} from "@/stores"
import { fetchProducts } from "@/stores/products-store"


const NewArrivals = async () => {
  await store.dispatch(fetchProducts())
  const {products} = store.getState().products


  return (
    <div className='container mt-5'>
        <h2 className='text-center'>NEW ARRIVALS</h2>
        <ProductList data={products.slice(0,10)} />
    </div>
  )
}

export default NewArrivals
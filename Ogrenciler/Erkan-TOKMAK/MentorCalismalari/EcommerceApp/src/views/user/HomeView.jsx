import React from 'react'
import Features from '../../components/Features'
import ProductList from '../../components/ProductList'


const HomeView = () => {
  return (
    <>
      <div className="container mx-auto">
        <Features />
        <ProductList />
      </div>
    </>
  )
}

export default HomeView
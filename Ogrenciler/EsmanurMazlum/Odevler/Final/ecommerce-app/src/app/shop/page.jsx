import FilterProduct from '@/components/products/filterProduct'
import Filters from '@/components/products/filters'
import React from 'react'

function Shop() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-3'>
                <Filters />
            </div>
            <div className='col-lg-9'>
                <FilterProduct />
            </div>
        </div>
    </div>
  )
}

export default Shop
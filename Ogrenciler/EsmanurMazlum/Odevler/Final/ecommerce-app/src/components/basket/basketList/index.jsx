import React from 'react'
import BasketProductCard from '../basketProductCard'

function BasketList({products}) {
  return (
    <>
        {
            products && products.map((product) => (
                <BasketProductCard product={product} />
            ))
        }
    </>
  )
}

export default BasketList
import React from 'react'

function ProductSize({product}) {
  return (
    <>
      <p className="mb-1 transparent-6">Choosse Size</p>
      <div className="d-flex gap-2">
        {product.sizes.map((size, index) => (
          <button
            key={index}
            className="size-badge"
          >{size}</button>
        ))}
      </div>
    </>
  )
}

export default ProductSize
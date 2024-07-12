import { ProductCartImageWrapper, ProductCartVariable, ProductCartVariableTitle } from '@/styles/CartStyle'
import { DiscountBox, OldPrice, ProductBackground, ProductPrice, ProductTitle, QuantitiyMinus, QuantityPlus, QuantityValue } from '@/styles/ProductStyle'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import CartQuantity from './CartQuantity'

const CartItems = ({ item }) => {
  const t = useTranslations();
  return (
    <>
      <div className="row">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-3">
            <ProductBackground>
              <ProductCartImageWrapper>
                <Image src={`/assets/products/${item.image}`} alt='test' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-fit-contain' />
              </ProductCartImageWrapper>
            </ProductBackground>
            <div className='d-flex flex-column'>
              <ProductTitle>
                {item.title}
              </ProductTitle>
              <ProductCartVariableTitle>
                Size:
                <ProductCartVariable>
                  {item.size}
                </ProductCartVariable>
              </ProductCartVariableTitle>

              <div className="d-flex align-items-center gap-2 mt-2">
                <ProductPrice className='m-0'>
                  ${Math.floor(item.price - (item.discountPercentage * item.price / 100))}
                </ProductPrice>
                {item.discountPercentage > 0 ? (<>
                  <OldPrice className='m-0'>
                    $ {item.price}
                  </OldPrice>
                  <DiscountBox>
                    -{item.discountPercentage}%
                  </DiscountBox>
                </>)
                  : ''}
              </div>
            </div>
          </div>
          <CartQuantity item={item} />
        </div>
      </div>
    </>
  )
}

export default CartItems
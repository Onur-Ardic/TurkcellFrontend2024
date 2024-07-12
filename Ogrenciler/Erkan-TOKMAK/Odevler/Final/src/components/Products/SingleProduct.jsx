import { Link } from '@/navigation'
import { StyledLink } from '@/styles/ComponentStyle'
import { DiscountBox, OldPrice, ProductBackground, ProductImageWrapper, ProductPrice, ProductTitle, RatingValue, RatingValueMax } from '@/styles/ProductStyle'
import { Rating } from '@smastrom/react-rating'
import Image from 'next/image'
import React from 'react'

const SingleProduct = ({ id, image, title, rating, price, discountPercentage }) => {

    return (
        <>
            <StyledLink href={`/shop/${id}`}>
                <ProductBackground>
                    <ProductImageWrapper className='position-relative'>
                        <Image src={`/assets/products/${image}`} alt="product" fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-fit-contain' />
                    </ProductImageWrapper>
                </ProductBackground>
            </StyledLink>
            <StyledLink href={`/shop/${id}`}>
            <ProductTitle className='mt-3'>
                {title}
            </ProductTitle>
            </StyledLink>
            <div className='d-flex align-items-center'>
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly /> <RatingValue>{rating}/<RatingValueMax>5</RatingValueMax></RatingValue>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
                <ProductPrice className='m-0'>
                    ${Math.floor(price - (discountPercentage * price / 100))}
                </ProductPrice>
                {discountPercentage > 0 ? (<>
                    <OldPrice className='m-0'>
                        $ {price}
                    </OldPrice>
                    <DiscountBox>
                        -{discountPercentage}%
                    </DiscountBox>
                </>)
                    : ''}
            </div>
        </>
    )
}

export default SingleProduct
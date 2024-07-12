import { DiscountBox, OldDetailPrice, ProductBackground, ProductDescription, ProductDetailImageColumn, ProductDetailImageWrapper, ProductDetailPrice, ProductDetailSingleImageBox, ProductDetailTitle, RatingValue, RatingValueMax, } from '@/styles/ProductStyle'
import { Rating } from '@smastrom/react-rating'
import Image from 'next/image'
import React from 'react'
import SelectProductForCard from './SelectProductForCard'


const ProductDetail = ({ product }) => {
    return (
        
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="row d-flex flex-wrap-reverse">
                        <div className="col-12 col-md-4 mt-4">
                            <ProductDetailImageColumn>
                                <ProductBackground>
                                    <ProductDetailImageWrapper className='position-relative'>
                                        <Image src={`/assets/products/${product.image}`} alt={product.title} layout="fill" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-fit-contain' />
                                    </ProductDetailImageWrapper>
                                </ProductBackground>
                                <ProductBackground>
                                    <ProductDetailImageWrapper className='position-relative'>
                                        <Image src={`/assets/products/${product.image}`} alt={product.title} layout="fill" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-fit-contain' />
                                    </ProductDetailImageWrapper>
                                </ProductBackground>
                                <ProductBackground>
                                    <ProductDetailImageWrapper className='position-relative'>
                                        <Image src={`/assets/products/${product.image}`} alt={product.title} layout="fill" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-fit-contain' />
                                    </ProductDetailImageWrapper>
                                </ProductBackground>
                            </ProductDetailImageColumn>
                        </div>
                        <div className="col-12 col-md-8 mt-4">
                            <ProductBackground>
                                <ProductDetailSingleImageBox className='position-relative'>
                                    <Image src={`/assets/products/${product.image}`} alt={product.title} layout="fill" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  className='object-fit-contain' />
                                </ProductDetailSingleImageBox>
                            </ProductBackground>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-12">
                            <ProductDetailTitle>{product.title}</ProductDetailTitle>
                        </div>
                        <div className="col-12">
                            <div className="d-flex align-items-center">
                                <Rating style={{ maxWidth: 100 }} value={product.rating} readOnly />
                                <RatingValue>{product.rating}/<RatingValueMax>5</RatingValueMax></RatingValue>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex align-items-center gap-2 mt-2">
                                <ProductDetailPrice className='m-0'>
                                    ${Math.floor(product.price - (product.discountPercentage * product.price / 100))}
                                </ProductDetailPrice>
                                {product.discountPercentage > 0 ? (<>
                                    <OldDetailPrice className='m-0'>
                                        $ {product.price}
                                    </OldDetailPrice>
                                    <DiscountBox>
                                        -{product.discountPercentage}%
                                    </DiscountBox>
                                </>)
                                    : ''}
                            </div>
                        </div>
                        <div className="col-12 borber-bottom">
                            <ProductDescription>
                                {product.description}
                            </ProductDescription>
                        </div>
                        <div className="col-12">
                            <SelectProductForCard product={product} />
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default ProductDetail
"use client";
import { useState } from 'react';
import { OriginalPrice, DiscountPercentage, ProductPrice, ProductDetailImage, ColorOption, SizeOption, AddCartBtn } from './styles/styled';
import ReactStars from 'react-rating-stars-component';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Link from 'next/link';
import ProductDetailComments from './ProductDetailComments';


const ProductDetailPage = ({ product }) => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const handleColorSelection = (color) => {
        setSelectedColor(color);
    };

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (!selectedColor || !selectedSize) {
            alert("Please select a color and size.");
            return;
        }

        const newItem = {
            image: `../assets/images/${product.image}`,
            title: product.title,
            color: selectedColor,
            size: selectedSize,
            price: product.price
        };


        dispatch(addToCart(newItem));
    };

    const hasDiscount = product.discountPercentage > 0;
    const originalPrice = hasDiscount ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2) : null;

    return (
        <>
            <div className="container d-flex gap-5 py-5 my-5">
                <div className="product-image">
                    <ProductDetailImage className='img-fluid rounded-4' src={`../assets/images/${product.image}`} alt={product.title} />
                </div>
                <div className="product-info">
                    <h1 className='fw-bold'>{product.title}</h1>
                    <ReactStars
                        count={5}
                        value={product.rating}
                        size={24}
                        activeColor="#ffd700"
                        isHalf={true}
                        edit={false}
                    />
                    {hasDiscount && (
                        <div className="d-flex gap-2">
                            <ProductPrice className="fs-4">${product.price}</ProductPrice>
                            <OriginalPrice className="fs-4">${originalPrice}</OriginalPrice>
                            <DiscountPercentage className="d-flex align-items-center rounded-5 gap-2">-{product.discountPercentage}%</DiscountPercentage>
                        </div>
                    )}
                    {!hasDiscount && (
                        <ProductPrice className="fs-4">${product.price}</ProductPrice>
                    )}
                    <p className='text-body-secondary'>{product.description}</p>
                    <hr className='text-body-secondary my-4' />
                    <div className="product-options">
                        <div className='d-flex flex-column'>
                            <p className='text-body-secondary'>Select Color</p>
                            <div className="d-flex pb-2 gap-2">
                                {product.colors.map((color, index) => (
                                    <ColorOption
                                        key={index}
                                        style={{ backgroundColor: color }}
                                        selected={selectedColor === color}
                                        onClick={() => handleColorSelection(color)}
                                    />
                                ))}
                            </div>
                        </div>
                        <hr className='text-body-secondary' />
                        <div className='d-flex flex-column'>
                            <p className='text-body-secondary'>Select Size</p>
                            <div className='d-flex pb-2'>
                                {product.sizes.map((size, index) => (
                                    <SizeOption
                                        key={index}
                                        selected={selectedSize === size}
                                        onClick={() => handleSizeSelection(size)}
                                    >
                                        {size}
                                    </SizeOption>
                                ))}
                            </div>
                        </div>
                        <hr className='text-body-secondary' />
                        <div className='d-flex align-items-baseline gap-5'>
                            <div className='d-flex pb-2 align-items-center'>
                                <button className='border-0 bg-body-secondary fs-4 rounded-start' onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, e.target.value))}
                                    className='text-center border-0 bg-body-secondary'
                                    style={{padding: '7px 0px', width: '150px'}}
                                />
                                <button className='border-0 bg-body-secondary fs-4 rounded-end' onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <Link href='/cart' ><AddCartBtn onClick={handleAddToCart}>Add to Cart</AddCartBtn></Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <ProductDetailComments product={product} />
            </div>
            
        </>
    );
};

export default ProductDetailPage;

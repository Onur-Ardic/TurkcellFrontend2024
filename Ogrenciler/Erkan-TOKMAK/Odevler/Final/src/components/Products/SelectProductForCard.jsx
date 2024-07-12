"use client";
import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    AddToCartButton,
    ProductDetailColorCheck,
    ProductDetailColorInput,
    ProductDetailColors,
    ProductDetailSelectText,
    ProductDetailSizeInput,
    ProductDetailSizes,
    QuantitiyMinus,
    QuantityPlus,
    QuantityValue
} from '@/styles/ProductStyle';
import { addItemToCart } from '@/lib/features/cart/cartSlice';
import useAuth from '@/lib/Hooks/useAuth';
import { redirect, useRouter } from 'next/navigation';

const SelectProductForCard = ({ product }) => {
    const t = useTranslations();
    const dispatch = useDispatch();
    const router = useRouter();
    const locale = useLocale();

    const {currentUser} = useAuth();
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = (e) => {
        e.preventDefault();
        const cartItem = {
            id: crypto.randomUUID(),
            pid: product.id,
            image: product.image,
            title: product.title,
            price: product.price,
            discountPercentage: product.discountPercentage,
            color: selectedColor,
            size: selectedSize,
            quantity: quantity,
        };
        dispatch(addItemToCart(cartItem)); 
        router.push(`/${locale}/cart`);
    };

    const parsedSizes = (product) => {
        const sizes = product.sizes;
        const parsedSizes = [];
        sizes.toString().split(',').map((size) => {
            parsedSizes.push(size);
        })
        return parsedSizes;
    };
    const parsedColors = (product) => {
        const colors = product.colors;
        const parsedColors = [];
        colors.toString().split(',').map((color) => {
            parsedColors.push(color);
        })
        return parsedColors;
    };

    return (
        <div>
            <form onSubmit={handleAddToCart}>
                <div className="border-top py-3">
                    <ProductDetailSelectText>{t('selectColors')}</ProductDetailSelectText>
                    <div className="d-flex gap-2 flex-wrap">

                        {parsedColors(product).map((color) => (
                            <label key={color} >
                                <ProductDetailColorInput
                                    type="radio"
                                    name="color"
                                    value={color}
                                    checked={selectedColor === color}
                                    onChange={(e) => setSelectedColor(e.target.value)}
                                />
                                <ProductDetailColors color={color}>
                                    {selectedColor === color && <ProductDetailColorCheck className='p-0 m-0 text-center mt-1'>&#10003;</ProductDetailColorCheck>}
                                </ProductDetailColors>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="border-top py-3">
                    <ProductDetailSelectText>{t('selectSizes')}</ProductDetailSelectText>
                    <div className='d-flex gap-2 flex-wrap'>


                        {parsedSizes(product).map((size) => (
                            <ProductDetailSizes key={size} size={size} selectedsize={selectedSize}>
                                <ProductDetailSizeInput
                                    type="radio"
                                    name="size"
                                    value={size}
                                    checked={selectedSize === size}
                                    onChange={(e) => setSelectedSize(e.target.value)}

                                />
                                {size}
                            </ProductDetailSizes>
                        ))}
                    </div>
                </div>
                <div className="d-flex gap-3 mt-3 border-top py-3">
                    <div className="d-flex">
                        <QuantitiyMinus type="button" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</QuantitiyMinus>

                        <QuantityValue>
                            {quantity}
                        </QuantityValue>
                        <QuantityPlus type="button" onClick={() => setQuantity(quantity + 1)}>+</QuantityPlus>
                    </div>
                    
                    {currentUser ?  <AddToCartButton type="submit">Add to Cart</AddToCartButton> :  <AddToCartButton type="submit" disabled>Add to Cart</AddToCartButton>}
                    
                </div>
            </form>
        </div>
    );
};


export default SelectProductForCard
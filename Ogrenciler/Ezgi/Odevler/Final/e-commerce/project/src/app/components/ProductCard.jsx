"use client";
import Link from "next/link";
import { ProductImage, ProductTitle, ProductPrice, OriginalPrice, DiscountPercentage } from "./styles/styled";
import ReactStars from 'react-rating-stars-component';

const ProductCard = ({ product }) => {
    const hasDiscount = product.discountPercentage > 0;
    const originalPrice = hasDiscount ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2) : null;

    return (
        <Link href={`/product/${product.id}`}>
            <ProductImage className="img-fluid rounded-5" src={`../assets/images/${product.image}`} alt={product.title} />
            <ProductTitle className="fw-bold m-0 pt-4 text-black">{product.title}</ProductTitle>
            <div className="d-flex align-items-center gap-3">
                <ReactStars
                    count={5}
                    value={product.rating}
                    size={24}
                    activeColor="#ffd700"
                    isHalf={true}
                    edit={false}
                />
                <p className="m-0 text-black">{product.rating}/5</p>
            </div>
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
        </Link>
    );
};

export default ProductCard;

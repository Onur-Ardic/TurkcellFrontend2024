
import {
  ProductRating,
  DiscountAmount,
  DiscountPrice,
  DiscountPercent,
  ProductPrice,
  ProductTitle,
  ProductImage,
  ProductCard,
  ProductGrid,
  GridContainer, 
} from "./StyleProductGrid.style";
import React from "react";

import Link from "next/link";

const StyleProductGrid = ({ products, style }) => {
  return (
    <GridContainer>
      <h1>{style.charAt(0).toUpperCase() + style.slice(1)} Style</h1>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />

            <Link href={`/products/${product.id}`}>
              <ProductTitle className="text-decoration-none">{product.name} </ProductTitle>
            </Link>
            <ProductRating>{product.rating}</ProductRating>
            <ProductPrice>
              ${product.price}
              {product.discount && (
                <DiscountPrice>
                  <DiscountAmount>${product.discount.amount}</DiscountAmount>
                  <DiscountPercent>{product.discount.percent}</DiscountPercent>
                </DiscountPrice>
              )}
            </ProductPrice>
          </ProductCard>
        ))}
      </ProductGrid>
    </GridContainer>
  );
};

export default StyleProductGrid;

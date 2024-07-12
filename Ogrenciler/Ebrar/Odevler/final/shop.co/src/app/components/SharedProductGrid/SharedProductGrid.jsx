
import {
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductRating,
  ProductPrice,
  DiscountPrice,
  DiscountAmount,
  DiscountPercent,
} from "./SharedProductGrid.style";
 import Link from "next/link";

const SharedProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.title} />
          <ProductDetails>
            <Link href={`/products/${product.id}`}>
              <ProductTitle>{product.name} </ProductTitle>
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
          </ProductDetails>
        </ProductCard>
      ))}
    </ProductGrid>
  );
};

export default SharedProductGrid;

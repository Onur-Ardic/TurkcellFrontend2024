"use client";
import ProductCard from "@/components/ProductCard";
import { useCategory } from "./context";

export default function ProductList() {
  const { products } = useCategory();

  return (
    <div className="row justify-content-center">
      {products.map((product) => (
        <div className="col-12 col-md-3 mb-3" key={product.id}>
          <ProductCard
            id={product.id}
            imgSrc={product.img}
            title={product.name}
            rating={product.rate}
            price={product.price}
            originalPrice={product.priceOld}
          />
        </div>
      ))}
    </div>
  );
}

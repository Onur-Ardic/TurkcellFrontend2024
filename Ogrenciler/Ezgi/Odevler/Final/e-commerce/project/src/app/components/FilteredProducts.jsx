"use client";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const FilteredProducts = ({ products }) => {
  const { selectedColor, selectedType, selectedSize, selectedCategory } = useSelector(
    (state) => state.filter
  );
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let newFilteredProducts = products;

    if (selectedType) {
      newFilteredProducts = newFilteredProducts.filter(
        (product) => product.type === selectedType
      );
    }

    if (selectedColor) {
      newFilteredProducts = newFilteredProducts.filter((product) =>
        product.colors.includes(selectedColor)
      );
    }

    if (selectedSize) {
      newFilteredProducts = newFilteredProducts.filter((product) =>
        product.sizes.includes(selectedSize)
      );
    }

    if (selectedCategory) {
      newFilteredProducts = newFilteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }



    setFilteredProducts(newFilteredProducts);
  }, [selectedColor, selectedType, selectedSize, selectedCategory, products]);

  return (
    <div className="row">
      {filteredProducts && filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <Link href={`/product/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          </div>
        ))
      ) : (
        <p className="text-center">No products found.</p>
      )}
    </div>
  );
};

export default FilteredProducts;

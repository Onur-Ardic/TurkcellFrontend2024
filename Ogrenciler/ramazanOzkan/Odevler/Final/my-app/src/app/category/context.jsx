"use client";
import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export const useCategory = () => useContext(CategoryContext);

export default function CategoryProvider({ children, products }) {
  const [_products, setProducts] = useState(products);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleApplyFilter = () => {
    const queryStrings = new URLSearchParams();

    if (minPrice) {
      queryStrings.append("price_gte", minPrice);
    }

    if (maxPrice) {
      queryStrings.append("price_lte", maxPrice);
    }

    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products?${queryStrings.toString()}`
    )
      .then((res) => res.json())
      .then((res) =>
        setProducts(
          res.filter((res) => {
            let flag = true;
            if (selectedColor) {
              flag = res.colors.includes(selectedColor);
            }
            if (selectedSize) {
              flag = res.sizes.includes(selectedSize);
            }

            return flag;
          })
        )
      );
  };

  return (
    <CategoryContext.Provider
      value={{
        products: _products,
        handleApplyFilter,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        selectedColor,
        setSelectedColor,
        selectedSize,
        setSelectedSize,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

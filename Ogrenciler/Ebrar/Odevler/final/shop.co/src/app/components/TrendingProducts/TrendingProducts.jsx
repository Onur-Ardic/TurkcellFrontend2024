"use client";
import {
  SectionTitle,
  TrendingProductSection,
  ViewAllButton,
  ViewLessButton,
} from "./TrendingProduct.style";
import React from "react";
import { useState, useEffect } from "react";
import SharedProductGrid from "../SharedProductGrid/SharedProductGrid";
const TrendingProduct = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
        setVisibleProducts(data.slice(0, 4)); 
      } catch (error) {
      }
    };
    fetchProducts();
  }, []);

  const handleViewAll = () => {
    setViewAll(true);
    setVisibleProducts(products);
  };
  const handleViewLess = () => {
    setViewAll(false);
    setVisibleProducts(products.slice(0, 4)); 
  };
  return (
    <TrendingProductSection>
      <SectionTitle className="text-uppercase">Top Selling</SectionTitle>
      <SharedProductGrid products={visibleProducts} />
      {!viewAll ? (
        <ViewAllButton onClick={handleViewAll}>View All</ViewAllButton>
      ) : (
        <ViewLessButton onClick={handleViewLess}>View Less</ViewLessButton>
      )}
    </TrendingProductSection>
  );
};

export default TrendingProduct;

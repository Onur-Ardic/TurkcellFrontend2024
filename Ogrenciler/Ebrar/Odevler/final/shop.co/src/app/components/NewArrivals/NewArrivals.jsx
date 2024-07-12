"use client";
import { useState, useEffect } from "react";
import SharedProductGrid from "../SharedProductGrid/SharedProductGrid";
import {
  NewArrivalsSection,
  SectionTitle,
  ViewAllButton,
  ViewLessButton,
} from "./NewArrivals.style";

const NewArrivals = () => {
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
    <NewArrivalsSection>
      <SectionTitle className="text-uppercase">New Arrivals</SectionTitle>
      <SharedProductGrid products={visibleProducts} />
      {!viewAll ? (
        <ViewAllButton onClick={handleViewAll}>View All</ViewAllButton>
      ) : (
        <ViewLessButton onClick={handleViewLess}>View Less</ViewLessButton>
      )}
    </NewArrivalsSection>
  );
};

export default NewArrivals;

import React from "react";
import { useState, useEffect } from "react";
import SharedProductGrid from "../SharedProductGrid/SharedProductGrid";
import {YouMightAlsoLikeSection} from "./YouMightAlsoLike.style";


const YouMightAlsoLike = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);

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
  return (
    <YouMightAlsoLikeSection>
 
      <h2 className="text-center">You Might Also Like</h2>
      <SharedProductGrid products={visibleProducts} />
    </YouMightAlsoLikeSection>
  );
};

export default YouMightAlsoLike;

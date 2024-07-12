"use client";

import styled from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 295px);
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(200px, 1fr)
    ); 
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.img`
  background: rgba(240, 238, 237, 1);
  border-radius: 20px;
  height: 298px;
`;

export const ProductDetails = styled.div`
  flex: 1;
  padding-top: 20px;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 700;
  color: black;
`;

export const ProductRating = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.p`
  display: flex;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const DiscountPrice = styled.p`
  display: flex;
`;

export const DiscountAmount = styled.p`
  font-size: 24px;
  margin-left: 10px;
  color: rgb(205, 205, 205);
  text-decoration: line-through;
`;

export const DiscountPercent = styled.b`
  margin-left: 5px;
  width: 45px;
  height: 33px;
  border: 1px solid red;
  border-radius: 20px;
  background-color: #ffeaea;
  font-size: 12px;
  padding: 5px 5px;
`;

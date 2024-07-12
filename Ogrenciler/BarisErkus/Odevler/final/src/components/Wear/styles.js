"use client";
import Image from "next/image";
import styled from "styled-components";

export const Card = styled.div`
  width: 295px;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--secondary);
`;

export const StyledImage = styled(Image)`
  border-radius: 20px;
`;

export const CardTitle = styled.h5`
  font-size: 20px;
  font-weight: 700;
`;

export const Price = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

export const DiscountlessPrice = styled(Price)`
  opacity: 0.5;
  text-decoration: line-through;
  margin: 0 10px;
`;

export const DiscountPercent = styled.span`
  font-size: 12px;
  font-weight: 700;
  padding: 6px 14px;
  background-color: #ff33331a;
  color: #ff3333;
  border-radius: 62px;
`;

export const ImageContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  width: 300px;
  height: 300px;
  position: relative;
`;

export const StyledCardList = styled.div`
  margin-top: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

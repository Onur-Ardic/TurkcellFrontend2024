"use client";
import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: var(--primary);
  color: var(--secondary);
  max-width: 700px;
`;

export const ImageWrapper = styled.div`
  width: 140px;
  height: 140px;
  position: relative;
`;

export const P = styled.p`
  font-size: 14px;
  text-transform: capitalize;
`;

export const RiDeleteBin3FillWrapper = styled.div`
  cursor: pointer;
`;

export const DiscountPercent = styled.span`
  font-size: 12px;
  font-weight: 700;
  padding: 6px 14px;
  background-color: #ff33331a;
  color: #ff3333;
  border-radius: 62px;
`;

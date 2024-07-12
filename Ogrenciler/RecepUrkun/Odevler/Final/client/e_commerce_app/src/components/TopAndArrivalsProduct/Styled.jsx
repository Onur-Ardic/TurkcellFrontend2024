"use client";
import styled from "styled-components";

export const ArrivalsTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  font-family: "Integral CF Bold";
  text-align: center;
  margin-bottom: 55px;
`;

export const Ranking = styled.h6`
  font-size: 14px;
  line-height: 18.9px;
  font-weight: 400;
  font-family: "satoshi";
`;

export const Price = styled.h4`
  font-size: 24px;
  line-height: 32.4px;
  font-weight: 700;
  font-family: "satoshi";
`;

export const Discount = styled(Price)`
  color: rgba(0, 0, 0, 0.4);
  text-decoration: line-through;
`;

export const PerDisc = styled.h6`
  font-size: 12px;
  font-weight: 500;
  line-height: 16.2px;
  font-family: "satoshi";
  color: #ff3333;
`;

export const PerDiscButton = styled.button`
  width: 58px;
  height: 28px;
  border-radius: 62px;
  padding: 6px 14px;
  background-color: #ff33331a;
`;

export const ViewAllButton = styled.button`
  width: 218px;
  height: 52px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 62px;
  padding: 16px 54px;
  margin-top: 36px;
`;

export const ImageContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 295px;
  height: 298px;
  @media screen and (max-width: 425px) {
    width: 190px;
    height: 200px;
  }
`;

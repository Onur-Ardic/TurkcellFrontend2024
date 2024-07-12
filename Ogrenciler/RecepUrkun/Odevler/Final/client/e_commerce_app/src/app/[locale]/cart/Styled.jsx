"use client";
import styled from "styled-components";

export const CartTitle = styled.h1`
  font-weight: "700";
  font-family: "Integral CF Bold";
  font-size: 40px;
  line-height: 48px;
  @media screen and (max-width: 425px) {
    font-size: 32px;
    line-height: 38.4px;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  height: 124px;
`;

export const CartImageContainer = styled.div`
  position: relative;
  width: 124px;
  height: 124px;
  border-radius: 8.66px;
  @media screen and (max-width: 425px) {
    width: 99px;
    height: 99px;
  }
`;

export const ProductName = styled.h5`
  font-size: 20px;
  line-height: 27px;
  font-family: "satoshi";
  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 21.6px;
  }
`;

export const SizeColor = styled.h6`
  font-size: 14px;
  line-height: 18.9px;
  font-family: "satoshi";
  font-weight: 400;
  @media screen and (max-width: 425px) {
    font-size: 12px;
    line-height: 16.2px;
  }
`;

export const ProductPrice = styled.h4`
  font-size: 24px;
  line-height: 32.4px;
  margin-top: 15px;
  font-weight: 700;
  font-family: "satoshi";
  @media screen and (max-width: 425px) {
    font-size: 20px;
    line-height: 27px;
  }
`;

export const GoToCheckOut = styled.button`
  margin-top: 24px;
  width: 100%;
  height: 60px;
  border-radius: 62px;
  background-color: #000;
  color: #fff;
`;

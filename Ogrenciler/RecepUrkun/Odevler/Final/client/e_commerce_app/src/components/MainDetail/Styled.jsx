"use client";
import styled from "styled-components";

export const SmallImageContainer = styled.div`
  position: relative;
  width: 152px;
  height: 168px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 14px;
  @media screen and (max-width: 425px) {
    margin-right: 12px;
  }
  &:last-child {
    @media screen and (max-width: 425px) {
      margin-right: 0;
    }
  }
`;

export const BigImageContainer = styled.div`
  position: relative;
  width: 444px;
  height: 530px;
`;

export const DetailsProductName = styled.h1`
  font-size: 40px;
  line-height: 48px;
  font-weight: 700;
  font-family: "Integral CF Bold";
  @media screen and (max-width: 425px) {
    font-size: 24px;
    line-height: 28px;
    width: 65%;
  }
`;

export const DetailsPrice = styled.h1`
  font-size: 32px;
  line-height: 43.2px;
  font-family: "satoshi";
`;

export const DetailsDiscount = styled(DetailsPrice)`
  color: rgba(141, 141, 141, 0.4);
  text-decoration: line-through;
`;

export const DetailsPerDisc = styled.h1`
  font-family: "satoshi";
  font-size: 16px;
  font-weight: 500;
  line-height: 21.6px;
  color: #ff3333;
  @media screen and (max-width: 42px) {
    font-size: 10px;
    line-height: 13.5px;
  }
`;

export const DetailsPerDiscButton = styled.button`
  width: 72px;
  height: 34px;
  border-radius: 62px;
  background-color: #ff33331a;
  @media screen and (max-width: 42px) {
    width: 42px;
    height: 20px;
  }
`;

export const DetailsBody = styled.p`
  font-weight: 400;
  font-family: "satoshi";
  font-size: 16px;
  line-height: 22px;
  @media screen and (max-width: 425px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const DetailsSizeButton = styled.button`
  border-radius: 62px;
  margin-right: 12px;
  padding: 12px 24px;
  color: #000;
  background-color: #f0f0f0;
  @media screen and (max-width: 425px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const DetailsCounter = styled.p`
  color: #000;
  background-color: #f0f0f0;
  width: 210px;
  height: 52px;
  border-radius: 62px;
  padding: 16px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 425px) {
    width: 110px;
  }
`;

export const DetailsAddToBasketButton = styled.button`
  border-radius: 62px;
  padding: 16px 54px;
  background-color: #000000;
  color: #fff;
  width: 100%;
  @media screen and (max-width: 425px) {
    width: 236px;
  }
`;

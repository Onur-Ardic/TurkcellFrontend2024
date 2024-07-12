"use client";
import styled, { css } from "styled-components";

// Common styles
const commonTextStyle = css`
  font-family: "satoshi";
  margin: 0;
`;

const buttonStyle = css`
  border-radius: 62px;
  padding: 16px 54px;
`;

const responsiveImageStyle = css`
  @media screen and (max-width: 425px) {
    width: 100%;
    height: auto;
  }
`;

// Titles and text
export const ArrivalsTitle = styled.h1`
  ${commonTextStyle};
  font-size: 48px;
  font-weight: 700;
  font-family: "Integral CF Bold";
  text-align: center;
  margin-bottom: 55px;
`;

export const Ranking = styled.h6`
  ${commonTextStyle};
  font-size: 14px;
  line-height: 18.9px;
  font-weight: 400;
`;

export const Price = styled.h4`
  ${commonTextStyle};
  font-size: 24px;
  line-height: 32.4px;
  font-weight: 700;
`;

export const Discount = styled(Price)`
  color: rgba(141, 141, 141, 0.4);
  text-decoration: line-through;
`;

export const PerDisc = styled.h6`
  ${commonTextStyle};
  font-size: 12px;
  font-weight: 500;
  line-height: 16.2px;
  /* color: #ff3333; */
`;

// Buttons
export const PerDiscButton = styled.button`
  width: 58px;
  height: 28px;
  border-radius: 62px;
  padding: 6px 14px;
  background-color: #ff33331a;
`;

export const ViewAllButton = styled.button`
  ${buttonStyle};
  width: 218px;
  height: 52px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 36px;
`;

// Image containers
export const ImageContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 295px;
  height: 298px;
  ${responsiveImageStyle};
`;

export const SmallImageContainer = styled.div`
  position: relative;
  width: 152px;
  height: 168px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 14px;
  @media screen and (max-width: 425px) {
    margin-right: 12px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const BigImageContainer = styled.div`
  position: relative;
  width: 444px;
  height: 530px;
`;

// Product details
export const DetailsProductName = styled.h1`
  ${commonTextStyle};
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
  ${commonTextStyle};
  font-size: 32px;
  line-height: 43.2px;
`;

export const DetailsDiscount = styled(DetailsPrice)`
  color: rgba(0, 0, 0, 0.4);
  text-decoration: line-through;
`;

export const DetailsPerDisc = styled.h1`
  ${commonTextStyle};
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
  ${commonTextStyle};
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  @media screen and (max-width: 425px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const DetailsDivider = styled.hr`
  border: 1px solid;
  width: 100%;
  color: rgba(0, 0, 0, 0.3);
  margin: 18px 0;
`;

export const DetailsSizeButton = styled.button`
  border-radius: 62px;
  margin-right: 12px;
  padding: 12px 24px;
  color: #000;
  background-color: #f0f0f0;
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
  ${buttonStyle};
  background-color: #000000;
  color: #fff;
  width: 100%;
  @media screen and (max-width: 425px) {
    width: 236px;
  }
`;

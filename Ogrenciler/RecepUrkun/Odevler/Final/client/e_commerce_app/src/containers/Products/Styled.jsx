"use client";
import styled from "styled-components";

const fontFamily = "satoshi";
const fontSize = {
  large: "48px",
  medium: "24px",
  small: "14px",
  xsmall: "12px",
};
const lineHeight = {
  large: "64px",
  medium: "32.4px",
  small: "18.9px",
  xsmall: "16.2px",
};

const mediaQueries = {
  smallScreen: "@media screen and (max-width: 425px)",
};

const commonHeadingStyles = styled.h1`
  font-family: ${fontFamily};
  font-weight: 700;
`;

export const ArrivalsTitle = styled(commonHeadingStyles)`
  font-size: ${fontSize.large};
  text-align: center;
  margin-bottom: 55px;
  font-family: "Integral CF Bold";
`;

export const ProductName = styled(commonHeadingStyles)`
  font-size: 20px;
  line-height: 27px;
  ${mediaQueries.smallScreen} {
    font-size: 16px;
    line-height: 21.6px;
  }
`;

export const Ranking = styled(commonHeadingStyles)`
  font-size: ${fontSize.small};
  line-height: ${lineHeight.small};
  font-weight: 400;
`;

export const Price = styled(commonHeadingStyles)`
  font-size: ${fontSize.medium};
  line-height: ${lineHeight.medium};
  ${mediaQueries.smallScreen} {
    font-size: 20px;
    line-height: 27px;
  }
`;

export const Discount = styled(Price)`
  color: rgba(141, 141, 141, 0.4);
  text-decoration: line-through;
`;

export const PerDisc = styled(commonHeadingStyles)`
  font-size: ${fontSize.xsmall};
  font-weight: 500;
  line-height: ${lineHeight.xsmall};
  color: #ff3333;
  ${mediaQueries.smallScreen} {
    font-size: 10px;
    line-height: 13.5px;
  }
`;

export const PerDiscButton = styled.button`
  width: 58px;
  height: 28px;
  border-radius: 62px;
  background-color: #ff33331a;
  ${mediaQueries.smallScreen} {
    width: 42px;
    height: 20px;
  }
`;

export const ViewAllButton = styled.button`
  border: 1px solid rgba(141, 141, 141, 0.4);
  border-radius: 62px;
  padding: 16px 54px;
  margin-top: 36px;
`;

export const Divider = styled.hr`
  border: 1px solid;
  width: 100%;
  margin: 64px 0;
`;

export const ImageContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 295px;
  height: 298px;
  margin-right: 20px;
  ${mediaQueries.smallScreen} {
    width: 180px;
    height: 200px;
  }
`;

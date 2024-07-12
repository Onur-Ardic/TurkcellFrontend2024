"use client";
import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: #f2f0f1;
`;

export const HeroTitle = styled.h1`
  font-size: 64px;
  font-weight: 700;
  font-family: "Integral CF Bold";
  margin-top: 105px;
  line-height: 64px;
  color: #000;
  @media screen and (max-width: 425px) {
    font-size: 36px;
    line-height: 34px;
    margin-top: 40px;
  }
`;

export const HeroP = styled.p`
  font-family: "satoshi";
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 32px;
  @media screen and (max-width: 425px) {
    font-size: 14px;
    line-height: 20px;
    margin-top: 20px;
  }
`;

export const HeroButton = styled.button`
  background-color: #000;
  border-radius: 62px;
  padding: 16px 54px;
  color: #fff;
  @media screen and (max-width: 425px) {
    font-size: 14px;
    line-height: 20px;
    margin-top: 20px;
    width: 100%;
  }
`;

export const HeroNumber = styled.h5`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  font-family: "satoshi";
  color: #000;
`;

export const HeroInf = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  font-family: "satoshi";
  color: rgba(0, 0, 0, 0.6);
`;

export const VerticalDivider = styled.hr`
  margin-left: 32px;
  margin-right: 32px;
  color: black;
  width: 1px;
`;

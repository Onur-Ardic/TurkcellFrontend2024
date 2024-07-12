"use client";
import styled from "styled-components";

export const DressWrapper = styled.div`
  background-color: #f0f0f0;
  margin-top: 80px;
  border-radius: 40px;
`;

export const DressTitle = styled.h1`
  font-size: 48px;
  line-height: 57.6px;
  text-align: center;
  font-weight: 700;
  font-family: "Integral CF Bold";
  margin-top: 70px;
  margin-bottom: 64px;
  color: #000;
`;

export const BrowseImageContainer = styled.div`
  position: relative;
  max-width: 407px;
  /* height: 289px; */
  height: 100%;
  border-radius: 20px;
  overflow: hidden; /* Bu, köşe yuvarlamalarını düzgün göstermek için gereklidir */
`;

export const CategoryName = styled.h3`
  position: absolute;
  z-index: 1;
  font-size: 36px;
  font-family: "satoshi";
  padding-top: 25px;
  padding-left: 36px;
  font-weight: 700;
  line-height: 48.8px;
  color: #000;
`;

export const BrowseImageContainer2 = styled(BrowseImageContainer)`
  max-width: 684px;
`;

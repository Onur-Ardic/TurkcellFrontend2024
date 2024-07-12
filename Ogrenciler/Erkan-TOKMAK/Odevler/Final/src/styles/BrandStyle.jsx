"use client"
import styled from 'styled-components';

export const BrandsSection = styled.section`
  max-width: 100%;
  width: 100%;
  min-height: 122px;
  max-height: 146px;
  background-color: #000;
  display: flex;
  align-items:center;
`;

export const BrandsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  max-height: 122px;
  justify-content: space-between;
  padding: 44px 0;
  gap: var(--gap-7xl);
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gap-9xl);
  }
`;

export const BrandLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const ImageWrapper = styled.div`
  width: auto;
  height: 33.164px;
  @media screen and (max-width: 768px) {
    width: auto;
    height: 23.255px;
  }
`;
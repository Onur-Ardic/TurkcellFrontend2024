"use client";

import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-evenly;
  background-color: #f2f0f1;
  padding: 70px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 40%;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: IntegralCF;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  padding: 12px 32px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

export const FeatureWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FeatureItem = styled.div`
  text-align: center;
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const ImageWrapper = styled.div`
  img {
    max-width: 130%;
    max-height: 110%;
    position: relative;
    top: -70px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const BrandsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 122px;
  position: relative;
  top: -110px;
  background-color: black;
  gap: 100px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
    padding: 30px;
    height: 250px;
    top: 0;
  }
`;

export const BrandItem = styled.div`
  text-align: center;
  width: 120px;
  height: 50px;
  line-height: 50px;

  @media (max-width: 768px) {
    width: calc(50% - 10px);
  }
`;

"use client";

import styled from "styled-components";

export const BrowseByDressStyleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  max-width: 1239px;
  background: rgba(240, 240, 240, 1);
  border-radius: 40px;
  margin: 20px auto;

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 0;
  }
`;
export const SectionTitle = styled.h2`
  font-family: IntegralCF;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const StyleGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyleGridTop = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
 
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyleGridBottom = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyleCardBase = styled.div`
  width: 100%;
  height: 289px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const StyleCardCasual = styled(StyleCardBase)`
  width: 100%;
  max-width: 407px;
  background-image: url("https://r.resimlink.com/xYoW-eq.png");
  background-size: 130%;
  background-repeat: no-repeat;
  background-position: 3% 80%;
  padding: 20px;

  a {
    font-size: 28px;
    font-weight: bold;
    padding: 15px;
    margin-bottom: 20px;
    color: black;
    
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const StyleCardFormal = styled(StyleCardBase)`
  width: 100%;
  max-width: 684px;
  background-image: url("https://r.resimlink.com/jRey7.png");
  background-size: 150%;
  background-repeat: no-repeat;
  background-position: 0% 30%;
  padding: 20px;

  a {
    font-size: 28px;
    font-weight: bold;
    padding: 15px;
    margin-bottom: 20px;
    color: black;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const StyleCardParty = styled(StyleCardBase)`
  width: 100%;
  max-width: 684px;
  background-image: url("https://r.resimlink.com/QONTLD0vX-.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  padding: 20px;

  a {
    font-size: 28px;
    font-weight: bold;
    padding: 15px;
    margin-bottom: 20px;
    color: black;

  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const StyleCardGym = styled(StyleCardBase)`
  width: 100%;
  max-width: 407px;
  background-image: url("https://r.resimlink.com/dDfx7.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 1% 50%;
  padding: 20px;

  a {
    font-size: 28px;
    font-weight: bold;
    padding: 15px;
    margin-bottom: 20px;
    color: black;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

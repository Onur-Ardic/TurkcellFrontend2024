"use client";

import styled from "styled-components";

export const NewArrivalsSection = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid rgb(205, 205, 205);
  padding: 100px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: IntegralCF;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ViewAllButton = styled.button`
  width: 218px;
  padding: 16px 54px 16px 54px;
  border-radius: 62px;
  margin: 0 auto;
  border: 1px;
  opacity: 0px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 160px;
    padding: 12px 36px;
  }
`;
export const ViewLessButton = styled.button`
  width: 218px;
  padding: 16px 54px 16px 54px;
  border-radius: 62px;
  margin: 0 auto;
  border: 1px;
  opacity: 0px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 160px;
    padding: 12px 36px;
  }
`;

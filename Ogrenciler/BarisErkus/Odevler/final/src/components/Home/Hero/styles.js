"use client";

import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 80px 0;
  background-color: #f2f0f1;
  color: #000;
  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const Container = styled.div`
  padding: 100px 0;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const StyledLandingMobile = styled.div`
  height: 448px;
`;

export const H1 = styled.h1`
  font-size: 64px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StatsWrapper = styled.div`
  @media (max-width: 768px) {
    border: none;
    align-items: center;
    justify-content: center;
  }
`;

export const StatsItem = styled.div`
  border-right: 1px solid #0000001a;
  padding: 0 25px 0 0;
  @media (max-width: 768px) {
    border: none;
    padding: 0;
  }

  &:last-child {
    border: none;
  }
`;

export const StatsNum = styled.span`
  font-size: 40px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const StatsParagraph = styled.p`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

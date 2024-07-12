"use client";
import styled from "styled-components";

export const Section = styled.section`
  margin-top: 80px;
`;

export const H2 = styled.h2`
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const StyledButton = styled.button`
  position: relative;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
`;

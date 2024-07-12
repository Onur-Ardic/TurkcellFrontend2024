"use client";

import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: #f0f0f0;
  width: 350px;
  height: 48px;
  border-radius: 62px;
  padding: 12px 16px 12px 16px;
  gap: 0.5rem;
`;
export const Logo = styled.p`
  a {
    font-family: IntegralCF;
    font-size: 36px;
    font-weight: bold;
    text-decoration: none;
   
  }
`;
export const SearchInput = styled.input`
  padding: 0.5rem;
  border: none;
  background: none;
  border-radius: 4px;
`;

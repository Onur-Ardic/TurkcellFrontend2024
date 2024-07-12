"use client";
import styled from "styled-components";

export const IconsWrapper = styled.div`
  > *:first-child {
    display: none;
  }
  @media (max-width: 991px) {
    > *:first-child {
      display: block;
    }
  }
`;

export const ThemeChangerWrapper = styled.button`
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  transition: background-color 0.3s;
  width: 70px;
`;

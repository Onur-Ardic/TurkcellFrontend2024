"use client";
import styled from "styled-components";

export const ShopCoTitle = styled.h3`
  font-size: 33.45px;
  line-height: 40.15px;
  font-weight: 700;
  font-family: "Integral CF Bold";
  color: ${(props) => props.theme.text};
  @media screen and (max-width: 425px) {
    font-size: 28.85px;
    line-height: 34.62px;
  }
`;

export const NavbarSearch = styled.input`
  max-width: 577px;
  max-height: 48px;
  border-radius: 62px;
  padding: 12px 16px;
  background-color: ${(props) => props.theme.inputBackground};
  color: ${(props) => props.theme.text};
`;

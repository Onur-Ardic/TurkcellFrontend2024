"use client";
import styled from "styled-components";

export const BannerTitle = styled.h6`
  font-size: 0.875rem;
  font-weight: 400;
  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;

export const BannerSignUpNow = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: underline;
  margin-left: 0.25rem;
  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;

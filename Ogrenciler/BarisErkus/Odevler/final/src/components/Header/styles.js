"use client";
import { Link } from "@/navigation";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: black;
  color: white;
  padding: 10px 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TextWrapper = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
`;

export const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;

  @media (max-width: 480px) {
    :first-child {
      display: none;
    }
  }
`;

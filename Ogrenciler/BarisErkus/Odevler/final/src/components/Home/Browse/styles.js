"use client";
import { Link } from "@/navigation";
import styled from "styled-components";

export const Main = styled.main`
  background-color: var(--tertiary);
`;

export const StyledLink = styled(Link)`
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const StyledCard = styled.div`
  height: 290px;
`;

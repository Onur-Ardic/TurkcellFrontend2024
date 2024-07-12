"use client";

import { Link } from "@/navigation";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: var(--secondary);

  &:hover {
    color: var(--secondary);
    transform: scale(1.1);
    transition: all 0.3s;
  }

  &:focus {
    color: var(--secondary);
    font-weight: bold;
  }
`;

export const Nav = styled.nav`
  background-color: var(--primary);
  color: var(--secondary);
`;

export const H1 = styled.h1`
  color: var(--secondary);
`;

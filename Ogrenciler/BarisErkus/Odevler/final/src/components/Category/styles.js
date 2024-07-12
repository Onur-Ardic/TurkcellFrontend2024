"use client";
import styled from "styled-components";

export const PaginationButton = styled.button`
  background-color: var(--primary);
  color: var(--secondary);
  border: 1px solid var(--secondary);
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    background-color: var(--secondary);
    color: var(--primary);
  }
`;

export const FilterButtonWrapper = styled.div`
  cursor: pointer;
`;

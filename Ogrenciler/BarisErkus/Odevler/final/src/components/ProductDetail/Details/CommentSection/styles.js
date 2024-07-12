"use client";
import styled from "styled-components";

export const Select = styled.select`
  width: 100px;
  color: var(--secondary);
`;

export const Option = styled.option`
  color: var(--secondary);
  background-color: var(--primary);
`;

export const FilterButton = styled.button`
  background-color: var(--primary);
  color: var(--secondary);
  border: 1px solid var(--secondary);
  padding: 10px 20px;
  border-radius: 62px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const ModalContent = styled.div`
  background-color: var(--primary);
  color: var(--secondary);
`;

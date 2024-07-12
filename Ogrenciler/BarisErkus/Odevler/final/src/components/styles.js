"use client";
import styled from "styled-components";

export const StyledButton = styled.button`
  color: var(--secondary);
  background-color: var(--primary);
  border: 1px solid var(--secondary);
  margin-top: 32px;
  margin-bottom: 48px;
  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    background-color: var(--secondary);
    color: var(--primary);
  }
`;

export const Option = styled.div`
  display: inline-block;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 5px;
  border: 1px solid gray;
  cursor: pointer;
  position: relative;
`;

export const Tick = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ color }) => (color === "#FFFFFF" ? "black" : "white")};
`;

export const IconWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
`;

export const Container = styled.div`
  border-bottom: 1px solid var(--tertiary);
`;

export const Row = styled.div`
  margin-top: 72px;
`;

export const H2 = styled.h2`
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const SizeOption = styled.button`
  border: ${(props) => (props.selected ? "1px solid #e0e0e0" : "none")};
  background-color: ${(props) => (props.selected ? "black" : "#e0e0e0")};
  color: ${(props) => (props.selected ? "white" : "black")};
  padding: 12px 24px;
  margin: 5px;
  border-radius: 62px;
  cursor: pointer;
`;

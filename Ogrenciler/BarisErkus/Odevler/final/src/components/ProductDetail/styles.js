"use client";
import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  @media (max-width: 992px) {
    flex-wrap: wrap-reverse;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
`;

export const LitteImages = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 992px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
`;

export const LittleImageContainer = styled.div`
  width: 150px;
  height: 150px;
  cursor: pointer;
  position: relative;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 425px) {
    width: 100px;
    height: 100px;
  }
`;

export const BigImage = styled.div`
  @media (max-width: 1200px) {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BigImageContainer = styled.div`
  width: 400px;
  height: 485px;
  position: relative;
  @media (max-width: 425px) {
    width: 270px;
    height: 350px;
  }
`;

export const AccordionButton = styled.button`
  background-color: var(--primary);
  color: var(--secondary);
`;

export const AccordionBody = styled.div`
  background-color: var(--primary);
  color: var(--secondary);
`;

export const TitleItem = styled.button`
  font-size: 16px;
  transition: color 0.3s;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 4px 8px;
  }
`;

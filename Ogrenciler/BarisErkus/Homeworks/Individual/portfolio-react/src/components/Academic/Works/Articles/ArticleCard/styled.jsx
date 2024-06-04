import styled from "styled-components";
import { primary, tertiary } from "../../../../../common/colors";

export const A = styled.a`
  color: ${tertiary};
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 50px;
  cursor: pointer;
  border-bottom: 1px solid ${primary};
`;

export const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export const Title = styled.h2`
  font-size: 1.7rem;
  font-weight: bold;
  margin: 20px 0;
  color: ${tertiary};
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

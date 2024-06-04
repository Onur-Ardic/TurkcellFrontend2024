import styled from "styled-components";
import { primary, tertiary } from "../../../../../common/colors";

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
  width: 500px;
  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
  margin: 20px 0;
  color: ${tertiary};
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

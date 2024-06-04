import styled from "styled-components";
import { primary, tertiary } from "./colors";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.alignitems || "start"};
  justify-content: ${(props) => props.justifycontent || "start"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "50px"};
  gap: 20px;
  background-color: ${(props) => props.bgcolor || primary};
  @media (max-width: 1100px) {
    flex-wrap: wrap;
    text-align: center;
  }
  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px;
  width: ${(props) => props.width || "100%"};
  @media (max-width: 1100px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.color || "white"};
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: white;
  max-width: ${(props) => props.mw || "1070px"};
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const A = styled.a`
  background-color: ${tertiary};
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  padding: ${(props) => props.padding || "10px 20px"};
  font-size: ${(props) => props.fontSize || "1rem"};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: ${tertiary};
  }
  &:focus {
    outline: 2px solid ${tertiary};
    outline-offset: 4px;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 10px 20px;
  }
`;

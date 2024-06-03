import styled from "styled-components";
import { primary, tertiary } from "./colors";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.alignitems || "start"};
  justify-content: ${(props) => props.justifycontent || "start"};
  height: 100vh;
  padding-top: 50px;
  gap: 20px;
  background-color: ${(props) => props.bgcolor || primary};
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px;
  width: ${(props) => props.width || "100%"};
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  text-align: center;
  max-width: 1070px;
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
`;

import styled from "styled-components";
import { primary } from "../../../../../common/colors";

const Card = styled.div`
  display: flex;
  gap: 50px;
  padding: 20px 50px 70px 0;
  border-bottom: 1px solid ${primary};
  align-items: center;
  @media (max-width: 1850px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
`;

const Image = styled.img`
  width: 300px;
  border-radius: 10px;
  @media (max-width: 600px) {
    width: 250px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.color || "white"};
  text-align: ${(props) => props.textalign || "center"};
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: ${(props) => props.size || "1.25rem"};
  max-width: 500px;
  color: ${(props) => props.color || "white"};
  font-weight: ${(props) => props.fw || "normal"};
  text-align: ${(props) => props.textalign || "start"};
  @media (max-width: 1850px) {
    text-align: start;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export { Card, CardContainer, Image, Title, Paragraph };

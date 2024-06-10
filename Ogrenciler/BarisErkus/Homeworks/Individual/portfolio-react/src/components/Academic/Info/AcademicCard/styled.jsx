import styled from "styled-components";
import { secondary } from "../../../../common/colors";

const Card = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: ${(props) => props.padding || "20px 50px"};
  border-radius: ${(props) => props.br || "30px"};
  background-color: ${secondary};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: 1850px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 600px) {
    padding: 20px;
    border-radius: 10px;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  ${(props) =>
    props.direction === "row" ? "width: 100%; flex-wrap: wrap;" : ""}
`;

const Title = styled.h2`
  font-size: ${(props) => props.titlefs || "1.5rem"};
  font-weight: bold;
  text-align: start;
  color: ${(props) => props.color || "white"};
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.15rem;
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

export { Card, Col, Title, Paragraph };

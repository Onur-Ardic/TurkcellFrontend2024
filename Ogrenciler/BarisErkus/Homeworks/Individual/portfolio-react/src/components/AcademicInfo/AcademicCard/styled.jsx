import styled from "styled-components";
import { secondary } from "../../../common/colors";

const Card = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 20px 50px;
  border-radius: 10px;
  background-color: ${secondary};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  max-width: 550px;
  color: ${(props) => props.color || "white"};
  font-weight: ${(props) => props.fw || "normal"};
  text-align: ${(props) => props.textalign || "start"};
`;

export { Card, Col, Title, Paragraph };

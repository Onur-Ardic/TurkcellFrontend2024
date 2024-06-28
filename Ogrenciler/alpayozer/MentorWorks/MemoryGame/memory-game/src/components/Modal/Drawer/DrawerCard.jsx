import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from "../../Card/card-styled";
import { ModalCard, ModalCardText } from "./modal-styled";

const DrawerCard = ({ data }) => {
  return (
    <ModalCard href={data.link} target="blank">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={4} sm={4} xs={4}>
            <Image loading="lazy" src={data.src} alt={data.title} />
          </Col>
          <Col lg={8} sm={8} xs={8}>
            <ModalCardText>{data.title}</ModalCardText>
          </Col>
        </Row>
      </Container>
    </ModalCard>
  );
};

export default DrawerCard;

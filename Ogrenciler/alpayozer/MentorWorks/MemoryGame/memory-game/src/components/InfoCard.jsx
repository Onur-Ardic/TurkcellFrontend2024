import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const InfoCard = ({ data }) => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <Image style={{ width: "80px" }} src={data.src} alt="html" />
        </Col>
        <Col lg={8}>
          <p>{data.title}</p>
          <a href={data.link} target="blank">
            Go to website
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoCard;

"use client";
import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslations } from "next-intl";

const SectionFour = styled.section`
  padding: 50px 0;
  text-align: center;
  background-color: #f8f9fa;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 30px;
  font-weight: bold;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  text-align: left;
`;

const CardText = styled.p`
  font-size: 1em;
  margin-top: 15px;
`;

const CustomerName = styled.h5`
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 15px;
`;

const Rating = styled.div`
  color: #ffc107;
  font-size: 1.5em;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const Col = styled.div`
  flex: 1;
  padding: 0 15px;
  max-width: 50%; /* 2 columns */
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CommentDetail = ({ comments = [] }) => {
  if (!comments.length) return null;
  const t = useTranslations("Section4");
  return (
    <SectionFour>
      <Container>
        <Title>{t("commnets")}</Title>
        <Row>
          {comments.map((comment) => (
            <Col key={comment.id}>
              <Card>
                <Rating>
                  {"★".repeat(comment.rating)}
                  {"☆".repeat(5 - comment.rating)}
                </Rating>
                <CardText>{comment.content}</CardText>
                <CustomerName>{comment.user}</CustomerName>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </SectionFour>
  );
};

export default CommentDetail;

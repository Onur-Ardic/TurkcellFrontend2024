import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  max-width: 300px;
  text-align: left;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const NewsLink = styled.a`
  display: block;
  margin-top: 8px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function NewsCard({ article }) {
  return (
    <Card>
      <Title>{article.title}</Title>
      <Description>{article.description}</Description>
      {article.urlToImage && (
        <Image src={article.urlToImage} alt={article.title} />
      )}
      <NewsLink href={article.url} target="_blank">
        Read More
      </NewsLink>
    </Card>
  );
}

export default NewsCard;

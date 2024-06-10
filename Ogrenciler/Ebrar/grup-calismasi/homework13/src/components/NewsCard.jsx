import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
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
  if (!article.title || article.title === "[Removed]") {
    return null;
  }
  return (
    <Card>
      <Title>{article.title ? article.title : "Haber Bulunamadı."}</Title>
      <Description>
        {article.description ? article.description : "Açıklama Bulunamadı."}
      </Description>
      {article.urlToImage ? (
        <Image src={article.urlToImage} alt={article.title} />
      ) : (
        <Image src="https://i.hizliresim.com/qlb5v2w.jpg" />
      )}
      <NewsLink href={article.url} target="_blank">
        Read More
      </NewsLink>
    </Card>
  );
}

export default NewsCard;

import React from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  DetailContainer,
  DetailImage,
  DetailContent,
  DetailTitle,
  DetailText,
  DetailFooter,
  DetailDate,
  ReadMore,
} from "./card-styled";

const NewsDetailView = () => {
  const { id } = useParams();
  const location = useLocation();
  const article = location.state;

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <DetailContainer className="container">
      <DetailContent>
        <DetailTitle>{article.title}</DetailTitle>
        <DetailText>{article.description}</DetailText>
        <DetailFooter>
          <ReadMore href={article.url} target="_blank">
            Read More
          </ReadMore>
          <DetailDate>
            {new Date(article.publishedAt).toLocaleDateString()}
          </DetailDate>
        </DetailFooter>
      </DetailContent>
      <DetailImage
        src={
          article.urlToImage
            ? article.urlToImage
            : "https://i.pinimg.com/564x/7b/ba/bd/7bbabdec77d8c5844cd8f54e85a738ad.jpg"
        }
        alt={article.title}
      />
    </DetailContainer>
  );
};

export default NewsDetailView;

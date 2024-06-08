import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../styled";

const NewsCard = ({ news }) => {
  const navigate = useNavigate();
  const defaultImage =
    "https://png.pngtree.com/png-vector/20201027/ourmid/pngtree-breaking-news-banner-lower-png-image_2378724.jpg";

  const description = news.description?.slice(0, 100);
  console.log(description);

  return (
    <Card onClick={() => navigate(`${news.title}`, { state: news })}>
      <img src={news.urlToImage ? news.urlToImage : defaultImage} />
      <h1>{news.title}</h1>
      <h6>{news.author}</h6>
      <p>{description}...</p>
    </Card>
  );
};

export default NewsCard;

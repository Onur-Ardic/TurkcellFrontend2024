import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getNews } from "../Request";
import NewsCard from "./NewsCard";

const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
`;

function NewsList({ category }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews(category);
      setNews(data);
    };
    fetchNews();
  }, [category]);

  return (
    <NewsContainer>
      {news.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </NewsContainer>
  );
}

export default NewsList;

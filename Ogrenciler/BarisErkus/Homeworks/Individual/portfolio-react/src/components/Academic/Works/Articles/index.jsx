import { useEffect, useState } from "react";
import { Title } from "../../../../common/styled";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const articlesImages = [
    "package.webp",
    "gygy.webp",
    "hat.webp",
    "evolution.webp",
    "constructor.webp",
  ];

  const endpoint =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@baris.erkus";
  const readArticles = async () => {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("Error");
    }
    const result = await response.json();
    console.log(result);
    setArticles(result.items);
  };
  useEffect(() => {
    readArticles();
  }, []);

  return (
    <section aria-labelledby="articles-title">
      <Title as="h2" id="articles-title">
        Articles
      </Title>
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          img={articlesImages[index]}
          title={article.title}
          href={article.href}
        />
      ))}
    </section>
  );
};

export default Articles;

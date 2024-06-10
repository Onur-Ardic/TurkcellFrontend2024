import { useEffect, useState } from "react";
import { Title } from "../../../../common/styled";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const articlesImages = [
    "package.png",
    "gygy.png",
    "hat.png",
    "evolution.png",
    "constructor.png",
  ];

  const endpoint =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@baris.erkus";

  const readArticles = async () => {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch articles.");
      }
      const result = await response.json();
      setArticles(result.items);
    } catch (error) {
      console.error("Error fetching articles:", error.message);
    }
  };

  useEffect(() => {
    readArticles();
  }, []);

  return (
    <>
      <section aria-labelledby="articles-title">
        <Title as="h2" id="articles-title">
          Articles
        </Title>
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            img={articlesImages[index % articlesImages.length]} // Handling if articlesImages is smaller than articles
            title={article.title}
            href={article.link}
          />
        ))}
      </section>
    </>
  );
};

export default Articles;

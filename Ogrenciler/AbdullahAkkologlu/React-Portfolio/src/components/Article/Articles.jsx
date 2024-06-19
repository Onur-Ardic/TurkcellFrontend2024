import { useEffect, useState } from "react";
import Article from "./Article";
import { Heading, PaddingY, RowBetween } from "../../styles";
import { articlesData } from "../../data";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [userDetails, setUserDetails] = useState({});

  const fetchData = () => {
    try {
      setArticles(articlesData[0].items);
      setUserDetails(articlesData[0].feed);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Heading id="articlesHeading">— Articles —</Heading>
      <PaddingY>
        <RowBetween>
          {articles.map((article, index) => (
            <Article key={index} article={article} user={userDetails} />
          ))}
        </RowBetween>
      </PaddingY>
    </>
  );
};

export default Articles;

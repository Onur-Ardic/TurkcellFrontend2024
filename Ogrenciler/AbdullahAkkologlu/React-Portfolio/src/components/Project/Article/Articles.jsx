import { useEffect, useState } from "react";
import { readArticles } from "../../../request";
import Article from "./Article";
import { Container, Heading, RowBetween } from "../../../styles";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const fetchData = async () => {
    const result = await readArticles();
    setArticles(result.items);
    setUserDetails(result.feed);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Heading id="articlesHeading">— Articles —</Heading>
      <RowBetween>
        {articles.map((article, index) => (
          <Article key={index} article={article} user={userDetails} />
        ))}
      </RowBetween>
    </Container>
  );
};

export default Articles;

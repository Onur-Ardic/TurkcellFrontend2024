import { useEffect, useState } from "react";
import { readArticles } from "../../../request";
import Article from "./Article";
import { Container, RowBetween } from "../../../styles";

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
  console.log(articles);
  console.log(userDetails);
  return (
    <Container>
      <RowBetween>
        {articles.map((article, index) => (
          <Article key={index} article={article} user={userDetails} />
        ))}
      </RowBetween>
    </Container>
  );
};

export default Articles;

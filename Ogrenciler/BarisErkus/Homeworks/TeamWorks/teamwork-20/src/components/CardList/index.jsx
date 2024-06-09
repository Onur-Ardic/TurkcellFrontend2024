import { useEffect, useState } from "react";
import { CardContainer, Search } from "../../common/styled";
import NewsCard from "../NewsCard";

const CardList = ({ category }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");

  const url = `https://newsapi.org/v2/top-headlines?country=tr&category=${category}&q=${text}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "1c1772bbfd4c41169acdab14b606a2ea",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      });
  }, [text, category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Search
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <CardContainer>
        {news.map((item, index) => (
          <NewsCard key={index} item={item} />
        ))}
      </CardContainer>
    </>
  );
};

export default CardList;

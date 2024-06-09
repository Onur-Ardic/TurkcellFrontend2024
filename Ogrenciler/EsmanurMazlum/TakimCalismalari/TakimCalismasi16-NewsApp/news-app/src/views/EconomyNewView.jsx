import { useEffect, useState } from "react";
import Requests from "../Requests";

const EconomyNewView = () => {
  const [economyNews, setEconomyNews] = useState([]);

  const getNews = () => {
    Requests.get("business")
      .then((response) => {
        if (response.status === "ok") {
          setEconomyNews(response.articles);
        } else {
          console.error("Beklenmeyen veri formatı:", response);
          setEconomyNews([]);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <h1>Economy News</h1>
      {economyNews.length > 0 ? (
        economyNews.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.author}</p>
          </div>
        ))
      ) : (
        <p>Yüklenecek ekonomi haberi bulunamadı</p>
      )}
    </div>
  );
};

export default EconomyNewView;

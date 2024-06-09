import { useEffect, useState } from "react";
import Requests from "../Requests";

const SportNewView = () => {
  const [sportNews, setSportNews] = useState([]);

  const getNews = () => {
    Requests.get("sport")
      .then((response) => {
        if (response.status === "ok") {
          setSportNews(response.articles);
        } else {
          console.error("Beklenmeyen veri formatı:", response);
          setSportNews([]);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <h1>Sport News</h1>
      {sportNews.length > 0 ? (
        sportNews.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.author}</p>
          </div>
        ))
      ) : (
        <p>Yüklenecek spor haberi bulunamadı</p>
      )}
    </div>
  );
};

export default SportNewView;

import { useEffect, useState } from "react";
import Requests from "../Requests";

const HealthNewView = () => {
  const [healthNews, setHealthNews] = useState([]);

  const getNews = () => {
    Requests.get("health")
      .then((response) => {
        if (response.status === "ok") {
          setHealthNews(response.articles);
        } else {
          console.error("Beklenmeyen veri formatı:", response);
          setHealthNews([]);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <h1>Health News</h1>
      {healthNews.length > 0 ? (
        healthNews.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.author}</p>
          </div>
        ))
      ) : (
        <p>Yüklenecek sağlık haberi bulunamadı</p>
      )}
    </div>
  );
};

export default HealthNewView;

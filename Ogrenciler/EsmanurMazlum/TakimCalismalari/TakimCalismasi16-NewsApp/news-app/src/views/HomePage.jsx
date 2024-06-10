import { useEffect, useState } from "react";
import Requests from "../Requests";

function HomePage() {
  const [homeNews, setHomeNews] = useState([]);

  const getNews = () => {
    Requests.get("")
      .then((response) => {
        if (response.status === "ok") {
          setHomeNews(response.articles);
        } else {
          setHomeNews([]);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <h1>Home Pagedesin</h1>
      <div className="d-flex flex-wrap">
        {homeNews.length > 0 ? (
          homeNews.map((item) => (
            <div className="col-3 border m-5" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.author}</p>
            </div>
          ))
        ) : (
          <p>Yüklenecek film bulunamadı</p>
        )}
      </div>
    </>
  );
}

export default HomePage;

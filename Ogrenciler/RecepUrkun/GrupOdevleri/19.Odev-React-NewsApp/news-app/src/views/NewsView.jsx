import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Requests from "../Requests";
import newsImageTr from "../assets/newsImageTr.jpg";
import newsImageEn from "../assets/newsImageEn.jpg";

const NewsView = ({ category, selectedLanguage }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Requests.get(category, selectedLanguage);
        setNews(data.articles);
      } catch (error) {
        console.error("Veri alınamadı: ", error);
      }
    };

    fetchData();
  }, [category, selectedLanguage]);

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Haberleri</h2>
      <div className="d-flex flex-wrap">
        {news.length > 0 &&
          news
            .filter(
              (item) => item.title !== "[Removed]" && item.author !== null
            )
            .map((item, index) => {
              let imageUrl;
              if (selectedLanguage === "tr") {
                imageUrl = newsImageTr;
              } else {
                if (item.urlToImage) {
                  imageUrl = item.urlToImage;
                } else {
                  imageUrl = newsImageEn;
                }
              }

              return (
                <div className="col-3 border m-5" key={item.title}>
                  <img src={imageUrl} alt="" className="img-fluid" />
                  <h3>
                    <Link to={`/haber/${index}`}>{item.title}</Link>
                  </h3>
                  <p>{item.description}</p>
                  <p>{item.author}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default NewsView;

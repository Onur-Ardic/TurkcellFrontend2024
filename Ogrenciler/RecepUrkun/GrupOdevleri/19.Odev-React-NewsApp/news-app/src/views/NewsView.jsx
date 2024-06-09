import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Requests from "../Requests";
import newsImageTr from "../assets/newsImageTr.jpg";
import newsImageEn from "../assets/newsImageEn.jpg";
import "../App.css";

const NewsView = ({ category, selectedLanguage }) => {
  const [news, setNews] = useState([]);

  const fetchNewsData = async () => {
    try {
      const data = await Requests.get(category, selectedLanguage);
      // console.log(data);
      // console.log("articles: ", data.articles);
      setNews(data.articles);
    } catch (error) {
      console.error("Veri alınamadı: ", error);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, [category, selectedLanguage]);

  const dateFormatter = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // const getImageUrl = (item) => {
  //   if (selectedLanguage === "tr") {
  //     return newsImageTr;
  //   } else {
  //     return item.urlToImage || newsImageEn;
  //   }
  // };

  const getImageUrl = (item) => {
    return selectedLanguage === "tr"
      ? newsImageTr
      : item.urlToImage || newsImageEn;
  };

  return (
    <div>
      <h2 className="text-center font-monospace fw-bolder my-3 display-5">
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : "Top 20"}{" "}
        {selectedLanguage == "tr" ? "Haberleri" : "News"}
      </h2>

      {news.length > 0 && (
        <div className="container">
          <div className="col-12 col-md-12 ">
            <div
              id="carouselHaberler"
              className="carousel slide "
              data-bs-ride="carousel"
            >
              <div className="carousel-inner ">
                {news
                  .slice(0, 5)
                  .filter(
                    (item) => item.title !== "[Removed]" && item.author !== null
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${
                        index === 0 ? "active" : ""
                      }  `}
                    >
                      <img
                        src={getImageUrl(item)}
                        className="d-block w-100 img-fluid"
                        alt="..."
                        style={{
                          backgroundImage: `url(${getImageUrl(item)})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          maxHeight: "600px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block overlay rounded-3 p-3">
                        <h5>{item.title.split("-")[0]}</h5>
                        <p className={item.description ? "d-block" : "d-none"}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselHaberler"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselHaberler"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="d-flex flex-wrap justify-content-center container mt-4">
        {news.length > 5 &&
          news
            .slice(5)
            .filter(
              (item) => item.title !== "[Removed]" && item.author !== null
            )
            .map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4 p-4" key={item.title}>
                <div className="card h-100">
                  <img
                    src={getImageUrl(item)}
                    className="card-img-top img-fluid"
                    style={{ minHeight: "250px" }}
                  />
                  <div className="card-body">
                    <div className="d-flex flex-row flex-wrap justify-content-between">
                      <p className="fw-bolder text-break">{item.author}</p>
                      <p className="fw-lighter">
                        {dateFormatter(item.publishedAt)}
                      </p>
                    </div>
                    <hr className="mb-3" />
                    <h5 className="card-title">{item.title.split("-")[0]}</h5>
                    <p className="card-text">{item.description}</p>

                    <Link
                      to={`/haber/${index + 5}`} // carouselde 5 tane haber gösteriyoruz bu yüzden alttaki haberler 5den başlıyor
                      className="text-decoration-none btn btn-sm btn-success text-light"
                    >
                      Haber Detay
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default NewsView;

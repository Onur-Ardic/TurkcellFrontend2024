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

  //* alttaki fonksiyonun daha anlasilir hali
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
          : "Top 20"}
        {selectedLanguage == "tr" ? " Haberler" : " News"}
      </h2>

      {news.length > 0 && (
        <div className="container">
          <div className="col-12 col-md-10 mx-auto">
            <div
              id="carouselHaberler"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              {/* slice ile ilk 5 haberi aliyoruz*/}
              <div className="carousel-inner  rounded-3">
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
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          maxHeight: "600px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block overlay rounded-3 p-3">
                        <p>{item.title.split("-")[0]}</p>
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

      {/*ilk 5 haberi carousale gonderdik geri kalan haberleri slice ile alip cardlara basiyoruz*/}
      <div className="d-flex flex-wrap justify-content-center container my-4">
        {news.length > 5 &&
          news
            .slice(5)
            .filter(
              (item) => item.title !== "[Removed]" && item.author !== null
            )
            .map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4 p-3" key={item.title}>
                <div className="card h-100 shadow-lg rounded-3">
                  {
                    /*to ile ilgii haberin indexini alip yeni sayfa olarak o indexteki haberi aciyoruz, state ile newDetail'e bilgi gonderebiliyoruz, haberlerin icerigini ve hangi dil secili oldugu bilgisini gonderdik cunku haber resimlerini ona gore bastiriyoruz*/
                    /*haberin resmine tiklarsaniz sizi haber detay sayfasina goturur*/
                    <Link
                      to={`/haber/${index}`}
                      state={{
                        haber: item,
                        selectedLanguage: selectedLanguage,
                      }}
                      className=""
                    >
                      <img
                        src={getImageUrl(item)}
                        className="rounded-3 img-fluid"
                        style={{ minHeight: "250px" }}
                      ></img>
                    </Link>
                  }
                  <div className="card-body">
                    <div className="d-flex flex-row flex-wrap justify-content-between">
                      <p className="fw-bolder text-break">{item.author}</p>
                      <p className="fw-lighter">
                        {dateFormatter(item.publishedAt)}
                      </p>
                    </div>
                    <h6 className="card-title text-header fw-bolder">
                      {item.title.split("-")[0]}
                    </h6>
                    {item.description ? (
                      <h6 className="card-text opacity-75">
                        <hr className="mb-3" />
                        <b> News Description: </b> <i> {item.description}</i>
                      </h6>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default NewsView;

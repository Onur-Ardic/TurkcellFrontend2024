import { useParams, useLocation } from "react-router-dom";
import newsImageTr from "../assets/newsImageTr.jpg";
import newsImageEn from "../assets/newsImageEn.jpg";

const NewDetail = () => {
  //useLocation ile bilgi gonderebiliyoruz newsView'dan ve onu burada tutuyoruz boylece tiklanilan haberin bilgilerine erisebiliyoruz
  const location = useLocation();
  const newsInfo = location.state.haber;
  const newsLanguage = location.state.selectedLanguage;
  const { id } = useParams();

  console.log(location); //neler gonderildigini consolda gorebiliriz

  const getImageUrl = (item) => {
    return newsLanguage === "tr" ? newsImageTr : item.urlToImage || newsImageEn;
  };

  return (
    <div className="my-5">
      <h2 className="text-center mb-4">Haber Detayları {id}</h2>
      <div className="container  p-5">
        <div className="card">
          <img src={getImageUrl(newsInfo)} className="card-img-top img-fluid" />
          <div className="card-body">
            <div className="d-flex flex-row flex-wrap justify-content-between">
              <p className="fw-bolder text-break">{newsInfo.author}</p>
              <p className="fw-lighter">{newsInfo.publishedAt}</p>
            </div>
            <p className="card-title">{newsInfo.title.split("-")[0]}</p>
            <p className="fw-lighter">{newsInfo.content}</p>
            <p className="card-text">{newsInfo.description}</p>
            <a
              className="btn btn-warning btn-sm"
              href={newsInfo.url}
              target="_blank"
            >
              Haber Sayfasina Git
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDetail;

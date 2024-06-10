import { useEffect, useState } from "react";
import {
  CardContainer,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  ReadMore,
  LoadingMessage,
} from "./card-styled";
import { getNewsCategory } from "../Request";

const EntertainmentView = () => {
  const [News, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNews = () => {
    setLoading(true);
    getNewsCategory("entertainment")
      .then((response) => {
        if (response.status === "ok") {
          setNews(response.articles);
        } else {
          console.error("Error:", response);
          setNews([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
      <div className="container">
        {loading ? (
          <LoadingMessage>Loading...</LoadingMessage>
        ) : (
          <div className="row">
            {News.map((article, index) => (
              <CardContainer className="col-md-4" key={index}>
                <CardImage
                  src={
                    article.urlToImage
                      ? article.urlToImage
                      : "https://i.pinimg.com/564x/7b/ba/bd/7bbabdec77d8c5844cd8f54e85a738ad.jpg"
                  }
                  alt={article.title}
                />
                <CardBody>
                  <CardTitle>{article.title}</CardTitle>
                  <CardText>{article.description}</CardText>
                </CardBody>
                <CardFooter>
                  <ReadMore href={article.url} target="_blank">
                    Read More
                  </ReadMore>
                  <span>
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </span>
                </CardFooter>
              </CardContainer>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default EntertainmentView;

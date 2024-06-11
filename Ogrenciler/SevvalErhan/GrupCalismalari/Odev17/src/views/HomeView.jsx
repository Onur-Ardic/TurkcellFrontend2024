import { useState, useEffect } from "react";
import { get } from "../api";
import styled from "styled-components";

const defaultImage = "https://c1.wallpaperflare.com/preview/21/93/67/news-yellow-newspaper-3d.jpg";

const Container = styled.div`
    max-width: 1350px;
    margin: auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Col = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 15px;

  @media (min-width: 768px) {
    flex: 0 0 33.333%;
    max-width: 33.333%;
  }
`;

const Card = styled.div`
    max-width: 500px;
     min-height: 250px;
     padding: 10px;
    border-radius: 3px;
     box-sizing: border-box;
     margin:10px;

`;

const CardImage = styled.img`
  max-width: 100%;
  height: 225px;
  border-radius: 5px;

`;

const CardTitle = styled.h5`
  font-size: 1.25rem;
  margin: 15px 0;
`;

const CardText = styled.p`
  color: #555;
`;

const CardLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const HomeView = () => {
  const [data, setData] = useState([]);

  const getImageUrl = (url) => {
    return url ? url : defaultImage;
  };

  useEffect(() => {
    const result = get("general").then((data) => setData(data));
  }, []);


  return (
    <>
    <Container>
   <Row>
     {data.articles?.slice(0, 20).map((article, index) => (
       <Col key={index}>
         <Card>
           <CardImage src={getImageUrl(article.urlToImage)} alt={article.title || "default image"} />
           <CardText>{article.publishedAt}</CardText>
           <CardTitle>{article.title}</CardTitle>
           <CardText>{article.description}</CardText>
           <CardLink href={article.url}>Haberin Detayı...</CardLink>
         </Card>
       </Col>
     ))}
   </Row>
 </Container>
 </>
 
  );
};

export default HomeView;

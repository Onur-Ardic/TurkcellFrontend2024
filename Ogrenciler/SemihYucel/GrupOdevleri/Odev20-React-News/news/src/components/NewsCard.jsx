import { useNavigate } from "react-router-dom";
import { Card, CardAuthor, CardTitle, Image, SourceName } from "../styled";

const NewsCard = ({ news }) => {
  const navigate = useNavigate();
  const defaultImage = "news.jpeg";

  const description = news.description?.slice(0, 100);
  return (
    <Card onClick={() => navigate(`${news.title}`, { state: news })}>
      <Image src={news.urlToImage ? news.urlToImage : defaultImage} />
      <SourceName>{news.source.name}</SourceName>
      <CardTitle>{news.title}</CardTitle>
      <CardAuthor>{news.author}</CardAuthor>
      <p>{description}...</p>
    </Card>
  );
};

export default NewsCard;

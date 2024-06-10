import { Author, Card, Title, Image } from "./styled";

const NewsCard = ({ item }) => {
  console.log(item);
  const { title, author, url } = item;
  return (
    <Card href={url} target="_blank">
      <Image
        src={
          item.urlToImage
            ? item.urlToImage
            : "https://img.freepik.com/premium-vector/orange-red-color-breaking-news-logo_744381-304.jpg"
        }
        alt={title}
      />
      <Title>{title}</Title>
      <Author>{author}</Author>
    </Card>
  );
};

export default NewsCard;

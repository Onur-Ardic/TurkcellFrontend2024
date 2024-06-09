import { Author, Card, Source, Title } from "./styled";

const NewsCard = ({ item }) => {
  const { title, source, author, url } = item;
  return (
    <Card href={url} target="_blank">
      <Title>{title}</Title>
      <Source>{source.name}</Source>
      <Author>{author}</Author>
    </Card>
  );
};

export default NewsCard;

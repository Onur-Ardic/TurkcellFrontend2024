import { Card, Title, Image } from "./styled";

const ArticleCard = ({ img, href, title }) => {
  return (
    <a href={href} target="_blank">
      <Card>
        <Title>{title}</Title>
        <Image src={img} alt="Article Image" />
      </Card>
    </a>
  );
};

export default ArticleCard;

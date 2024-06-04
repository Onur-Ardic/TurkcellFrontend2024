import { A, Card, Title, Image } from "./styled";

const ArticleCard = ({ img, href, title }) => {
  return (
    <A
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read more about ${title}`}
    >
      <Card>
        <Title>{title}</Title>
        <Image src={img} alt={`${title} thumbnail`} />
      </Card>
    </A>
  );
};

export default ArticleCard;

import { CardBody, CardBtn, CardContainer, CardImg, CardSubtitle, CardTitle } from "../../StyledComponent";

const Card = ({ data }) => {
  return (
    <CardContainer>
      <CardImg
        src={data.urlToImage ? data.urlToImage : "https://www.sag.at/wp-content/uploads/2020/05/news.jpg"}
        alt="news-photo"
      />
      <CardBody>
        <CardTitle>
          {data.title === "[Removed]"
            ? "Breaking News"
            : data.title.length > 110
            ? data.title.substring(0, 110) + "..."
            : data.title}
        </CardTitle>
        <CardSubtitle>{data.author ? data.author.split(",")[0] : "CNBC"}</CardSubtitle>
        <CardBtn href={data.url} target="_blank" rel="noopener noreferrer">
          Read more
        </CardBtn>
      </CardBody>
    </CardContainer>
  );
};

export default Card;

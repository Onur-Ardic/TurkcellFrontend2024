import { useLocation } from "react-router-dom";
import {
  DetailViewContainer,
  Title,
  Image,
  Description,
  Source,
  Author,
} from "../styled";
import Spinner from "../components/Spinner";

const DetailView = () => {
  const location = useLocation();
  const data = location.state;
  const defaultImage = "news.jpeg";

  if (!data) {
    return <Spinner />;
  }

  return (
    <DetailViewContainer>
      <Title>{data.title}</Title>
      <Image
        src={data.urlToImage ? data.urlToImage : defaultImage}
        alt={data.title}
      />
      <Description>{data.description}</Description>
      <Source>{data.source.name}</Source>
      <Author>{data.author}</Author>
    </DetailViewContainer>
  );
};

export default DetailView;

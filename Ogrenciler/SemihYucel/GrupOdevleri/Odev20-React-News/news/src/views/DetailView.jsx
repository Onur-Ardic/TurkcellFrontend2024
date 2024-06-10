import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { DetailViewContainer, Title, Image, Description, Source, Author } from "../styled";

const DetailView = () => {
  const location = useLocation();
  const data = location.state;
  const defaultImage =
    "https://png.pngtree.com/png-vector/20201027/ourmid/pngtree-breaking-news-banner-lower-png-image_2378724.jpg";

  if (!data) {
    return <div>Loading...</div>;
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
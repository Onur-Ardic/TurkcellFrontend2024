import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { DetailViewContainer, Title, Description, Author, Image } from "../styled";

const DetailView = () => {
  const { newsId } = useParams();
  const location = useLocation();
  const data = location.state;
  const defaultImage = "https://png.pngtree.com/png-vector/20201027/ourmid/pngtree-breaking-news-banner-lower-png-image_2378724.jpg";

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <DetailViewContainer>
      <Image src={data.urlToImage ? data.urlToImage : defaultImage} alt={data.title} />
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
      <Author>{data.author}</Author>
    </DetailViewContainer>
  );
};

export default DetailView;

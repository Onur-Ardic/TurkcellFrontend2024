import React from "react";
import { useLocation, useParams } from "react-router-dom";

const DetailView = () => {
  const { newsId } = useParams();
  const location = useLocation();
  const data = location.state;
  console.log("detail page", data);
  return (
    <>
      <div>DetailView</div>
      <div>{data.title}</div>
      <div>{data.description}</div>
      <div>{data.author}</div>
    </>
  );
};

export default DetailView;

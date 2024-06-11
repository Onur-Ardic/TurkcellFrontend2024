import React from "react";
import { useParams } from "react-router-dom";
import NewsList from "../components/NewsList";
import styled from "styled-components";
import "../App.css";

const NewsCategoryTitle = styled.h1`
  text-align: center;
  font-family: Great Vibes;
  text-transform: capitalize;
`;

function NewsCategoryView() {
  const { category } = useParams();
  return (
    <div>
      <NewsCategoryTitle>{category} News</NewsCategoryTitle>
      <NewsList category={category} />
    </div>
  );
}

export default NewsCategoryView;

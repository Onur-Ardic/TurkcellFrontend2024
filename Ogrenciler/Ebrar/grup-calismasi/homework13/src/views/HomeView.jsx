import React from "react";
import NewsList from "../components/NewsList";
import styled from "styled-components";
import "../App.css";

const HomeTitle = styled.h1`
  text-align: center;
  font-family: Great Vibes;
`;

function HomeView() {
  return (
    <div>
      <HomeTitle>News of Interest</HomeTitle>
      <NewsList category="" />
    </div>
  );
}

export default HomeView;

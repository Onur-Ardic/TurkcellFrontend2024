import React from "react";
import NewsList from "../components/NewsList";

function HomeView() {
  return (
    <div>
      <h1>Top Headlines</h1>
      <NewsList category="" />
    </div>
  );
}

export default HomeView;

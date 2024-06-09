import React from "react";
import { useParams } from "react-router-dom";
import NewsList from "../components/NewsList";

function NewsCategoryView() {
  const { category } = useParams();
  return (
    <div>
      <h1>{category.toUpperCase()} NEWS</h1>
      <NewsList category={category} />
    </div>
  );
}

export default NewsCategoryView;

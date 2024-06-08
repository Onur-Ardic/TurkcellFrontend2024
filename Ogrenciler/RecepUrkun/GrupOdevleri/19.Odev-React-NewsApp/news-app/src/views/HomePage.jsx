import React from "react";
import NewsView from "./NewsView";

const HomePage = ({ selectedLanguage }) => {
  return (
    <div>
      <NewsView category="" selectedLanguage={selectedLanguage} />
    </div>
  );
};

export default HomePage;

import React from "react";
import NewsView from "./NewsView";

const EconomyNewView = ({ selectedLanguage }) => {
  return (
    <div>
      <NewsView category="business" selectedLanguage={selectedLanguage} />
    </div>
  );
};

export default EconomyNewView;

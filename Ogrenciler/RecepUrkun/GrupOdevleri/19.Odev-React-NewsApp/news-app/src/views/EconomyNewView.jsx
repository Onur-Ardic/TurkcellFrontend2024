import React from "react";
import NewsView from "./NewsView";

const EconomyNewView = ({ selectedLanguage }) => {
  return <NewsView category="business" selectedLanguage={selectedLanguage} />;
};

export default EconomyNewView;

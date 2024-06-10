import React from "react";
import NewsView from "./NewsView";

const TechnologyNewView = ({ selectedLanguage }) => {
  return <NewsView category="technology" selectedLanguage={selectedLanguage} />;
};

export default TechnologyNewView;

import React from "react";
import NewsView from "./NewsView";

const ScienceNewView = ({ selectedLanguage }) => {
  return <NewsView category="science" selectedLanguage={selectedLanguage} />;
};

export default ScienceNewView;

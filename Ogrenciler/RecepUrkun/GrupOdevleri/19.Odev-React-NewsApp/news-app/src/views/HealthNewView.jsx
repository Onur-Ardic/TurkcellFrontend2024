import React from "react";
import NewsView from "./NewsView";

const HealthNewView = ({ selectedLanguage }) => {
  return <NewsView category="health" selectedLanguage={selectedLanguage} />;
};

export default HealthNewView;

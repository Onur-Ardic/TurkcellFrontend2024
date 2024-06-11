import React from "react";
import NewsView from "./NewsView";

const SportNewView = ({ selectedLanguage }) => {
  return <NewsView category="sport" selectedLanguage={selectedLanguage} />;
};

export default SportNewView;

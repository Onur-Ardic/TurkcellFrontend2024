import React from "react";
import NewsView from "./NewsView";

const EntertainmentNewView = ({ selectedLanguage }) => {
  return (
    <NewsView category="entertainment" selectedLanguage={selectedLanguage} />
  );
};

export default EntertainmentNewView;

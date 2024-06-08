import React from "react";
import NewsView from "./NewsView";

const SportNewView = ({ selectedLanguage }) => {
  return (
    <div>
      <NewsView category="sport" selectedLanguage={selectedLanguage} />
    </div>
  );
};

export default SportNewView;

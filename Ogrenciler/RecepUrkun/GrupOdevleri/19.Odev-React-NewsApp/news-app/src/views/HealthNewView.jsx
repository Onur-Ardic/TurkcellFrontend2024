import React from "react";
import NewsView from "./NewsView";

const HealthNewView = ({ selectedLanguage }) => {
  return (
    <div>
      <NewsView category="health" selectedLanguage={selectedLanguage} />
    </div>
  );
};

export default HealthNewView;

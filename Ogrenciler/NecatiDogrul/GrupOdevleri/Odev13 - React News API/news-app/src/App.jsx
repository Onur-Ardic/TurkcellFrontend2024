import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Router from "./routes/Router";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("tr");

  return (
    <>
      <Navbar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <Router selectedLanguage={selectedLanguage} />
    </>
  );
}

export default App;

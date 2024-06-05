import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Projects />
      <GlobalStyle />
    </>
  );
}

export default App;

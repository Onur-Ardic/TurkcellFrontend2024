import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Projects from "./components/Projects";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content />
      <Projects />
    </>
  );
}

export default App;

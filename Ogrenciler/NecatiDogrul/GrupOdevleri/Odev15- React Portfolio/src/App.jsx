import React from "react";
import "./css/global.css";
import "./css/main.css";
import "./css/responsive.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Projects />
    </div>
  );
}

export default App;

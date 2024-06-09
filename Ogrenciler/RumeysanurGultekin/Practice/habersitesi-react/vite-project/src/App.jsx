import { useState } from "react";
import request1 from "./Request1";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const getNews = () => {
    request1.getNews().then((data) => console.log(data));
  };
  return (
    <>
      <button onClick={getNews}>Ekle</button>
    </>
  );
}

export default App;

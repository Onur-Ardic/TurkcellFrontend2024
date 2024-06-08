import { useEffect } from "react";
import "./App.css";
import { getNews } from "./Request";
import Navbar from "./components/Navbar/Navbar";
import Router from "./routes/Router";

function App() {
  useEffect(() => {
    const result = getNews();
  });

  return (
    <>
      <Navbar />
      <h2>PROJECT 1</h2>
      <Router />
    </>
  );
}

export default App;

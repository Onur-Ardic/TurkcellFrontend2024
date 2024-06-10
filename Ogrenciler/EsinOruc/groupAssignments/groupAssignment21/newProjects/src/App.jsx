import { useEffect } from "react";
import "./App.css";
import { getNewsData } from "./Request";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import RouterConfig from "./routes/Router";

function App() {
  useEffect(() => {
    const result = getNewsData();
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <RouterConfig />
      </div>
    </>
  );
}

export default App;

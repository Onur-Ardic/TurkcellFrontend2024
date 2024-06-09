import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Routes from "./components/Routes/Routes";

let token = "fb44ce1bd88740d4990d843834598291";
function App() {
  const [onData, setOnData] = useState([]);
  const [onCountry, setOnCountry] = useState("tr");
  const [onCategory, setOnCategory] = useState("general");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${onCountry}&category=${onCategory}&apiKey=${token}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOnData(data.articles);
      });
  }, [onCountry, onCategory]);

  return (
    <>
      <Home
        setOnCountry={setOnCountry}
        setOnCategory={setOnCategory}
        onData={onData}
      />
      <Routes onData={onData} />
    </>
  );
}

export default App;

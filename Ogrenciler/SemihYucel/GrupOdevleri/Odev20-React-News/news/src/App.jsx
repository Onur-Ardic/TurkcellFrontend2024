import { useEffect, useState } from "react";
import "./App.css";
import { getNews, searchNews } from "./service/Request";
import Router from "./routes/Router";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";

function App() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const fetchData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const result2 = await searchNews(query);
    setNews(result2.articles);
    navigate("/");
    setIsLoading(false);
    setQuery("");
  };

  const topNews = async () => {
    setIsLoading(true);
    const result = await getNews();
    setNews(result.articles);
    setIsLoading(false);
  };

  useEffect(() => {
    topNews();
  }, []);
  return (
    <>
      <Navbar
        topNews={topNews}
        fetchData={fetchData}
        setQuery={setQuery}
        query={query}
      />
      <div className="container">
        {isLoading ? <Spinner /> : <Router news={news} />}
      </div>
    </>
  );
}

export default App;

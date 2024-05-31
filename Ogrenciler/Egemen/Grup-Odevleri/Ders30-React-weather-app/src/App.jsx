import { useEffect, useState } from "react";
import "./App.css";
import { readData } from "./api/Request";
import Navbar from "./components/Navbar";
import ShowCase from "./components/ShowCase";
import CardList from "./components/CardList";

function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("giresun");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeDay, setActiveDay] = useState(0);
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const result = await readData(city);
      setData(result);
      setCity("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <>
      <Navbar setCity={setCity} handleSubmit={handleSubmit} city={city} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <ShowCase data={data} capitalize={capitalize} activeDay={activeDay} />
          <div className="container-sm">
            <CardList
              data={data}
              setActiveDay={setActiveDay}
              capitalize={capitalize}
            />
          </div>
        </>
      )}
    </>
  );
}
export default App;

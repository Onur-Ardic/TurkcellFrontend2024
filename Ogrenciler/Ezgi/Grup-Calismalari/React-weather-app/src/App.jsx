import { useEffect, useState } from "react";
import "./App.css";
import { readData } from "./api/Request";
import Navbar from "./components/Navbar";
import ShowCase from "./components/ShowCase";
import CardList from "./components/CardList";

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("giresun");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const result = await readData(city);
      console.log(result); // Log the result to understand the structure
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
  console.log(data);
  return (
    <>
      <Navbar setCity={setCity} handleSubmit={handleSubmit} city={city} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <ShowCase data={data} capitalize={capitalize} />
          <div className="container">
            <CardList data={data} />
          </div>
        </>
      )}
    </>
  );
}
export default App;

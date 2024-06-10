import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./routes/Router";
import { getAllNews, getBySearch, getCurrencyApi } from "./Api/Api";
import { useEffect, useState } from "react";
import { Container } from "./style/style.module";

function App() {
  const [search, setSearch] = useState(""); //inputtaki anlık bilgi
  const [searchData, setSearchData] = useState([]); //arama yapma
  const [currency, setCurrency] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getDataBySearch = async (e, search) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await getBySearch(search);
      setSearchData(data.articles);
      console.log(searchData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getCurrency = async () => {
    try {
      setLoading(true);
      const data = await getCurrencyApi();
      setCurrency(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getData = async () => {
    try {
      setLoading(true);
      const data = await getAllNews();
      setData(data.articles);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
    getCurrency();
  }, []);

  return (
    <>
      <Header
        search={search}
        handleSearch={handleSearch}
        getDataBySearch={getDataBySearch}
        currency={currency}
        loading={loading}
      />
      <Container>
        <Router data={data} searchData={searchData} loading={loading} />
      </Container>
      <Footer />
    </>
  );
}

export default App;

import { NavLink } from "react-router-dom";
import "./App.css";
import Router from "./routers/router";
import { Navbar, NavLinkDiv, SearchBtn, SearchForm, SearchInput } from "./StyledComponent";
import { useEffect, useState } from "react";
import { getCategory, getSearch } from "./api/request";
function App() {
  const [inputNew, setInputNew] = useState("");
  const [category, setCategory] = useState("/");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCategoryNews = async () => {
    try {
      setLoading(true);
      const result = await getCategory(category);
      setData(result.articles);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  const getSearchNews = async () => {
    try {
      setLoading(true);
      const result = await getSearch(inputNew);
      setData(result.articles);
      setInputNew("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getCategoryNews();
  }, [category]);
  return (
    <>
      <div className="container mt-3 text-center">
        <SearchForm onSubmit={(e) => {
              e.preventDefault();
              getSearchNews();
            }}>
        <SearchInput type="text" placeholder="Haber ara..." value={inputNew} onChange={(e) => setInputNew(e.target.value)}/>
        <SearchBtn type="submit">Ara</SearchBtn>
        </SearchForm>
        <Navbar>
        <NavLink to="/"><NavLinkDiv>Anasayfa</NavLinkDiv></NavLink>
        <NavLink to="/business"><NavLinkDiv>İş</NavLinkDiv></NavLink>
        <NavLink to="/entertainment"><NavLinkDiv>Eğlence</NavLinkDiv></NavLink>
        <NavLink to="/health"><NavLinkDiv>Sağlık</NavLinkDiv></NavLink>
        <NavLink to="/science"><NavLinkDiv>Bilim</NavLinkDiv></NavLink>
        <NavLink to="/sports"><NavLinkDiv>Spor</NavLinkDiv></NavLink>
        <NavLink to="/technology"><NavLinkDiv>Teknoloji</NavLinkDiv></NavLink>
        </Navbar>
      </div>

      <Router loading={loading} error={error} data={data} setCategory={setCategory}/>
    </>
  );
}

export default App;

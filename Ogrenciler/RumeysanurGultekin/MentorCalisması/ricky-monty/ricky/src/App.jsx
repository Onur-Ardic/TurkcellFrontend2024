import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import { useEffect , useState} from "react";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route, Router} from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Cards/CardDetails";

function App() {
  return (
    <div>
        <div className="App">
          <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:id' element={<CardDetails/>} /> 

          <Route path='/episodes' element={<Episodes/>} />
          <Route path='/episodes/:id' element={<CardDetails/>} /> 

          <Route path="/location" element={<Location />} />
          <Route path='/location/:id' element={<CardDetails/>} /> 
        </Routes>

    </div>
  )
}
const Home =() => {

  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch ] = useState("");
  let [status, setStatus ] = useState("");
  let [gender, setGender ] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchData, updateFetchData] = useState([]);
  let {info , results} = fetchData;

  console.log(results);

  
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => { 
    (async function () { 
      let data = await fetch(api).then(res=>res.json());
      updateFetchData(data); } )();

  },[api])
    

  return (
    <div className="App">
     
    <h1 className="text-center mb-4"> Characters </h1>
      <Search  setSearch={setSearch} setPageNumber={setPageNumber}/>

      <div className="container">
        <div className="row">
          
            <Filters setStatus={setStatus} setPageNumber={setPageNumber} setGender={setGender} setSpecies={setSpecies}/>
          <div className="col-lg-8 col-12 ">
            <div className="row">
              <Cards results={results} page="/"/>
            </div>
          </div>
        </div>  
      </div>  

      <Pagination setPageNumber={setPageNumber}  pageNumber={pageNumber} info={info}/>
    </div>
  )
}

export default App

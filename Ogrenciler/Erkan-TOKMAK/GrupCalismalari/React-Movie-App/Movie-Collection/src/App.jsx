import "./App.css";
import { Form } from "./components/Form/Form";
import List from "./components/List/List";
import { useEffect, useState } from "react";
import { get, post, update, deleteData } from "./request/Request";

function App() {
  const [newMovie, setMovie] = useState({
    name: "",
    director: "",
    year: "",
    type: "",
    image: "",
  });

  const [data, setData] = useState([]);

  const handleData = async () => {
    const getFetchData = await get();
    setData(getFetchData);
  };

  useEffect(() => {
    handleData();
  }, [newMovie, data]);

  const postMovie = (e) => {
    e.preventDefault();
    const checkMovieId = data.find((movie)=> movie.id === newMovie.id);
    if(!checkMovieId) {
      post(newMovie);
    } else {
      update(checkMovieId.id, newMovie);
    }
    setMovie({ name: "", director: "", year: "", type: "", image:"" });
  };

  const deleteMovie = (e, id) => {
    e.preventDefault();
    deleteData(id);
  }

  return (
    <>
      <div className="App">
        <h1 className="text-center my-5">Movie Collection</h1>
        <div className="container">
          <div className="row">
          <Form newMovie={newMovie} setMovie={setMovie} postMovie={postMovie} />
          <List data={data} setMovie ={setMovie} deleteMovie={deleteMovie} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
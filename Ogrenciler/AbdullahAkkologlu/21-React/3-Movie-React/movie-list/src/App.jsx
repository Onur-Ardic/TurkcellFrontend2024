import { useEffect, useState } from "react";
import "./App.css";
import { createData, deleteData, readData } from "./api/request";
import Form from "./components/Form";
import MovieList from "./components/MovieList";

function App() {
  const [data, setData] = useState([]);
  const [newMovie, setNewMovie] = useState({
    name: "",
    director: "",
    genre: "",
    year: "",
    image: "",
  });
  const fetchData = async () => {
    const result = await readData();
    setData(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handlePostMovie = async (e) => {
    e.preventDefault();
    await createData(newMovie);
    setData([...data, newMovie]);
  };
  const handleDeleteMovie = async (e, movieId) => {
    e.preventDefault();
    await deleteData(movieId);
    setData(data.filter((movie) => movie.id !== movieId));
  };
  return (
    <>
      <Form setNewMovie={setNewMovie} handlePostMovie={handlePostMovie} />
      <MovieList data={data} handleDeleteMovie={handleDeleteMovie} />
    </>
  );
}

export default App;

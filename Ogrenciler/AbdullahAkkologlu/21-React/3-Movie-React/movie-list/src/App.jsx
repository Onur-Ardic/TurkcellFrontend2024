import { useEffect, useState } from "react";
import "./App.css";
import { createData, deleteData, readData, updateData } from "./api/request";
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
    const existingMovie = data.find((movie) => movie.id === newMovie.id);
    if (!existingMovie) {
      const newMovieData = {
        id: crypto.randomUUID(),
        ...newMovie,
      };
      await createData(newMovieData);
      setData([...data, newMovieData]);
    } else {
      await updateData(existingMovie.id, newMovie);
      setData(
        data.map((movie) => (movie.id === existingMovie.id ? newMovie : movie))
      );
    }
    setNewMovie({ name: "", director: "", genre: "", year: "", image: "" });
  };
  const handleDeleteMovie = async (e, movieId) => {
    e.preventDefault();
    await deleteData(movieId);
    setData(data.filter((movie) => movie.id !== movieId));
  };
  return (
    <div className="container">
      <div className="row">
        <Form
          setNewMovie={setNewMovie}
          handlePostMovie={handlePostMovie}
          newMovie={newMovie}
        />
        <MovieList
          data={data}
          handleDeleteMovie={handleDeleteMovie}
          setNewMovie={setNewMovie}
        />
      </div>
    </div>
  );
}

export default App;

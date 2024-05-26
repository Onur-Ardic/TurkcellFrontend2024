import { useState, useEffect } from "react";
import { getMovies, postMovie } from "../request/request";

const url = "http://localhost:3000/movies";

// Components
import MovieCard from "./components/MovieCard";
import AddModal from "./components/AddModal";
import UpdateModal from "./components/UpdateModal";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(url).then((movies) => setMovies(movies));
  }, []);

  return (
    <>
      <button
        type="button"
        className="btn btn-dark text-white"
        data-bs-toggle="modal"
        data-bs-target="#addMovieModal"
      >
        Add a Movie
      </button>
      <AddModal setMovies={setMovies} />
      <UpdateModal setMovies={setMovies} />
      <MovieCard movies={movies} setMovies={setMovies} />
    </>
  );
}

export default App;

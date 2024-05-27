import { useState, useEffect } from "react";
import { getMovies, postMovie } from "../request/request";

const url = "http://localhost:3000/movies";

import MovieCard from "./components/MovieCard";
import AddModal from "./components/AddModal";
import UpdateModal from "./components/UpdateModal";

function App() {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    getMovies(url).then(setMovies);
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
      <UpdateModal setMovies={setMovies} existingMovie={selectedMovie} />
      <MovieCard
        movies={movies}
        setMovies={setMovies}
        setSelectedMovie={setSelectedMovie}
      />
    </>
  );
}

export default App;

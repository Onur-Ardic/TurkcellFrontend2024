import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/organisms/movieCard/MovieCard";
import MovieForm from "./components/organisms/movieForm/MovieForm";
import {
  addMovie,
  deleteMovie,
  getAllMovies,
  updateMovie,
} from "./service/Api";

function App() {
  const [movies, setMovies] = useState([]);

  const updateMovieUI = async (editedMovie) => {
    const updatedMovie = await updateMovie(editedMovie.id, editedMovie);
    setMovies(
      movies.map((m) => (m.id === updatedMovie.data.id ? updatedMovie.data : m))
    );
  };

  const addMovieUI = async (movie) => {
    const addedMovie = await addMovie(movie);
    setMovies([...movies, addedMovie.data]);
  };

  const deleteMovieUI = async (id) => {
    await deleteMovie(id);
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const fetchMovies = async () => {
    const allMovies = await getAllMovies();
    setMovies(allMovies.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="input-area">
        <div className="container">
          <h1 className="title">Film Koleksiyonu</h1>
          <MovieForm onAdd={addMovieUI} />
        </div>
      </div>
      <div className="container">
        <h1 className="subtitle">Eklenen Filmler</h1>
        <div key={"list"} className="movie-list">
          {movies.map((movie, index) => (
            <MovieCard
              onUpdate={(editedMovie) => updateMovieUI(editedMovie)}
              key={index}
              movie={movie}
              onDelete={() => deleteMovieUI(movie.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

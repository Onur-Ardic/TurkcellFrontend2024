import { useState, useEffect } from "react";
import {
  getMoviesFromDb,
  addMovieToDb,
  deleteMovieFromDb,
  updateMovieFromDb,
} from "./components/Api";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import Alert from "./components/Alert";

function App() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    name: "",
    director: "",
    genre: "",
    releaseDate: "",
    poster: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentMovieId, setCurrentMovieId] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const moviesData = await getMoviesFromDb();
    setMovies(moviesData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleAddOrUpdateMovie = async () => {
    if (
      !newMovie.name ||
      !newMovie.director ||
      !newMovie.releaseDate ||
      !newMovie.genre ||
      !newMovie.poster
    ) {
      setError("All fields are required.");
      setSuccess("");
      setTimeout(() => setError(""), 2000);
      return;
    }
    setError("");

    try {
      if (isEditing) {
        await updateMovieFromDb(currentMovieId, newMovie);
        setIsEditing(false);
        setCurrentMovieId(null);
        setSuccess("Movie updated successfully.");
      } else {
        await addMovieToDb(newMovie);
        setSuccess("Movie added successfully.");
      }
      setNewMovie({
        name: "",
        director: "",
        releaseDate: "",
        genre: "",
        poster: "",
      });
      fetchMovies();
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("An error occurred while saving the movie.");
      setSuccess("");
      setTimeout(() => setError(""), 2000);
    }
  };

  const handleEditMovie = (movie) => {
    setNewMovie(movie);
    setIsEditing(true);
    setCurrentMovieId(movie.id);
  };

  const handleDeleteMovie = async (movieId) => {
    try {
      await deleteMovieFromDb(movieId);
      setSuccess("Movie deleted successfully.");
      setError("");
      fetchMovies();
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("An error occurred while deleting the movie.");
      setSuccess("");
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center display-3">Movie List & React</h1>
      <div className="col-5 mx-auto">
        {error && <Alert message={error} type="danger" />}
        {success && <Alert message={success} type="success" />}
      </div>
      <MovieForm
        newMovie={newMovie}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        handleAddOrUpdateMovie={handleAddOrUpdateMovie}
      />
      <hr className="py-2" />
      <MovieList
        movies={movies}
        handleEditMovie={handleEditMovie}
        handleDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;

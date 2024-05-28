import  { useState, useEffect } from 'react';
import { fetchMovies, addMovie, deleteMovie, updateMovie } from './service/api';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import './styles.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      const movies = await fetchMovies();
      setMovies(movies);
    } catch (error) {
      console.error('Error loading movies:', error);
    }
  };

  const handleAddMovie = async (movie) => {
    try {
      await addMovie(movie);
      loadMovies();
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  const handleDeleteMovie = async (id) => {
    try {
      await deleteMovie(id);
      loadMovies();
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  const handleUpdateMovie = async (id, updatedMovie) => {
    try {
      await updateMovie(id, updatedMovie);
      loadMovies();
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  return (
    <div>
      <MovieForm addMovie={handleAddMovie} />
      <MovieList movies={movies} deleteMovie={handleDeleteMovie} updateMovie={handleUpdateMovie} />
    </div>
  );
};

export default App;

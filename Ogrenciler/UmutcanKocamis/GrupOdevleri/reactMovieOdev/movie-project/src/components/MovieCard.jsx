import { useState, useEffect } from "react";
import Requests from "./Request.jsx";
import MovieForm from "./MovieForm.jsx";

function MovieCard() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSave = async (movie) => {
    try {
      if (selectedMovie) {
        const updatedMovie = await Requests.put(
          `http://localhost:3000/movies/${selectedMovie.id}`,
          movie
        );
        setMovies(
          movies.map((m) => (m.id === selectedMovie.id ? updatedMovie : m))
        );
        setSelectedMovie(null);
      } else {
        const newMovie = await Requests.post(
          "http://localhost:3000/movies",
          movie
        );
        setMovies([...movies, newMovie]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovies = async () => {
    try {
      const data = await Requests.get("http://localhost:3000/movies");
      setMovies(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteMovie = async (id) => {
    try {
      await Requests.delete(`http://localhost:3000/movies/${id}`);
      setMovies(movies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleUpdate = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
      <div className="container">
        <div className="row p-5">
          <div className="col-xl-3 p-3">
            <MovieForm handleSave={handleSave} movie={selectedMovie} />
          </div>
          <div className="col-xl-9">
            <div className="row">
              {movies.map((movie) => (
                <div className="col-md-3 mb-4" key={movie.id}>
                  <div className="card h-100">
                    <img
                      src={movie.image}
                      className="card-img-top"
                      alt={movie.name}
                    />
                    <div className="card-body">
                      <h4 className="card-title fw-semibold">{movie.name}</h4>
                      <h5 className="card-text text-danger fst-italic ">
                        {movie.director}
                      </h5>
                      <p className="card-text text-success">{movie.category}</p>
                      <h5 className="card-text fw-normal">{movie.year}</h5>
                      <button
                        className="btn btn-danger me-2"
                        onClick={() => deleteMovie(movie.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleUpdate(movie)}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;

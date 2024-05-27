import { putMovie, deleteMovie, getMovies } from "../../request/request";

const url = "http://localhost:3000/movies";

function MovieCard({ movies, setMovies, setSelectedMovie }) {
  const deletePostMovie = async (id) => {
    await deleteMovie(id);
    await getMovies(url).then((movies) => setMovies(movies));
  };

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie, index) => {
          return (
            <div key={index} className="card col-3 ">
              <div className="card-header">
                <div>{movie.title}</div>
              </div>
              <div>{movie.director}</div>
              <div>{movie.category}</div>
              <div>{movie.year}</div>
              <img style={{ height: "450px" }} src={movie.imgUrl}></img>
              <div className="card-footer d-flex justify-content-center gap-3">
                <button
                  type="button"
                  className="btn btn-dark text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#updateMovieModal"
                  onClick={() => setSelectedMovie(movie)}
                >
                  Update a Movie
                </button>
                <button
                  onClick={() => deletePostMovie(movie.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieCard;

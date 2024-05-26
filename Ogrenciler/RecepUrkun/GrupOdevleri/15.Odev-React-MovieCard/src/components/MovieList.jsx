const MovieList = ({ movies, handleEditMovie, handleDeleteMovie }) => {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col-12 col-md-6 col-lg-4" key={movie.id}>
          <div
            className="card mb-3"
            style={{ maxWidth: "540px" }}
            key={movie.id}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={movie.poster}
                  className="img-fluid rounded-start h-100"
                  alt={movie.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body h-100">
                  <h5 className="card-title">
                    <b>{movie.name}</b>
                  </h5>
                  <p className="card-text m-0">
                    Director: <i> {movie.director} </i>
                  </p>
                  <p className="card-text m-0">
                    Genre: <i> {movie.genre} </i>
                  </p>
                  <p className="card-text m-0"></p>
                  <p className="card-text m-0">
                    <small className="text-body-secondary">
                      {" "}
                      Year:<i> {movie.releaseDate} </i>
                    </small>
                  </p>
                  <button
                    className="btn btn-info me-2 btn-sm mt-2"
                    onClick={() => handleEditMovie(movie)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-warning btn-sm mt-2"
                    onClick={() => handleDeleteMovie(movie.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

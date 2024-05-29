import PropTypes from "prop-types";

const Movie = ({ movie, handleDeleteMovie, setNewMovie }) => {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={movie.image} className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <p className="card-text">{movie.director}</p>
              <p className="card-text">
                <small className="text-body-secondary">{movie.genre}</small>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">{movie.year}</small>
              </p>
              <button
                className="btn btn-danger me-3"
                onClick={(e) => {
                  handleDeleteMovie(e, movie.id);
                }}
              >
                Delete
              </button>
              <button
                className="btn btn-success"
                onClick={() => {
                  setNewMovie(movie);
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  handleDeleteMovie: PropTypes.func.isRequired,
  setNewMovie: PropTypes.func.isRequired,
};

export default Movie;

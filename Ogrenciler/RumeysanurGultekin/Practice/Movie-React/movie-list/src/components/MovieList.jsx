import Movie from "./Movie";
import PropTypes from "prop-types";

const MovieList = ({ data, handleDeleteMovie, setNewMovie }) => {
  return (
    <div className="col-8 mt-5">
      <div className="row">
        {data.map((movie) => (
          <div key={movie.id} className="col-6">
            <Movie
              movie={movie}
              handleDeleteMovie={handleDeleteMovie}
              setNewMovie={setNewMovie}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
MovieList.propTypes = {
  data: PropTypes.array.isRequired,
  handleDeleteMovie: PropTypes.func.isRequired,
  setNewMovie: PropTypes.func.isRequired,
};

export default MovieList;

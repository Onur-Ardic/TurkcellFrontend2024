import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

const MovieList = ({ movies, deleteMovie, updateMovie }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard 
          key={movie.id} 
          movie={movie} 
          deleteMovie={deleteMovie} 
          updateMovie={updateMovie} 
        />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteMovie: PropTypes.func.isRequired,
  updateMovie: PropTypes.func.isRequired,
};
export default MovieList;
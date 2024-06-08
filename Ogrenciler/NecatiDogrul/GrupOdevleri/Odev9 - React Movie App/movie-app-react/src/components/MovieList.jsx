import React from 'react';
import MovieCard from './MovieCard';

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

export default MovieList;

const Movie = ({ movie, handleDeleteMovie }) => {
  return (
    <>
      <h1>{movie.name}</h1>
      <h4>{movie.director}</h4>
      <button
        onClick={(e) => {
          handleDeleteMovie(e, movie.id);
        }}
      >
        Delete
      </button>
      <button>Update</button>
    </>
  );
};

export default Movie;

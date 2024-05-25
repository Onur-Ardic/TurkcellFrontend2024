import Movie from "./Movie";

const MovieList = ({ data, handleDeleteMovie }) => {
  return (
    <>
      {data.map((movie) => (
        <div key={movie.id}>
          <Movie movie={movie} handleDeleteMovie={handleDeleteMovie} />
        </div>
      ))}
    </>
  );
};

export default MovieList;

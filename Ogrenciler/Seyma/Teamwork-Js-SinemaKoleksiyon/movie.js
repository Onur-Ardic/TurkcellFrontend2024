const storage = new Storage();

function Movies() {}
Movies.prototype.addMovie = function (id) {
  const newMovie = {
    name: inputs.name.value.trim(),
    director: inputs.director.value.trim(),
    year: inputs.year.value.trim(),
    movieType: inputs.movieType.value.trim(),
    imageUrl: inputs.imageUrl.value.trim(),
    id: id,
  };
  storage.addMovieToStorage(newMovie);
};

Movies.prototype.deleteMovie = function (movieId) {
  storage.deleteMovieFromStorage(movieId);
  displayMovies();
};

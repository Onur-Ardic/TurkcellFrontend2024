function Storage() {}

Storage.prototype.addMovieToStorage = function (newMovie) {
  let movies = this.getMoviesFromStorage();
  movies.push(newMovie);
  localStorage.setItem("movies", JSON.stringify(movies));
};

Storage.prototype.deleteMovieFromStorage = function (movieId) {
  let movies = this.getMoviesFromStorage();
  movies.forEach((movie, index) => {
    if (movie.id == movieId) {
      movies.splice(index, 1);
    }
    localStorage.setItem("movies", JSON.stringify(movies));
  });
};

Storage.prototype.getMoviesFromStorage = function () {
  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  return movies;
};

Storage.prototype.updateMovieFromStorage = function (updateMovie) {
  let movies = this.getMoviesFromStorage();
  movies.forEach((movie, index) => {
    if (movie.id == updateMovie.id) {
      movies[index] = updateMovie;
    }
  });
  localStorage.setItem("movies", JSON.stringify(movies));
};

Storage.prototype.getMovieFromStorage = function (movieId) {
  let movies = this.getMoviesFromStorage();
  return movies.find((movie) => movie.id == movieId);
};

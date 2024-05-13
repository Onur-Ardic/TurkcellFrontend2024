function MovieCrud() {}

MovieCrud.prototype.getMovies = function () {
  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  return movies;
};

MovieCrud.prototype.setMovies = function (movies) {
  localStorage.setItem("movies", JSON.stringify(movies));
};

MovieCrud.prototype.addMovie = function (movie) {
  let movies = this.getMovies();
  movies.push(movie);
  this.setMovies(movies);
};

MovieCrud.prototype.deleteMovie = function (id) {
  let movies = this.getMovies();
  movies = movies.filter((movie) => movie.id !== id);
  this.setMovies(movies);
};

MovieCrud.prototype.updateMovie = function (movie) {
  let movies = this.getMovies();
  movies = movies.map((m) => (m.id === movie.id ? movie : m)); //burası sıkıntılı
  console.log(movies, "movies");
  this.setMovies(movies);
};

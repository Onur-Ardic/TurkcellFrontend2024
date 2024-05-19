class MovieCrud {


  getMovies() {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    return movies;
  }

  setMovies(movies) {
    localStorage.setItem("movies", JSON.stringify(movies));
  }

  addMovie(movie) {
    let movies = this.getMovies();
    movies.push(movie);
    this.setMovies(movies);
  }

  deleteMovie(id) {
    let movies = this.getMovies();
    movies = movies.filter((movie) => movie.id !== id);
    this.setMovies(movies);
  }

  updateMovie(movie) {
    let movies = this.getMovies();
    movies = movies.map((m) => (m.id === movie.id ? movie : m));
    this.setMovies(movies);
  }
}

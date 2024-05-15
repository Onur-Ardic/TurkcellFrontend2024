class Storage {
  addMovieToStorage(newMovie) {
    let movies = this.getMoviesFromStorage();
    movies.push(newMovie);
    localStorage.setItem("movies", JSON.stringify(movies));
  }

  deleteMovieFromStorage(movieId) {
    let movies = this.getMoviesFromStorage();
    movies.forEach((movie, index) => {
      if (movie.id == movieId) {
        movies.splice(index, 1);
      }
      localStorage.setItem("movies", JSON.stringify(movies));
    });
  }

  getMoviesFromStorage() {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    return movies;
  }

  updateMovieFromStorage(updateMovie) {
    let movies = this.getMoviesFromStorage();
    movies.forEach((movie, index) => {
      if (movie.id == updateMovie.id) {
        movies[index] = updateMovie;
      }
      localStorage.setItem("movies", JSON.stringify(movies));
    });
  }

  getMovieFromStorage(movieId) {
    let movies = this.getMoviesFromStorage();
    return movies.find((movie) => movie.id == movieId);
  }
}

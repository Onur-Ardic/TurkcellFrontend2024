class Storage {
  constructor() {
    this.movieList = JSON.parse(localStorage.getItem("movieList")) || [];
  }

  addMovie(movie) {
    this.movieList.push(movie);
    localStorage.setItem("movieList", JSON.stringify(this.movieList));
  }

  deleteMovie(movieName) {
    this.movieList = this.movieList.filter((movie) => movie.name !== movieName);
    localStorage.setItem("movieList", JSON.stringify(this.movieList));
  }

  updateMovie(movieNameToUpdate, updatedMovie) {
    this.movieList = this.movieList.map((movie) => {
      if (movie.name === movieNameToUpdate) {
        return updatedMovie;
      }
      return movie;
    });
    localStorage.setItem("movieList", JSON.stringify(this.movieList));
  }
}
export { Storage };

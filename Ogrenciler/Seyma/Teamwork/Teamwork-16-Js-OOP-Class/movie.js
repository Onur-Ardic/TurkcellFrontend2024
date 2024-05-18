

class Movies {
  constructor(name, director, year, movieType, imageUrl) {
    this.name = name;
    this.director = director;
    this.year = year;
    this.movieType = movieType;
    this.imageUrl = imageUrl;
    this.id = crypto.randomUUID();
     }
  static addMovie() {
    const newMovie = {
      name: inputs.name.value.trim(),
      director: inputs.director.value.trim(),
      year: inputs.year.value.trim(),
      movieType: inputs.movieType.value.trim(),
      imageUrl: inputs.imageUrl.value.trim(),
      id: crypto.randomUUID(),
    };
    Storage.addMovieToStorage(newMovie); 
  }
  static deleteMovie(movieId) {
    Storage.deleteMovieFromStorage(movieId);
    UI.displayMovies();
  }
}


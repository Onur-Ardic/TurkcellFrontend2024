function Storage() { }

Storage.prototype.addMovieToStorage = function (movies) {
    localStorage.setItem("moviesDataPrototype", JSON.stringify(movies));
}

Storage.prototype.getMoviesFromStorage = function () {
    return JSON.parse(localStorage.getItem("moviesDataPrototype")) || [];
}

Storage.prototype.addMovies = function (newMovie) {
    let movies = this.getMoviesFromStorage();
    movies.push(newMovie);
    this.addMovieToStorage(movies);
}

Storage.prototype.deleteMovieFromStorage = function (movieId) {
    let movies = this.getMoviesFromStorage();
    const remainingMovies = movies.filter(movie => movie.movieId != movieId);
    this.addMovieToStorage(remainingMovies);
}
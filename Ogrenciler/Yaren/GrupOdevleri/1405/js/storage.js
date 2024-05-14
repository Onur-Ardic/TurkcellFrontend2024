class Storage {
    static addMovieToStorage(movies) {
        localStorage.setItem("moviesDataPrototype", JSON.stringify(movies));
    }
    static getMoviesFromStorage() {
        return JSON.parse(localStorage.getItem("moviesDataPrototype")) || [];
    }
    static addMovies(newMovie) {
        let movies = this.getMoviesFromStorage();
        movies.push(newMovie);
        this.addMovieToStorage(movies);
    }
    static deleteMovieFromStorage(movieId) {
        let movies = this.getMoviesFromStorage();
        const remainingMovies = movies.filter(movie => movie.movieId != movieId);
        this.addMovieToStorage(remainingMovies);
    }
}
// import { Movie } from './movie.js';
// import { Storage } from './storage.js'

let movieName = document.querySelector("#movieName");
let movieDirector = document.querySelector("#movieDirector");
let movieYear = document.querySelector("#movieYear");
let movieGenre = document.querySelector("#movieGenre");
let moviePoster = document.querySelector("#moviePoster");

let storage = new Storage()

document.getElementById('movieForm').addEventListener('submit', function (event) {
    event.preventDefault();
    movieCardCreate()
});

function movieCardCreate() {
    let movieNameValue = movieName.value;
    let movieDirectorValue = movieDirector.value;
    let movieYearValue = movieYear.value;
    let movieGenreValue = movieGenre.value;
    let moviePosterValue = moviePoster.value;
    const newMovie = new Movie(movieNameValue, movieDirectorValue, movieYearValue, movieGenreValue, moviePosterValue)
    newMovie.showInfo()
    storage.addAllMoviesToStorage(newMovie);
    console.log(storage.getMoviesFromStorage())
}

document.getElementById('sil').addEventListener("click", function () {
    storage.deleteMovieFromStorage("62b25dfa-9b71-4a5d-b14c-aa13f0945889")
})

function Movie(name, director, year, genre, poster) {
    this.movieId = crypto.randomUUID();
    this.name = name;
    this.director = director;
    this.year = year;
    this.genre = genre;
    this.poster = poster;
    this.showInfo = function () {
        console.log(this.name, this.director, this.year, this.genre, this.poster);
    };
    console.log(this.name)
}

function Storage() { }

Storage.prototype.addAllMoviesToStorage = function (newMovie) {
    let movies = this.getMoviesFromStorage();
    movies.push(newMovie);
    this.addMovieToStorage(movies);
    console.log(Storage.prototype)
}

Storage.prototype.deleteMovieFromStorage = function (movieId) {
    let movies = this.getMoviesFromStorage();
    const remainingMovies = movies.filter(movie => movie.movieId != movieId);
    this.addMovieToStorage(remainingMovies);
}

Storage.prototype.addMovieToStorage = function (movies) {
    localStorage.setItem("moviesDataPrototype", JSON.stringify(movies));
}

Storage.prototype.getMoviesFromStorage = function () {
    return JSON.parse(localStorage.getItem("moviesDataPrototype")) || [];
}

// Storage.prototype.deleteAllMoviesFromStorage = function () {
//     localStorage.removeItem("moviesDataPrototype");
// }
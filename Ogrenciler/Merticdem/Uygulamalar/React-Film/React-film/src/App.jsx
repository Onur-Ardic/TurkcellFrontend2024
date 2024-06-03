import "./App.css";

function App() {
  const inputForm = document.querySelector("#inputForm");
  const title = document.querySelector("#title");
  const director = document.querySelector("#director");
  const genre = document.querySelector("#genre");
  const releaseDate = document.querySelector("#releaseDate");
  const description = document.querySelector("#description");
  const imageSource = document.querySelector("#imageSource");
  const movies = document.querySelector("#movies");
  const submitButton = document.querySelector("#submitButton");
  const updateButton = document.querySelector("#updateButton");

  function Movie(title, director, description, year, genre, image) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.director = director;
    this.description = description;
    this.genre = genre;
    this.year = year;
    this.image =
      image ||
      "https://w7.pngwing.com/pngs/165/549/png-transparent-popcorn-movie-film-popcorn-the-film-film.png";
  }

  const movieCrud = new MovieCrud();
  const ui = new UI();

  window.onload = () => {
    ui.displayMovies();
  };

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const movie = new Movie(
      title.value,
      director.value,
      description.value,
      releaseDate.value,
      genre.value,
      imageSource.value
    );

    ui.addMoviesUI(movie);
  });

  function MovieCrud() {
    this.getMovies = function () {
      let movies = JSON.parse(localStorage.getItem("movies")) || [];
      return movies;
    };

    this.setMovies = function (movies) {
      localStorage.setItem("movies", JSON.stringify(movies));
    };

    this.addMovie = function (movie) {
      let movies = this.getMovies();
      movies.push(movie);
      this.setMovies(movies);
    };

    this.deleteMovie = function (id) {
      let movies = this.getMovies();
      movies = movies.filter((movie) => movie.id !== id);
      this.setMovies(movies);
    };

    this.updateMovie = function (movie) {
      let movies = this.getMovies();
      movies = movies.map((m) => (m.id === movie.id ? movie : m));
      this.setMovies(movies);
    };
  }
}

export default App;

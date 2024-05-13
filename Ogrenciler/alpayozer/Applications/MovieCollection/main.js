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

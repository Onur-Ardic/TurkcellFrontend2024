const nameInput = document.querySelector("#name");
const directorInput = document.querySelector("#director");
const yearInput = document.querySelector("#year");
const genreInput = document.querySelector("#genre");
const imageInput = document.querySelector("#image");
const submitButton = document.querySelector("#submitButton");
const cards = document.querySelector(".cards");
let updateMode = false;
let movieIndex;
const storage = new Storage();
const ui = new UI();
ui.display(storage.getMoviesLocal());
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const movie = new Movie(
    nameInput.value,
    directorInput.value,
    yearInput.value,
    genreInput.value,
    imageInput.value
  );
  updateMode ? storage.editMovie(movie) : storage.setMoviesLocal(movie);
});

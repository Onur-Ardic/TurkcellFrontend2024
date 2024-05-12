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
  updateMode ? editMovie(e) : addMovie(e);
});
function addMovie(e) {
  e.preventDefault();
  const movie = new Movie(
    nameInput.value,
    directorInput.value,
    yearInput.value,
    genreInput.value,
    imageInput.value
  );
  storage.setMoviesLocal(movie);
}
function editMovie(e) {
  e.preventDefault();
  const updatedObject = {
    name: nameInput.value,
    director: directorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
    image: imageInput.value,
  };
  storage.editMovie(updatedObject);
}

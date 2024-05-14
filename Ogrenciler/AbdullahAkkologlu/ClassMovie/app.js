const inputs = {
  name: document.querySelector("#name"),
  director: document.querySelector("#director"),
  year: document.querySelector("#year"),
  genre: document.querySelector("#genre"),
  image: document.querySelector("#image"),
};
const submitButton = document.querySelector("#submitButton");
const cards = document.querySelector(".cards");
let updateMode = false;
let movieIndex;
const storage = new Storage();
const ui = new UI();
ui.display(storage.getMoviesLocal());
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const movie = new Movie();
  for (let key in inputs) {
    movie[key] = inputs[key].value;
  }
  updateMode ? storage.editMovie(movie) : storage.setMoviesLocal(movie);
});

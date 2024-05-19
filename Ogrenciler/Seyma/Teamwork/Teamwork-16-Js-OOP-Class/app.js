const inputs = {
  name: document.getElementById("nameInput"),
  director: document.getElementById("directorInput"),
  year: document.getElementById("yearInput"),
  movieType: document.getElementById("movieType"),
  imageUrl: document.getElementById("imageUrl"),
};

UI.displayMovies();

Object.values(inputs).forEach((input) => {
  input.addEventListener("focus", () => UI.updateBorderColor(input));
  input.addEventListener("input", () => UI.updateBorderColor(input));
});

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  Movies.addMovie();
  UI.displayMovies();
});

console.log(this);
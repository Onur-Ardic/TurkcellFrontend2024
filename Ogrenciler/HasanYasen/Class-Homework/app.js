let ui = new UI();
let movie = new Movie();
ui.getMovies();

ui.form.addEventListener("submit", (e) => {
  e.preventDefault();
  movie.save();
  ui.getMovies();
  ui.clear();
});
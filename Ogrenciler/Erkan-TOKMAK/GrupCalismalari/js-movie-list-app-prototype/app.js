let ui = new UI();
ui.getMovies();

ui.form.addEventListener("submit", (e) => {
  e.preventDefault();
  Movie.prototype.save(editMovieId);
  ui.getMovies();
  ui.clear();
});
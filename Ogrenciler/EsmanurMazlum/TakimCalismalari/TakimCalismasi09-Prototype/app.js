let ui = new UI();
ui.getMovies();

ui.form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("save")
  Movie.prototype.save(editMovieId);
  ui.getMovies();
  ui.clear();
});
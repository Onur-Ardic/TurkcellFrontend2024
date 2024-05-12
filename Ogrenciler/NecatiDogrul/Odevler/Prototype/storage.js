function Storage() {}
Storage.prototype.getMoviesLocal = function () {
  let moviesArray = JSON.parse(localStorage.getItem("moviesArray")) || [];
  return moviesArray;
};
Storage.prototype.setMoviesLocal = function (newMovie) {
  let moviesArray = this.getMoviesLocal();
  if (!ui.validation()) return;
  moviesArray.push(newMovie);
  localStorage.setItem("moviesArray", JSON.stringify(moviesArray));
  ui.display(this.getMoviesLocal());
  ui.clean();
};
Storage.prototype.deleteMovieLocal = function (name) {
  let moviesArray = this.getMoviesLocal();
  moviesArray = moviesArray.filter((movie) => movie.name !== name);
  localStorage.setItem("moviesArray", JSON.stringify(moviesArray));
  ui.display(this.getMoviesLocal());
};
Storage.prototype.editMovie = function (updatedObject) {
  let moviesArray = this.getMoviesLocal();
  if (!ui.validation()) return;
  moviesArray[movieIndex] = updatedObject;
  localStorage.setItem("moviesArray", JSON.stringify(moviesArray));
  ui.display(this.getMoviesLocal());
  updateMode = false;
  submitButton.textContent = "Add";
  ui.clean();
};

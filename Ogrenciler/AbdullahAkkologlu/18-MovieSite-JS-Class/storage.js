class Storage {
  getMoviesLocal() {
    let moviesArray = JSON.parse(localStorage.getItem("moviesArray")) || [];
    return moviesArray;
  }
  setMoviesLocal(newMovie) {
    let moviesArray = this.getMoviesLocal();
    if (!ui.validation()) return;
    moviesArray.push(newMovie);
    localStorage.setItem("moviesArray", JSON.stringify(moviesArray));
    ui.display(this.getMoviesLocal());
    ui.clean();
  }
  deleteMovieLocal(name) {
    let moviesArray = this.getMoviesLocal();
    moviesArray = moviesArray.filter((movie) => movie.name !== name);
    localStorage.setItem("moviesArray", JSON.stringify(moviesArray));
    ui.display(this.getMoviesLocal());
  }
  editMovie(updatedObject) {
    let moviesArray = this.getMoviesLocal();
    if (!ui.validation()) return;
    moviesArray[movieIndex] = updatedObject;
    localStorage.setItem("moviesArray", JSON.stringify(moviesArray));
    ui.display(this.getMoviesLocal());
    updateMode = false;
    submitButton.textContent = "Add";
    ui.clean();
  }
}

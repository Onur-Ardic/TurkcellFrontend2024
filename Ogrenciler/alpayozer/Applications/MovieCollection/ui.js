function UI() {}

UI.prototype.addMoviesUI = function (movie) {
  movieCrud.addMovie(movie);
  this.displayMovies();
  this.clearForm();
};

UI.prototype.clearForm = function () {
  title.value = "";
  director.value = "";
  description.value = "";
  genre.value = "";
  releaseDate.value = "";
  imageSource.value = "";
};

UI.prototype.displayMovies = function () {
  const allMovies = movieCrud.getMovies();
  movies.innerHTML = "";
  allMovies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("col-lg-6");
    movieCard.innerHTML = `<div class="card my-5 text-white" style="max-width:600px;background-color: rgb(35, 35, 35);">
    <div class="row">
      <div class="col-md-6 movie-image">
        <img src="${movie.image}" class="movie-image img-fluid rounded-start p-3" alt="...">
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-between">
        <div class="card-body  d-flex flex-column gap-3">
          <h3 class="card-title fw-bold">${movie.title}</h3>
          <div class="">
          <span class="card-type"><i>${movie.genre} / </i></span>
          <span class="card-year"><i>${movie.year}</i></span>
          </div>
          <p class="card-director"><i>Yönetmen: ${movie.director}</i></p>
          <p class="card-description"><i>${movie.description}</i></p>
        </div>
        <div class="card-footer mb-2">
        <button onclick='ui.deleteMovieUI("${movie.id}")' class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
          <button onclick='ui.updateMovieUI("${movie.id}")' class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
      </div>
    </div>
  </div>`;
    movies.appendChild(movieCard);
  });
};

UI.prototype.deleteMovieUI = function (id) {
  movieCrud.deleteMovie(id);
  this.displayMovies();
};

UI.prototype.updateMovieUI = function (id) {
  console.log(id, "iddd");
  let allMovies = movieCrud.getMovies();
  let movie = allMovies.find((movie) => movie.id === id);
  title.value = movie.title;
  director.value = movie.director;
  description.value = movie.description;
  genre.value = movie.genre;
  releaseDate.value = movie.year;
  imageSource.value = movie.image;
  updateButton.removeAttribute("disabled");
  submitButton.setAttribute("disabled", true);

  updateButton.addEventListener("click", () => {
    movie.title = title.value;
    movie.director = director.value;
    movie.description = description.value;
    movie.genre = genre.value;
    movie.year = releaseDate.value;
    movie.image = imageSource.value;
    movieCrud.updateMovie(movie);
    this.clearForm();
    this.displayMovies();
    submitButton.removeAttribute("disabled");
    updateButton.setAttribute("disabled", true);
  });
};

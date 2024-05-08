let movieCards = JSON.parse(localStorage.getItem("moviesData")) || [];
let movieName = document.querySelector("#movieName");
let movieDirector = document.querySelector("#movieDirector");
let movieYear = document.querySelector("#movieYear");
let movieGenre = document.querySelector("#movieGenre");
let moviePoster = document.querySelector("#moviePoster");

let movieCardContainer = document.querySelector(".movieCardContainer");
let isEdited = false;

document
  .getElementById("movieForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    movieCardCreate();
    clearForm();
  });

showCards();

function movieCardCreate() {
  let movieNameValue = movieName.value;
  let movieDirectorValue = movieDirector.value;
  let movieYearValue = movieYear.value;
  let movieGenreValue = movieGenre.value;
  let moviePosterValue = moviePoster.value;

  movieCards.push({
    movieId: crypto.randomUUID(),
    movieName: movieNameValue,
    movieDirector: movieDirectorValue,
    movieYear: movieYearValue,
    movieGenre: movieGenreValue,
    moviePoster: moviePosterValue,
  });
  console.log(movieCards);
  localStorage.setItem("moviesData", JSON.stringify(movieCards));
  showCards();
}

function clearForm() {
  movieName.value = "";
  movieDirector.value = "";
  movieYear.value = "";
  movieGenre.value = "";
  moviePoster.value = "";
}

function showCards() {
  movieCardContainer.innerHTML = "";
  movieCards.forEach((movie) => {
    let card = document.createElement("div");
    card.classList.add("col-lg-6", "ps-5");
    card.innerHTML = `
    <div
      class="movieCard rounded-4 p-5 mt-3 d-flex flex-column justify-content-center"
      id="movieCard"
    >
      <div class="text-white">
        <p class="p-2" id="movieNameCard">Film Adı: ${movie.movieName}</p>
        <p class="p-2" id="movieDirectorCard">Yönetmen Adı: ${movie.movieDirector}</p>
        <p class="p-2" id="movieYearCard">Vizyon Tarihi: ${movie.movieYear}</p>
        <p class="p-2" id="movieGenreCard">Türü: ${movie.movieGenre}</p>
        <div class="d-flex justify-content-between p-2">
          <button type="submit" class="btn btn-success updateBtn" onclick='updateMovie("${movie.movieId}")'>
            Degistir
          </button>
          <button type="submit" class="btn btn-warning deleteBtn" data-movie-id="${movie.movieId}">Sil</button>
        </div>
      </div>
    </div>`;
    movieCardContainer.appendChild(card);
  });


  document.querySelectorAll(".deleteBtn").forEach((deleteButton) => {
    deleteButton.addEventListener("click", function () {
      let movieId = this.getAttribute("data-movie-id");
      deleteMovie(movieId);
    });
  });

}

function deleteMovie(movieId) {
  movieCards = movieCards.filter((movie) => movie.movieId != movieId);
  localStorage.setItem("moviesData", JSON.stringify(movieCards));

  showCards();
}

function updateMovie(movieId) {
  getMovieInfo(movieId)
}

function getMovieInfo(movieId) {
  let moviesData = JSON.parse(localStorage.getItem("moviesData"))
  let selectedMovie = moviesData.find((movie) => movie.movieId === movieId);
  movieName.value = selectedMovie.movieName
  movieDirector.value = selectedMovie.movieDirector
  movieYear.value = selectedMovie.movieYear
  movieGenre.value = selectedMovie.movieGenre
  moviePoster.value = selectedMovie.moviePoster
  isEdited = true;
  if (isEdited) {
    document.getElementById("afisOlustur").classList.add("d-none")
    document.getElementById("bilgileriGuncelle").classList.remove("d-none")
  }
}

// document.querySelectorAll("#bilgileriGuncelle").forEach((updateButton) => {
//   updateButton.addEventListener("click", function () {
//     let movieId = this.getAttribute("data-movie-id");
//     console.log("bilgileri guncelle:", movieId)
//     // updateMovie(movieId);
//   });
// });
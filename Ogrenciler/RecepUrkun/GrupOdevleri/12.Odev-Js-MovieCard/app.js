let movieCards = JSON.parse(localStorage.getItem("moviesData")) || [];
let movieName = document.querySelector("#movieName");
let movieDirector = document.querySelector("#movieDirector");
let movieYear = document.querySelector("#movieYear");
let movieGenre = document.querySelector("#movieGenre");
let moviePoster = document.querySelector("#moviePoster");

let movieCardContainer = document.querySelector(".movieCardContainer");

//ekranin sagindaki tiyatro resminin icindeki degerler
let cardFilmIsim = document.querySelector("#movieNameCard")
let cardFilmYonetmen = document.querySelector("#movieDirectorCard")
let cardFilmYear = document.querySelector("#movieYearCard")
let cardFilmTur = document.querySelector("#movieGenreCard")

const inputaGirilenBilgileriCardaYazdir = () => {
  movieName.addEventListener("keyup", function () {
    cardFilmIsim.textContent = "Film Adı: " + movieName.value;
  });
  movieDirector.addEventListener("keyup", function () {
    cardFilmYonetmen.textContent = "Yönetmen Adı: " + movieDirector.value;
  });
  movieYear.addEventListener("keyup", function () {
    cardFilmYear.textContent = "Vizyon Tarihi: " + movieYear.value;
  });
  movieGenre.addEventListener("keyup", function () {
    cardFilmTur.textContent = "Türü: " + movieGenre.value;
  });
}

inputaGirilenBilgileriCardaYazdir()
showCards();

document.querySelector("#afisOlustur").addEventListener("click", function () {
  movieCardCreate();
  clearForm();
});

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

  localStorage.setItem("moviesData", JSON.stringify(movieCards));
  showCards();
  cardBilgileriniTemizle()
}

function showCards() {
  movieCardContainer.innerHTML = "";
  if (movieCards.length > 0) {
    movieCards.forEach((movie) => {
      let card = document.createElement("div");
      card.classList.add("col-12", "col-md-6", "col-lg-4", "p-3");
      card.innerHTML = `
      <div
        class="movieCard rounded-4 p-5 mt-3 d-flex flex-column justify-content-center"
        id="movieCard"
        style="background: url('${movie.moviePoster}');
        object-fit:cover;
        background-size: cover; background-position: center;"
      >
        <div class="text-white">
          <h5 class="p-2 fw-bold" id="movieNameCard">Film Adı: ${movie.movieName}</h5>
          <p class="p-2 fw-bold" id="movieDirectorCard">Yönetmen Adı: ${movie.movieDirector}</p>
          <p class="p-2 fw-bold" id="movieYearCard">Vizyon Tarihi: ${movie.movieYear}</p>
          <p class="p-2 fw-bold" id="movieGenreCard">Türü: ${movie.movieGenre}</p>
          <div class="d-flex justify-content-between p-2">
            <button type="button" class="btn btn-success updateBtn" onclick='updateMovie("${movie.movieId}")'>
              Degistir
            </button>
            <button type="button" class="btn btn-warning deleteBtn" onclick='deleteMovie("${movie.movieId}")'>Sil</button>
          </div>
        </div>
      </div>`;
      movieCardContainer.appendChild(card);
    });
  }
}

function deleteMovie(movieId) {
  movieCards = movieCards.filter((movie) => movie.movieId !== movieId);
  localStorage.setItem("moviesData", JSON.stringify(movieCards));
  showCards()
}

function updateMovie(movieId) {
  getMovieInfo(movieId);
}

function getMovieInfo(movieId) {
  let selectedMovie = movieCards.find((movie) => movie.movieId === movieId);
  movieName.value = selectedMovie.movieName;
  movieDirector.value = selectedMovie.movieDirector;
  movieYear.value = selectedMovie.movieYear;
  movieGenre.value = selectedMovie.movieGenre;
  moviePoster.value = selectedMovie.moviePoster;
  checkEdited(true)

  document.querySelector("#bilgileriGuncelle").addEventListener("click", function () {
    filmBilgileriGuncelle(movieId);
  });
}

function filmBilgileriGuncelle(movieId) {
  let selectedMovieIndex = movieCards.findIndex((movie) => movie.movieId === movieId);
  movieCards[selectedMovieIndex].movieName = movieName.value;
  movieCards[selectedMovieIndex].movieDirector = movieDirector.value;
  movieCards[selectedMovieIndex].movieYear = movieYear.value;
  movieCards[selectedMovieIndex].movieGenre = movieGenre.value;
  movieCards[selectedMovieIndex].moviePoster = moviePoster.value;

  localStorage.setItem("moviesData", JSON.stringify(movieCards));

  clearForm();
  showCards()
  cardBilgileriniTemizle()

  // Düzenleme işlemini sonlandır
  checkEdited(false)
}

const checkEdited = (isEdited) => {
  if (!isEdited) {
    document.getElementById("afisOlustur").classList.remove("d-none");
    document.getElementById("bilgileriGuncelle").classList.add("d-none");
  }
  else {
    document.getElementById("afisOlustur").classList.add("d-none");
    document.getElementById("bilgileriGuncelle").classList.remove("d-none");
  }
}

function clearForm() {
  movieName.value = "";
  movieDirector.value = "";
  movieYear.value = "";
  movieGenre.value = "";
  moviePoster.value = "";
}

function cardBilgileriniTemizle() {
  cardFilmIsim.textContent = "Film Adı: "
  cardFilmYonetmen.textContent = "Yönetmen Adı: "
  cardFilmYear.textContent = "Vizyon Tarihi: "
  cardFilmTur.textContent = "Türü: "
}
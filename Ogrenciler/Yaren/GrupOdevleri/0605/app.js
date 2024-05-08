let movieCards = [];
let movieName = document.querySelector("#movieName");
let movieDirector = document.querySelector("#movieDirector");
let movieYear = document.querySelector("#movieYear");
let movieGenre = document.querySelector("#movieGenre");
let moviePoster = document.querySelector("#moviePoster");

let movieCardContainer = document.querySelector(".movieCardContainer");

document
  .getElementById("movieForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    movieCardCreate();
    clearForm();
  });

function movieCardCreate() {
  let movieNameValue = movieName.value;
  let movieDirectorValue = movieDirector.value;
  let movieYearValue = movieYear.value;
  let movieGenreValue = movieGenre.value;
  let moviePosterValue = moviePoster.value;

  let movieId = Date.now(); //burada benzersiz id oluşturdu,crypto da kullanabilirdik
  movieCards.push({
    movieId: movieId,
    movieName: movieNameValue,
    movieDirector: movieDirectorValue,
    movieYear: movieYearValue,
    movieGenre: movieGenreValue,
    moviePoster: moviePosterValue,
  });

  console.log(movieCards);
  showCards();
  // ekledim
  createUpdateButtons();
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
      <div class="movieCard rounded-4 p-5 mt-3 d-flex flex-column justify-content-center" id="movieCard${movie.movieId}">
        <div class="text-white">
          <p class="p-2" id="movieNameCard${movie.movieId}">Film Adı: ${movie.movieName}</p>
          <p class="p-2" id="movieDirectorCard${movie.movieId}">Yönetmen Adı: ${movie.movieDirector}</p>
          <p class="p-2" id="movieYearCard${movie.movieId}">Vizyon Tarihi: ${movie.movieYear}</p>
          <p class="p-2" id="movieGenreCard${movie.movieId}">Türü: ${movie.movieGenre}</p>
          <div class="d-flex justify-content-between p-2">
            <button type="button" class="btn btn-success update-btn" data-movieid="${movie.movieId}">
              Güncelle
            </button>
            <button type="button" class="btn btn-warning delete-btn" data-movieid="${movie.movieId}">
              Sil
            </button>
          </div>
        </div>
      </div>`;
    movieCardContainer.appendChild(card);
  });
}

function createUpdateButtons() {
  document.querySelectorAll(".update-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      let movieId = this.getAttribute("data-movieid");
      let movieToUpdate = movieCards.find((movie) => movie.movieId == movieId);
      if (movieToUpdate) {
        let movieNameCard = document.getElementById(`movieNameCard${movieId}`);
        let movieDirectorCard = document.getElementById(
          `movieDirectorCard${movieId}`
        );
        let movieYearCard = document.getElementById(`movieYearCard${movieId}`);
        let movieGenreCard = document.getElementById(
          `movieGenreCard${movieId}`
        );

        movieNameCard.innerText = `Film Adı: ${movieName.value}`;
        movieDirectorCard.innerText = `Yönetmen Adı: ${movieDirector.value}`;
        movieYearCard.innerText = `Vizyon Tarihi: ${movieYear.value}`;
        movieGenreCard.innerText = `Türü: ${movieGenre.value}`;
      }
    });
  });

  function deleteMovie(movieId) {
    movieCards = movieCards.filter((movie) => movie.movieId != movieId);

    showCards();
  }

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      let movieId = this.getAttribute("data-movieid");
      deleteMovie(movieId);
    });
  });
}
showCards();

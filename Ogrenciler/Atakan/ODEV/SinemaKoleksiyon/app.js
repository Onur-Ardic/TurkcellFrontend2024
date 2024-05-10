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

  movieCards.push({
    movieId: movieCards.length + 1,
    movieName: movieNameValue,
    movieDirector: movieDirectorValue,
    movieYear: movieYearValue,
    movieGenre: movieGenreValue,
    moviePoster: moviePosterValue,
  });
  console.log(movieCards);
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
          <button type="submit" class="btn btn-success">
            Güncelle
          </button>
          <button type="submit" class="btn btn-warning">Sil</button>
        </div>
      </div>
    </div>`;
    movieCardContainer.appendChild(card);
  });
}

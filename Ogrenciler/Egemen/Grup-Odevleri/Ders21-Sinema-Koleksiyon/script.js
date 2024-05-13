document.addEventListener("DOMContentLoaded", loadFilms);

const filmForm = document.getElementById("film-form");
const addFilmButton = document.getElementById("add-film");
const updateFilmButton = document.getElementById("update-film");
const filmCollection = document.getElementById("film-collection");

let editIndex = null;

filmForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const film = getFilmDataFromForm();
  if (editIndex === null) {
    addFilm(film);
  } else {
    updateFilm(film, editIndex);
  }
  resetForm();
});

updateFilmButton.addEventListener("click", () => {
  const film = getFilmDataFromForm();
  updateFilm(film, editIndex);
  resetForm();
});

function getFilmDataFromForm() {
  const formValues = {
    name: document.getElementById("film-name").value,
    director: document.getElementById("director").value,
    year: document.getElementById("year").value,
    genre: document.getElementById("genre").value,
    posterUrl: document.getElementById("poster-url").value,
  };
  return new Movie(formValues);
}

function resetForm() {
  filmForm.reset();
  editIndex = null;
  addFilmButton.style.display = "block";
  updateFilmButton.style.display = "none";
}

function addFilm(film) {
  const films = getFilmsFromStorage();
  films.push(film);
  saveFilmsToStorage(films);
  film.displayCard(films.length - 1);
}

function updateFilm(film, index) {
  const films = getFilmsFromStorage();
  films[index] = film;
  saveFilmsToStorage(films);
  refreshFilmCollection();
}

function deleteFilm(index) {
  const films = getFilmsFromStorage();
  films.splice(index, 1);
  saveFilmsToStorage(films);
  refreshFilmCollection();
}

function editFilm(index) {
  const films = getFilmsFromStorage();
  const film = films[index];
  document.getElementById("film-name").value = film.name;
  document.getElementById("director").value = film.director;
  document.getElementById("year").value = film.year;
  document.getElementById("genre").value = film.genre;
  document.getElementById("poster-url").value = film.posterUrl;

  editIndex = index;
  addFilmButton.style.display = "none";
  updateFilmButton.style.display = "block";
}

function refreshFilmCollection() {
  filmCollection.innerHTML = "";
  const films = getFilmsFromStorage();
  films.forEach((film, index) => {
    film = new Movie(film);
    film.displayCard(index);
  });
}

function getFilmsFromStorage() {
  return JSON.parse(localStorage.getItem("films")) || [];
}

function saveFilmsToStorage(films) {
  localStorage.setItem("films", JSON.stringify(films));
}
function loadFilms() {
  const films = getFilmsFromStorage();
  // console.log(films);
  films.forEach((film, index) => {
    console.log(film);
    film = new Movie(film);
    console.log(film);

    film.displayCard(index);
  });
}

function Movie({ name, director, year, genre, posterUrl }) {
  this.name = name;
  this.director = director;
  this.year = year;
  this.genre = genre;
  this.posterUrl = posterUrl;
}
Movie.prototype.egemen = function ({ filmname }) {
  console.log("test1");
};
Movie.prototype.displayCard = function (index) {
  const filmCard = document.createElement("div");
  filmCard.className = "film-card";
  filmCard.innerHTML = `
          <div class="film-details">
              <img src="${this.posterUrl}" alt="${this.name}">
              <div class="film-info">
                  <strong>${this.name}</strong>
                  <p>Yönetmen: ${this.director}</p>
                  <p>Yıl: ${this.year}</p>
                  <p>Tür: ${this.genre}</p>
              </div>
              <div class="card-buttons">
                  <button onclick="editFilm(${index})">Güncelle</button>
                  <button onclick="deleteFilm(${index})">Sil</button>
              </div>
          </div>
      `;
  filmCollection.appendChild(filmCard);
};

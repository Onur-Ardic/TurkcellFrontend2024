const filmAdi = document.getElementById("filmAdi");
const filmYonetmen = document.getElementById("filmYonetmen");
const filmYili = document.getElementById("filmYili");
const filmTuru = document.getElementById("filmTuru");
const fid = document.getElementById("filmId");
const filmAfis = document.getElementById("filmAfis");
let editMovieId;
let movies = JSON.parse(localStorage.getItem("movies")) || [];
function Movie(id, ad, yonetmen, yil, tur, afis) {
  this.id = id;
  this.ad = ad;
  this.yonetmen = yonetmen;
  this.yil = yil;
  this.tur = tur;
  this.afis = afis;
}
Movie.prototype.save = function () {
  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  let editId = movies.findIndex((film) => film.id == fid.value);
  console.log(editId);
  if (fid.value) {
    let movie = new Movie(Number(fid.value), filmAdi.value, filmYonetmen.value, filmYili.value, filmTuru.value, filmAfis.value);
    movies[editId] = { id: fid.value, ...movie };
    editMovieId = null;
  } else {
    let movie = new Movie(Number(Math.floor(Math.random() * 10000)), filmAdi.value, filmYonetmen.value, filmYili.value, filmTuru.value, filmAfis.value);
    movies.push(movie);
  }
  localStorage.setItem("movies", JSON.stringify(movies));
  Movie.prototype.clear();
  Movie.prototype.getMovies();
}
Movie.prototype.clear = () => {
  filmAdi.value = "";
  filmYonetmen.value = "";
  filmYili.value = "";
  filmTuru.value = "";
  filmAfis.value = "";
  fid.value = "";
}
const cardRow = document.getElementById("cardRow");
Movie.prototype.getMovies = function () {
  let data = JSON.parse(localStorage.getItem("movies"));
  cardRow.innerHTML = "";
  data?.forEach((film) => {
    const col = document.createElement("div");
    col.classList.add("col-4");
    col.id = `${Number(film.id)}`;
    cardRow.appendChild(col);
    const card = document.createElement("div");
    card.className = "card my-3";
    col.appendChild(card);
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.style.backgroundImage = `url(${film.afis})`;
    cardBody.style.backgroundSize = "cover";
    cardBody.style.backgroundPosition = "center";
    cardBody.style.height = "600px";
    card.appendChild(cardBody);
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    card.appendChild(cardFooter);
    const filmAdiText = document.createTextNode(film.ad);
    cardHeader.appendChild(filmAdiText);
    const filmYonetmen = document.createTextNode(film.yonetmen);
    let pYon = document.createElement("p");
    pYon.appendChild(filmYonetmen);
    cardHeader.appendChild(pYon);
    const filmYili = document.createTextNode(film.yil);
    let pYear = document.createElement("p");
    pYear.appendChild(filmYili);
    cardHeader.appendChild(pYear);
    const filmTuru = document.createTextNode(film.tur);
    let p = document.createElement("p");
    p.appendChild(filmTuru);
    cardHeader.appendChild(p);
    const btnEdit = document.createElement("button");
    btnEdit.className = "btn btn-secondary w-100 mb-2";
    btnEdit.textContent = "Düzenle";
    cardFooter.appendChild(btnEdit);
    btnEdit.addEventListener("click", () => Movie.prototype.editMovie(col.id));
    const btnDel = document.createElement("button");
    btnDel.className = "btn btn-danger w-100";
    btnDel.textContent = "Sil";
    cardFooter.appendChild(btnDel);
    btnDel.addEventListener("click", () => Movie.prototype.deleteMovies(col.id));
  });
}
Movie.prototype.deleteMovies = (filmId) => {
  movies = movies.filter((film) => Number(film.id) !== Number(filmId));
  localStorage.setItem("movies", JSON.stringify(movies));
  document.getElementById(filmId).remove();
  Movie.prototype.clear();
}
Movie.prototype.editMovie = (filmId) => {
  console.log(filmId);
  movies.map((film) => {
    if (Number(film.id) === Number(filmId)) {
      console.log(film)
      fid.value = Number(film.id);
      filmAdi.value = film.ad;
      filmYonetmen.value = film.yonetmen;
      filmTuru.value = film.tur;
      filmYili.value = film.yil;
      filmAfis.value = film.afis;
    }
  })
  editMovieId = filmId;
}
Movie.prototype.getMovies();
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  Movie.prototype.save(editMovieId);
  Movie.prototype.clear();
});
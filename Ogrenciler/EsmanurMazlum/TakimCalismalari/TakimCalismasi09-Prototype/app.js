// import { Movie } from "prototype.js";

const filmAdi = document.getElementById("filmAdi");
const filmYonetmen = document.getElementById("filmYonetmen");
const filmYili = document.getElementById("filmYili");
const filmTuru = document.getElementById("filmTuru");
const fid = document.getElementById("filmId");
const filmAfis = document.getElementById("filmAfis");
let editMovieId;
let infos = JSON.parse(localStorage.getItem("filmler")) || [];

function Movie(ad, yonetmen, yil, tur, afis){
    this.ad = ad;
    this.yonetmen = yonetmen;
    this.yil = yil;
    this.tur = tur;
    this.afis = afis;
}  

function save(filmId) {
  let id = infos.length;

  
  let movie = new Movie(filmAdi.value, filmYonetmen.value, filmYili.value, filmTuru.value, filmAfis.value);
  console.log(movie);

  let editId = infos.findIndex((film) => film.filmId === parseInt(filmId));
  if (fid.value) {
    infos[editId] = {filmId: parseInt(filmId), movie}
    // {
    //   filmId: parseInt(filmId),
    //   filmAdi: filmAdiVal,
    //   filmYonetmen: filmYonetmenVal,
    //   filmYili: filmYiliVal,
    //   filmTuru: filmTuruVal,
    //   filmAfis: filmAfisVal,
    // };
    editMovieId = null;
  } else {
    infos = [...infos, {filmId: id, ...movie}];
    console.log(infos);
   
    // ({
    //   filmId: id,
    //   filmAdi: filmAdiVal,
    //   filmYonetmen: filmYonetmenVal,
    //   filmYili: filmYiliVal,
    //   filmTuru: filmTuruVal,
    //   filmAfis: filmAfisVal,
    // });
  }
  getMovies();

 

}

let films = localStorage.setItem("filmler", JSON.stringify(infos));

console.log(films);

const clear = () => {
  fid.value = "";
  let delMovie = Movie("","","","","");
  return delMovie;
}

const cardRow = document.getElementById("cardRow");

function getMovies() {
  let filmler = JSON.parse(localStorage.getItem("filmler"));
  cardRow.innerHTML = "";
  filmler?.forEach((film) => {
    const col = document.createElement("div");
    col.classList.add("col-4");
    col.id = `${film.filmId}`;
    cardRow.appendChild(col);
    const card = document.createElement("div");
    card.className = "card my-3";
    col.appendChild(card);
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.style.backgroundImage = `url(${film.filmAfis})`;
    cardBody.style.backgroundSize = "cover";
    cardBody.style.backgroundPosition = "center";
    cardBody.style.height = "600px";
    card.appendChild(cardBody);
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    card.appendChild(cardFooter);
    const filmAdiText = document.createTextNode(film.filmAdi);
    cardHeader.appendChild(filmAdiText);
    const filmYonetmen = document.createTextNode(film.filmYonetmen);
    let pYon = document.createElement("p");
    pYon.appendChild(filmYonetmen);
    cardHeader.appendChild(pYon);
    const filmYili = document.createTextNode(film.filmYili);
    let pYear = document.createElement("p");
    pYear.appendChild(filmYili);
    cardHeader.appendChild(pYear);
    const filmTuru = document.createTextNode(film.filmTuru);
    let p = document.createElement("p");
    p.appendChild(filmTuru);
    cardHeader.appendChild(p);
    const btnEdit = document.createElement("button");
    btnEdit.className = "btn btn-secondary w-100 mb-2";
    btnEdit.textContent = "Düzenle";
    cardFooter.appendChild(btnEdit);
    btnEdit.addEventListener("click", () => editMovie(col.id));
    const btnDel = document.createElement("button");
    btnDel.className = "btn btn-danger w-100";
    btnDel.textContent = "Sil";
    cardFooter.appendChild(btnDel);
    btnDel.addEventListener("click", () => deleteMovies(col.id));
  });
}

function deleteMovies(filmId) {
  infos = infos.filter((film) => film.filmId !== parseInt(filmId));
  localStorage.setItem("filmler", JSON.stringify(infos));
  document.getElementById(filmId).remove();
}

function editMovie(filmId) {

  infos.map((film) => {
    if (film.filmId === parseInt(filmId)){
      let movie = new Movie(film.filmAdi, film.filmYonetmen, film.filmYili, film.filmTuru, film.filmAfis)
      infos[editId] = {filmId: parseInt(filmId), movie}
      // infos[editId] = {filmId: fid.value, movie};

    }    
    //   {
    //   fid.value = film.filmId;
    //   filmAdi.value = film.filmAdi;
    //   filmYonetmen.value = film.filmYonetmen;
    //   filmTuru.value = film.filmTuru;
    //   filmYili.value = film.filmYili;
    //   filmAfis.value = film.filmAfis;
    // }
  });
  editMovieId = filmId;
}


getMovies();

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  save(editMovieId);
  clear();
});
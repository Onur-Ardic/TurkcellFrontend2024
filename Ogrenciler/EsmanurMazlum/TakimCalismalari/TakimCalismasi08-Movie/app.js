const filmAdi = document.getElementById("filmAdi");
const filmYonetmen = document.getElementById("filmYonetmen");
const filmYili = document.getElementById("filmYili");
const filmTuru = document.getElementById("filmTuru");
const filmAfis = document.getElementById("filmAfis");

let infos = [];


function save() {
  let filmAdiVal = filmAdi.value;
  let filmYonetmenVal = filmYonetmen.value;
  let filmYiliVal = filmYili.value;
  let filmTuruVal = filmTuru.value;
  let filmAfisVal = filmAfis.value;

  let filmObject =  {
    filmAdi: filmAdiVal,
    filmYonetmen: filmYonetmenVal,
    filmYili: filmYiliVal,
    filmTuru: filmTuruVal,
    filmAfis: filmAfisVal,
  };

  infos = [...infos, filmObject];

  localStorage.setItem("filmler", JSON.stringify(infos));
}

function getMovies() {
  let filmler = JSON.parse(localStorage.getItem("filmler"));

  filmler.forEach((film) => {
    const cardRow = document.getElementById("cardRow");
    const col = document.createElement("div");
    col.classList.add("col-4");
    cardRow.appendChild(col);
    const card = document.createElement("div");
    card.classList.add("card");
    col.appendChild(card);
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);
    const btnEdit = document.createElement("button");
    btnEdit.className = "btn btn-secondary";
    btnEdit.textContent = "Düzenle";
    cardBody.appendChild(btnEdit);
    const btnDel = document.createElement("button");
    btnDel.className = "btn btn-danger";
    btnDel.textContent = "Sil";
    cardBody.appendChild(btnDel);

    const filmAdiText = document.createTextNode(film.filmAdi);
    cardHeader.appendChild(filmAdiText);

    // cardHeader.textContent = film.filmAdi;
    // cardHeader.textContent = filmTuru;
    // cardHeader.textContent = filmYonetmen;
    // cardHeader.textContent = filmYili;
  });

  console.log(filmler);
}

getMovies();

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  save();

});

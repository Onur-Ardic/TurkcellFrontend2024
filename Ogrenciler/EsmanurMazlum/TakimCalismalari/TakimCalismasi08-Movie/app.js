const filmAdi = document.getElementById("filmAdi");
const filmYonetmen = document.getElementById("filmYonetmen");
const filmYili = document.getElementById("filmYili");
const filmTuru = document.getElementById("filmTuru");

const filmAfis = document.getElementById("filmAfis");

let infos = JSON.parse(localStorage.getItem("filmler")) || [];

let id = infos.length;
function save() {
  let filmAdiVal = filmAdi.value;
  let filmYonetmenVal = filmYonetmen.value;
  let filmYiliVal = filmYili.value;
  let filmTuruVal = filmTuru.value;
  let filmAfisVal = filmAfis.value;

 
  console.log(filmAdiVal, filmYonetmenVal, filmYiliVal, filmTuruVal)
  infos.push({
    filmId: id,
    filmAdi: filmAdiVal,
    filmYonetmen: filmYonetmenVal,
    filmYili: filmYiliVal,
    filmTuru: filmTuruVal,
    filmAfis: filmAfisVal,
  })
  localStorage.setItem("filmler", JSON.stringify(infos));
}

const cardRow = document.getElementById("cardRow");
function getMovies() {
  let filmler = JSON.parse(localStorage.getItem("filmler"));

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
    card.appendChild(cardBody);

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    card.appendChild(cardFooter);
  
    // console.log(film.filmId, film.filmAdi, film.filmYonetmen, film.filmYili, film.filmAfis)
    
    const filmAdiText = document.createTextNode(film.filmAdi);
    cardHeader.appendChild(filmAdiText);
    
    const filmYonetmen = document.createTextNode(film.filmYonetmen);
    let pYon = document.createElement("p");
    pYon.appendChild(filmYonetmen);
    cardBody.appendChild(pYon);
     
    const filmYili = document.createTextNode(film.filmYili);
    let pYear = document.createElement("p");
    pYear.appendChild(filmYili);
    cardBody.appendChild(pYear);
    
    const filmTuru = document.createTextNode(film.filmTuru);
    let p = document.createElement("p");
    p.appendChild(filmTuru);
    cardBody.appendChild(p)

    // cardHeader.textContent = film.filmAdi;
    // cardHeader.textContent = filmTuru;
    // cardHeader.textContent = filmYonetmen;
    // cardHeader.textContent = filmYili;
    const btnEdit = document.createElement("button");
    btnEdit.className = "btn btn-secondary w-100 mb-2";
    btnEdit.textContent = "Düzenle";
    cardFooter.appendChild(btnEdit);
    const btnDel = document.createElement("button");
    btnDel.className = "btn btn-danger w-100";
    btnDel.textContent = "Sil";
    cardFooter.appendChild(btnDel);
  
  })
};

getMovies();

document.getElementById("form").addEventListener("submit", (e) => {
  save();
});

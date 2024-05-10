let form = document.querySelector("#form");
let filmCollection = [];
let cardArea = document.querySelector("#card-area");
const name = document.querySelector("#name");
const type = document.querySelector("#type");
const director = document.querySelector("#director");
const afis = document.querySelector("#afis-url");
const imdb = document.querySelector("#imdb");
const desc = document.querySelector("#movie-description");
const cast = document.querySelector("#cast");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const film = {
    name: name.value,
    type: type.value,
    director: director.value,
    imdb: imdb.value,
    desc: desc.value,
    cast: cast.value,
    img: afis.value,
  };
  filmCollection.push(film);
  localStorage.setItem("movieArray", JSON.stringify(filmCollection));

  const result = `<div class="card col-12 col-md-6 col-lg-6 my-5 text-white" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4 col-4">
                <img src="${film.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8 col-8">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${film.name}</h5>
                    <p class="card-text">${film.desc}</p>
                    <p class="card-type"><i>Türü: ${film.type}</i></p>
                    <p class="card-director"><i>Yönetmen: ${film.director}</i></p>
                    <p class="card-imdb"><i>IMDb: ${film.imdb}</i></p>
                    <p class="card-cast"><i>Oyuncular: ${film.cast}</i></p>
                </div>
            </div>
        </div>
    </div>`;

  cardArea.innerHTML = result;
  document.querySelector("#form ").reset();
});

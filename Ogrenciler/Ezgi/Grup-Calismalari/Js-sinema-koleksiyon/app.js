let form = document.querySelector("#form");
let filmCollection = [];
let cardArea = document.querySelector("#card-area");
const name = document.querySelector("#name");
const type = document.querySelector("#type");
const director = document.querySelector("#director");
const img = document.querySelector("#afis-url");
const year = document.querySelector("#year")
const imdb = document.querySelector("#imdb");
const desc = document.querySelector("#movie-description");
const cast = document.querySelector("#cast");

function Movie(name, type, director, img, year, imdb, desc, cast) {
  this.name = name.value;
  this.type = type.value;
  this.director = director.value;
  this.img = img.value;
  this.year = year.value
  this.imdb = imdb.value;
  this.desc = desc.value;
  this.cast = cast.value;
}
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const movie = new Movie(
    name,
    type,
    director,
    img,
    year,
    imdb,
    desc,
    cast
  )
  filmCollection.push(movie)
  localStorage.setItem("movieList", JSON.stringify(filmCollection))
  console.log(filmCollection)
})
const createMovieCard = () => {
  const movieList = JSON.parse(localStorage.getItem("movieList"))
  for (let i = 0; i < movieList.length; i++) {
    const result =
      `<div class="card my-5 text-white" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
             <img src="${movieList[i].img}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
          <div class="card-body">
              <h5 class="card-title">${movieList[i].name}</h5>
              <p class="card-text">${movieList[i].desc}</p>
              <p class="card-type"><i>Türü: ${movieList[i].type}</i></p>
              <p class="card-director"><i>Yönetmen: ${movieList[i].director}</i></p>
              <p class="card-year"><i>Yıl: ${movieList[i].year}</i></p>
              <p class="card-imdb"><i>IMDb: ${movieList[i].imdb}</i></p>
              <p class="card-cast"><i>Oyuncular: ${movieList[i].cast}</i></p>
              <button class="btn btn-danger">Delete</button>
              <button class="btn btn-warning">Update</button>
          </div>
        </div>
  </div>
</div>`
    cardArea.innerHTML = result
  }
}
createMovieCard()
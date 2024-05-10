let form = document.querySelector('#form')
let saveBtn = document.querySelector('#save')
let filmCollection = []
let cardArea = document.querySelector('#card-area')
const name = document.querySelector('#name').value
const type = document.querySelector('#type').value
const director = document.querySelector('#director').value
//img alınacak
const imdb = document.querySelector('#imdb').value
const desc = document.querySelector('#movie-description').value
const cast = document.querySelector('#cast').value

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const film = {
        name: name,
        type: type,
        director: director,
        imdb: imdb,
        desc: desc,
        cast: cast
    }
    filmCollection.push(film)

    const addFilmCard = () => {
        const result = `<div class="card my-5 text-white" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${film.name}</h5>
                    <p class="card-text">${film.desc}</p>
                    <p class="card-type"><i>Türü: ${film.type}</i></p>
                    <p class="card-director"><i>Yönetmen: ${film.director}</i></p>
                    <p class="card-imdb"><i>IMDb: ${film.imdb}</i></p>
                    <p class="card-cast"><i>Oyuncular: ${film.cast}</i></p>
                </div>
            </div>
        </div>
    </div>`
    }
    addFilmCard()
    cardArea.appendChild(result)
    cardArea.innerHTML += result
    document.querySelector('#form ').reset()
})
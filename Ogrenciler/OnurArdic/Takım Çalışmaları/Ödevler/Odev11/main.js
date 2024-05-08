const movieName = document.getElementById('moviename')
const movieDirector = document.getElementById('moviedirector')
const movieYear = document.getElementById('year')
const movieCategory = document.getElementById('moviecategory')
const movieİmage = document.getElementById('movieimage')
const addMovieForm = document.getElementById('modal-form')
const movieWrapper = document.querySelector('.movie-card-wrapper')
const deleteBtn = document.getElementById('delete-btn')
const movieList = []
let count = 1

window.onload = function () {
  for (let i = 0; i < localStorage.length; i++) {
    const movieValue = localStorage.key(i)
    addİtem(movieValue)
  }
}

addMovieForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const movie = {
    id: count++,
    name: movieName.value.trim(),
    director: movieDirector.value.trim(),
    year: movieYear.value.trim(),
    category: movieCategory.value.trim(),
    image: movieİmage.value.trim(),
  }

  localStorage.setItem(movie.name, JSON.stringify(movie))

  addİtem(movie.name)
})

function addİtem(movieValue) {
  const movieİtem = JSON.parse(localStorage.getItem(movieValue))

  const value = `
      <div class="card position-relative" data-key="${movieİtem.name}">
      <div class="card-image">
        <img
          src="${movieİtem.image}"
          alt="${movieİtem.name}"
          class="img-fluid rounded-top"
        />
      </div>
      <div class="card-content p-1 text-white">
        <h5 class="text-center" contenteditable="true">${movieİtem.name}</h5>
        <div class="movie-card-info d-flex justify-content-center gap-3 align-item-center">
          <p contenteditable="true">${movieİtem.year}</p>
          <p contenteditable="true">${movieİtem.director}</p>
        </div>
        <div class="movie-category position-absolute rounded-3 text-white">
          <span class="p-3" contenteditable="true">${movieİtem.category}</span>
        </div>
      </div>
  
      <div class="btn-wrapper position-absolute d-flex flex-column gap-2">
        <button class="btn btn-danger" onclick="deleteMovie('${movieİtem.name}')">
          <i class="bi bi-trash"></i>
        </button>
        <button class="btn btn-warning" onclick="updateMovie('${movieİtem.name}')">
          <i class="bi bi-pen"></i>
        </button>
      </div>
    </div>
      `

  movieWrapper.innerHTML += value
}

function deleteMovie(movieValue) {
  localStorage.removeItem(movieValue)
  location.reload()
}

function updateMovie(movieValue) {
  const card = document.querySelector(`[data-key="${movieValue}"]`)

  const name = card.querySelector('h5').innerText
  const year = card.querySelector('.movie-card-info p:first-child').innerText
  const director = card.querySelector('.movie-card-info p:nth-child(2)').innerText
  const category = card.querySelector('.movie-category span').innerText

  const updatedMovie = {
    name: name,
    director: director,
    year: year,
    category: category,
  }

  localStorage.setItem(movieValue, JSON.stringify(updatedMovie))
}

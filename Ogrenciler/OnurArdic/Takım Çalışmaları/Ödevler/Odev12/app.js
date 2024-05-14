const movieName = document.getElementById('moviename')
const movieDirector = document.getElementById('moviedirector')
const movieYear = document.getElementById('year')
const movieImage = document.getElementById('movieimage')
const movieCategory = document.getElementById('category')
const saveMovieButton = document.getElementById('modal-form')
const addMoviebutton = document.getElementById('addMovieButton')
const movieWrapper = document.querySelector('.movie-card-wrapper')
const submitButton = document.getElementById('saveMovie')

window.addEventListener('DOMContentLoaded', function () {
  const savedMovies = JSON.parse(localStorage.getItem('movies'))

  if (savedMovies) {
    savedMovies.forEach((movie) => {
      displayMovie(movie)
    })
  }
})

function createMovie() {
  const movieNameValue = movieName.value.trim()
  const movieDirectorValue = movieDirector.value.trim()
  const movieYearValue = movieYear.value.trim()
  const movieCategoryValue = movieCategory.value.trim()
  const movieImageValue = movieImage.value.trim()

  return new Movie(
    movieNameValue,
    movieDirectorValue,
    movieYearValue,
    movieCategoryValue,
    movieImageValue,
  )
}

saveMovieButton.addEventListener('click', function (event) {
  event.preventDefault()
  const myMovie = createMovie()
  console.log(myMovie)
})

addMoviebutton.addEventListener('click', function (event) {
  const myMovie = createMovie()
  console.log(myMovie)
})

submitButton.addEventListener('click', function (event) {
  event.preventDefault()
  const myMovie = createMovie()
  let savedMovies = JSON.parse(localStorage.getItem('movies')) || []
  savedMovies.push(myMovie)
  localStorage.setItem('movies', JSON.stringify(savedMovies))
  displayMovie(myMovie)
})

class Movie {
  constructor(name, director, year, category, image) {
    this.name = name
    this.director = director
    this.year = year
    this.category = category
    this.image = image
  }
}

function displayMovie(movie) {
  const movieDiv = document.createElement('div')
  movieDiv.innerHTML = `
      <div id="${movie.name}" class="card position-relative col-4" data-key="${movie.name}">
        <div class="card-image w-100">
          <img src="${movie.image}" alt="${movie.name}" class="img-fluid rounded-top object-fit-cover">
        </div>
        <div class="card-content p-1 text-white">
          <h5 class="text-center">${movie.name}</h5>
          <div class="movie-card-info d-flex justify-content-center gap-3 align-item-center">
            <p>${movie.year}</p>
            <p>${movie.director}</p>
          </div>
          <div class="movie-category position-absolute rounded-3 text-white">
            <span class="p-3">${movie.category}</span>
          </div>
        </div>
        <div class="btn-wrapper position-absolute d-flex flex-column gap-2">
          <button class="btn btn-danger delete-button">
            <i class="bi bi-trash"></i>
          </button>
          <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="fillModal('${movie.name}')">
            <i class="bi bi-pen"></i>
          </button>
        </div>
      </div>
    `

  // Yeni oluşturulan film kartını movieWrapper içine ekleyin
  movieWrapper.appendChild(movieDiv)

  const deleteBtn = movieDiv.querySelector('.delete-button')
  deleteBtn.addEventListener('click', function () {
    movieWrapper.removeChild(movieDiv)
    deleteMovie(movie.name)
  })

  function deleteMovie(movieName) {
    let savedMovies = JSON.parse(localStorage.getItem('movies')) || []
    savedMovies = savedMovies.filter((movie) => movie.name !== movieName)
    localStorage.setItem('movies', JSON.stringify(savedMovies))
  }
}

addMoviebutton.addEventListener('click', function () {
  const newMovie = createMovie() // Yeni bir film nesnesi oluştur
  fillModal(newMovie) // Oluşturulan film nesnesini fillModal fonksiyonuna ile
})

function fillModal(newMovie) {
  const savedMovies = JSON.parse(localStorage.getItem('movies')) || []
  const movieName = document.getElementById('moviename').value
  const movie = savedMovies.find((movie) => movie.name === movieName)

  if (movie) {
    document.getElementById('moviename').value = movie.name
    document.getElementById('moviedirector').value = movie.director
    document.getElementById('year').value = movie.year
    document.getElementById('movieimage').value = movie.image
    document.getElementById('category').value = movie.category
  } else {
    console.log('Movie not found in local storage.')
  }
}

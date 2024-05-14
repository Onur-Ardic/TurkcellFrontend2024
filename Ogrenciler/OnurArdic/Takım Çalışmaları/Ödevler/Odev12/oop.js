const movieName = document.getElementById('moviename')
const movieDirector = document.getElementById('moviedirector')
const movieYear = document.getElementById('year')
const movieCategory = document.getElementById('category')
const movieİmage = document.getElementById('movieimage')

const saveMovieButton = document.getElementById('modal-form') //inside the modal
const addMoviebutton = document.getElementById('addMovieButton')
const movieWrapper = document.querySelector('.movie-card-wrapper')
const deleteBtn = document.getElementById('delete-btn')

let movieNameToUpdate
let movieNameList = JSON.parse(localStorage.getItem('movieNameList')) || []

const BaseCategories = [
  'Action',
  'Comedy',
  'Drama',
  'Thriller',
  'Adventure',
  'Sci-Fi',
  'Romance',
  'Horror',
  'Animation',
]

addMoviebutton.addEventListener('click', () => {
  document.getElementById('staticBackdropLabel').innerText = 'Film Ekle'
  document.getElementById('saveMovie').innerText = 'Ekle'
})

class movie {
  constructor(name, image, year, director, category) {
    this.name = name
    this.image = image
    this.year = year
    this.director = director
    this.category = category
  }
}

saveMovieButton.addEventListener('submit', (e) => {
  e.preventDefault()
  const mymovie = new movie(
    movieName.value.trim(),
    movieDirector.value.trim(),
    movieYear.value.trim(),
    movieCategory.value.trim(),
    movieİmage.value.trim(),
  )

  if (document.getElementById('staticBackdropLabel').innerText == 'Film Ekle') {
    movieStorage.AddMovie(mymovie)
  } else {
    movieStorage.UpdateMovie(movieNameToUpdate, mymovie)
  }
})

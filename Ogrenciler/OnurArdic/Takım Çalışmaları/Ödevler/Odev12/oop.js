const movieName = document.getElementById('moviename')
const movieDirector = document.getElementById('moviedirector')
const movieYear = document.getElementById('year')
const movieİmage = document.getElementById('movieimage')
const movieCategory = document.getElementById('category')
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

class Movie {
  constructor(name, director, year, category, image) {
    this.name = name
    this.director = director
    this.year = year
    this.category = category
    this.image = image
  }
}

class Storage {
  constructor() {
    this.movieList = JSON.parse(localStorage.getItem('movieList')) || []
  }

  addMovie(movie) {
    this.movieList.push(movie)
    localStorage.setItem('movieList', JSON.stringify(this.movieList))
  }

  deleteMovie(movieName) {
    this.movieList = this.movieList.filter((movie) => movie.name !== movieName)
    localStorage.setItem('movieList', JSON.stringify(this.movieList))
  }

  updateMovie(movieNameToUpdate, updatedMovie) {
    this.movieList = this.movieList.map((movie) => {
      if (movie.name === movieNameToUpdate) {
        return updatedMovie
      }
      return movie
    })
    localStorage.setItem('movieList', JSON.stringify(this.movieList))
  }
}

class DropdownElements {
  constructor(BaseCategories) {
    this.categories = BaseCategories
    this.categories.forEach((category) => {
      const option = document.createElement('option')
      option.textContent = category
      movieCategory.appendChild(option)

      console.log(option)
    })
  }

  addCategory(element) {
    this.categories.push(element)
  }
}
const dropDown = new DropdownElements(BaseCategories)

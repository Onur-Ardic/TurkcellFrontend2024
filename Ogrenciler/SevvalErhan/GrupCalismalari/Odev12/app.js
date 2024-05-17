const movieName = document.getElementById('moviename')
const movieDirector = document.getElementById('moviedirector')
const movieYear = document.getElementById('year')
const movieImage = document.getElementById('movieimage')
const movieCategory = document.getElementById('category')
const saveMovieButton = document.getElementById('modal-form')
const addMoviebutton = document.getElementById('addMovieButton')
const movieWrapper = document.querySelector('.movie-card-wrapper')
const submitButton = document.getElementById('saveMovie')
const editBtn = document.querySelector('.btn-warning')


//DOMContentLoaded olayı tetiklendiğinde, localStorage'dan "movies" anahtarını kullanarak kaydedilmiş 
//filmleri alır ve ekranda görüntüler.

window.addEventListener('DOMContentLoaded', function () {
  const savedMovies = JSON.parse(localStorage.getItem('movies'))
  if (savedMovies) {
    savedMovies.forEach((movie) => {
      displayMovie(movie)    //Eğer savedMovies dizisi boş değilse (yani, önceden kaydedilmiş filmler varsa), 
      //her bir film için displayMovie fonksiyonunu çağırarak bu filmleri ekranda görüntüler.
    })
  }
})

//createMovie fonksiyonu, kullanıcı tarafından doldurulan form alanlarından verileri alır ve
// bu verilere dayanarak yeni bir film nesnesi oluşturur.
function createMovie() {
  const movieNameValue = movieName.value.trim()
  const movieDirectorValue = movieDirector.value.trim()
  const movieYearValue = movieYear.value.trim()
  const movieCategoryValue = movieCategory.value.trim()
  const movieImageValue = movieImage.value.trim()

  return new movie(
    movieNameValue,
    movieDirectorValue,
    movieYearValue,
    movieCategoryValue,
    movieImageValue,
  )
}

saveMovieButton.addEventListener('click', function (event) {  //Kullanıcı bir filmi kaydetmek için Kaydet düğmesine tıkladığında bu olay tetiklenir.
  event.preventDefault() //yöntemi sayesinde varsayılan form davranışı engellenir, yani sayfanın yeniden yüklenmesi engellenir.
  const myMovie = createMovie() //createMovie() fonksiyonu çağrılarak kullanıcının girdiği bilgilere dayanarak bir film nesnesi oluşturulur.
})
//Film Ekle düğmesine addMovieButton tıkladığımızda, createMovie fonksiyonunu çağırır ve sonuçları konsola yazdırır.
addMoviebutton.addEventListener('click', function (event) {
  const myMovie = createMovie()
  console.log(myMovie)
  document.getElementById('staticBackdropLabel').innerText = 'Film Ekle'
  clearForm()
  //Model penceresinin başlığı "Film Ekle" olarak değiştirilir 
//clearForm() fonksiyonu çağrılarak form alanları temizlenir.
})

//clearForm fonksiyonu, form alanlarını temizler.
function clearForm() {
  movieName.value = ''
  movieDirector.value = ''
  movieYear.value = ''
  movieImage.value = ''
  movieCategory.value = ''
}

//submitButton tıklandığında, createMovie fonksiyonunu çağırır, 
//yeni filmi yerel depolamaya ekler ve displayMovie fonksiyonunu çağırarak yeni filmi ekrana ekler.
submitButton.addEventListener('click', function (event) {
  event.preventDefault()
  const myMovie = createMovie()
  let savedMovies = JSON.parse(localStorage.getItem('movies')) || []  //Önceden yerel depolama alanında kaydedilmiş filmleri almak için 
  //Eğer kaydedilmiş filmler yoksa, boş bir dizi atanır.
  savedMovies.push(myMovie)
  localStorage.setItem('movies', JSON.stringify(savedMovies))  // ile güncellenmiş film koleksiyonu tekrar yerel depolama alanına kaydedilir.
  displayMovie(myMovie)
})

//bir film nesnesini alır ve bu nesneyi bir HTML kartı şeklinde ekrana ekler
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

  movieWrapper.appendChild(movieDiv)

  //silme butonunu tıklandığında, yerel depolama alanında kaydedilen filmlerden birine tıkladığımızda,
  const deleteBtn = movieDiv.querySelector('.delete-button')
  deleteBtn.addEventListener('click', function () { //Bu, silme düğmesine tıklandığında bir fonksiyonun çağrılmasını sağlar.
    movieWrapper.removeChild(movieDiv) // Bu, film kartının ekrandan kaldırılmasını sağlar.
    deleteMovie(movie.name)
  })

  function deleteMovie(movieName) {
    let savedMovies = JSON.parse(localStorage.getItem('movies')) || []
    savedMovies = savedMovies.filter((movie) => movie.name !== movieName)
    localStorage.setItem('movies', JSON.stringify(savedMovies))
  }
}

addMoviebutton.addEventListener('click', function () {
  const newMovie = createMovie()
  fillModal(newMovie.name)
})

editBtn.addEventListener('click', function (event) {
  const movieDiv = event.target.closest('.card')
  const movieName = movieDiv.dataset.key
  const savedMovies = JSON.parse(localStorage.getItem('movies')) || []
  const updateMovie = savedMovies.find((movie) => movie.name === movieName)

  localStorage.removeItem(updateMovie)
  fillModal(updateMovie)
})

function fillModal(selectedMovieName) {
  document.getElementById('staticBackdropLabel').innerText = 'Güncelle'
  const savedMovies = JSON.parse(localStorage.getItem('movies')) || []
  const updateMovie = savedMovies.find((movie) => movie.name === selectedMovieName)

  if (updateMovie) {
    document.getElementById('moviename').value = updateMovie.name
    document.getElementById('moviedirector').value = updateMovie.director
    document.getElementById('year').value = updateMovie.year
    document.getElementById('movieimage').value = updateMovie.image
    document.getElementById('category').value = updateMovie.category
  } else {
    console.log('Movie not found in local storage.')
  }
}

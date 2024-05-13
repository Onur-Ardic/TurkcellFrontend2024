function UI() { }

UI.prototype.movieCardCreate = function () {
    let movieNameValue = movieName.value;
    let movieDirectorValue = movieDirector.value;
    let movieYearValue = movieYear.value;
    let movieGenreValue = movieGenre.value;
    let moviePosterValue = moviePoster.value;
    if (movieNameValue == "" || movieDirectorValue == "" || movieYearValue == "" || movieGenreValue == "" || moviePosterValue == "") {
        alert("Boş girilmez!")
    }
    else {
        const newMovie = new Movie(movieNameValue, movieDirectorValue, movieYearValue, movieGenreValue, moviePosterValue)
        storage.addMovies(newMovie);
        this.displayAllMoviesToUI()
        this.clearInputs()
    }
}

UI.prototype.displayAllMoviesToUI = function () {
    movieCardContainer.innerHTML = ""
    let movieCards = storage.getMoviesFromStorage()
    if (movieCards.length > 0) {
        movieCards.forEach((movie) => {
            let card = document.createElement("div")
            card.classList.add("col-12", "col-md-6", "col-lg-4", "p-3")
            card.innerHTML = `
      <div
        class="movieCard rounded-4 p-5 mt-3 d-flex flex-column justify-content-center h-100"
        style="background: url('${movie.poster}');
        object-fit:cover;
        background-size: cover; background-position: center;"
      >
        <div class="text-white">
          <h5 class="p-2 fw-bold" id="movieNameCard">Film Adı: ${movie.name}</h5>
          <p class="p-2 fw-bold" id="movieDirectorCard">Yönetmen Adı: ${movie.director}</p>
          <p class="p-2 fw-bold" id="movieYearCard">Vizyon Tarihi: ${movie.year}</p>
          <p class="p-2 fw-bold" id="movieGenreCard">Türü: ${movie.genre}</p>
          <div class="d-flex justify-content-between p-2">
            <button type="button" class="btn btn-success updateBtn" 
            onclick='ui.editMovieUI("${movie.movieId}")'>
              Degistir
            </button>
            <button type="button" class="btn btn-warning deleteBtn" 
            onclick='ui.deleteMovieFromUI("${movie.movieId}")'>Sil</button>
          </div>
        </div>
      </div>`;
            movieCardContainer.appendChild(card);
        })
    }
}

UI.prototype.deleteMovieFromUI = function (movieId) {
    storage.deleteMovieFromStorage(movieId)
    this.displayAllMoviesToUI()
}

UI.prototype.editMovieUI = function (movieId) {
    let allMovies = storage.getMoviesFromStorage()

    let selectedMovie = allMovies.find((movie) => movie.movieId === movieId);
    movieName.value = selectedMovie.name;
    movieDirector.value = selectedMovie.director;
    movieYear.value = selectedMovie.year;
    movieGenre.value = selectedMovie.genre;
    moviePoster.value = selectedMovie.poster;
    this.checkEdited(true)

    document.querySelector("#bilgileriGuncelle").addEventListener("click", function () {
        let selectedMovieIndex = allMovies.findIndex((movie) => movie.movieId === movieId);
        allMovies[selectedMovieIndex].name = movieName.value;
        allMovies[selectedMovieIndex].director = movieDirector.value;
        allMovies[selectedMovieIndex].year = movieYear.value;
        allMovies[selectedMovieIndex].genre = movieGenre.value;
        allMovies[selectedMovieIndex].poster = moviePoster.value;
        storage.addMovieToStorage(allMovies)
        ui.displayAllMoviesToUI()
        ui.clearInputs()
        ui.checkEdited(false)
    }, { once: true })
}

UI.prototype.checkEdited = function (isEdited) {
    if (!isEdited) {
        document.getElementById("afisOlustur").classList.remove("d-none");
        document.getElementById("bilgileriGuncelle").classList.add("d-none");
    }
    else {
        document.getElementById("afisOlustur").classList.add("d-none");
        document.getElementById("bilgileriGuncelle").classList.remove("d-none");
    }
}

UI.prototype.clearInputs = function () {
    [movieName, movieDirector, movieYear, movieGenre, moviePoster].forEach(input => input.value = "");
}
class UI {
    static movieCardCreate() {
        let movieNameValue = movieName.value;
        let movieDirectorValue = movieDirector.value;
        let movieYearValue = movieYear.value;
        let movieGenreValue = movieGenre.value;
        let moviePosterValue = moviePoster.value;
        if (movieNameValue == "" || movieDirectorValue == "" || movieYearValue == "" || movieGenreValue == "" || moviePosterValue == "") {
            alert("Boş girilmez!");
        }
        else {
            const newMovie = new Movie(movieNameValue, movieDirectorValue, movieYearValue, movieGenreValue, moviePosterValue);
            Storage.addMovies(newMovie);
            this.displayAllMoviesToUI();
            this.clearInputs();
        }
    }
    static displayAllMoviesToUI() {
        movieCardContainer.innerHTML = "";
        let movieCards = Storage.getMoviesFromStorage();
        if (movieCards.length > 0) {
            movieCards.forEach((movie) => {
                let card = document.createElement("div");
                card.classList.add("col-12", "col-md-6", "col-lg-4", "p-3");
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
            onclick='UI.editMovieUI("${movie.movieId}")'>
              Degistir
            </button>
            <button type="button" class="btn btn-warning deleteBtn" 
            onclick='UI.deleteMovieFromUI("${movie.movieId}")'>Sil</button>
          </div>
        </div>
      </div>`;
                movieCardContainer.appendChild(card);
            });
        }
    }
    static deleteMovieFromUI(movieId) {
        Storage.deleteMovieFromStorage(movieId);
        this.displayAllMoviesToUI();
    }
    static editMovieUI(movieId) {
        let allMovies = Storage.getMoviesFromStorage();
        let selectedMovie = allMovies.find(movie => movie.movieId === movieId);

        const setMovieInputs = (movie) => {
            movieName.value = movie.name;
            movieDirector.value = movie.director;
            movieYear.value = movie.year;
            movieGenre.value = movie.genre;
            moviePoster.value = movie.poster;
        };
        setMovieInputs(selectedMovie);

        this.checkEdited(true);

        const updateMovie = () => {
            Object.assign(selectedMovie, {
                name: movieName.value,
                director: movieDirector.value,
                year: movieYear.value,
                genre: movieGenre.value,
                poster: moviePoster.value,
            });

            Storage.addMovieToStorage(allMovies);
            this.displayAllMoviesToUI();
            this.clearInputs();
            this.checkEdited(false);
        };

        document.querySelector("#bilgileriGuncelle").addEventListener("click", updateMovie, { once: true });
    }
    static checkEdited(isEdited) {
        if (!isEdited) {
            document.getElementById("afisOlustur").classList.remove("d-none");
            document.getElementById("bilgileriGuncelle").classList.add("d-none");
        }
        else {
            document.getElementById("afisOlustur").classList.add("d-none");
            document.getElementById("bilgileriGuncelle").classList.remove("d-none");
        }
    }
    static clearInputs() {
        [movieName, movieDirector, movieYear, movieGenre, moviePoster].forEach(input => input.value = "");
    }
}
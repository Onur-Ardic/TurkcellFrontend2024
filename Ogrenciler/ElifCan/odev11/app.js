const movieName = document.getElementById("moviename");
const movieDirector = document.getElementById("moviedirector");
const movieYear = document.getElementById("year");
const movieCategory = document.getElementById("category");
const movieİmage = document.getElementById("movieimage");
const addMovieForm = document.getElementById("modal-form");
const movieWrapper = document.querySelector(".movie-card-wrapper");
const deleteBtn = document.getElementById("delete-btn");

const movieNameList = JSON.parse(localStorage.getItem("movieNameList")) || [];
let count = 1;

window.onload = function () {
  movieNameList.forEach((movieName) => {
    addİtem(movieName.name);
  });
};

addMovieForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const movie = {
    id: count++,
    name: movieName.value.trim(),
    director: movieDirector.value.trim(),
    year: movieYear.value.trim(),
    category: movieCategory.value.trim(),
    image: movieİmage.value.trim(),
  };

  movieNameList.push(movie);
  localStorage.setItem("movieNameList", JSON.stringify(movieNameList));
  addİtem(movie.name);
});

function addİtem(movieValue) {
  const movieNameList = JSON.parse(localStorage.getItem("movieNameList")) || [];
  const movieİtem = movieNameList.find((movie) => movie.name === movieValue);

  const value = `
      <div class="card position-relative col-4" data-key="${movieİtem.name}">
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
        <button class="btn btn-warning" data-bs-toggle="modal"
		  data-bs-target="#staticBackdrop" onclick="updateMovie('${movieİtem.name}')">
          <i class="bi bi-pen"></i>
        </button>
      </div>
    </div>
      `;

  document.getElementById("movie-card-wrapper").innerHTML += value;
}

function deleteMovie(movieValue) {
  movieNameList.forEach((movie, index) => {
    if (movie.name === movieValue) {
      movieNameList.splice(index, 1); // Listeden çıkarma
    }
  });

  localStorage.setItem("movieNameList", JSON.stringify(movieNameList));

  const cardToRemove = document.querySelector(`[data-key="${movieValue}"]`);
  if (cardToRemove) {
    cardToRemove.style.display = "none";
  }
}

function updateMovie(movieValue) {
  //   document.getElementById("staticBackdropLabel").innerText = "Güncelle";
  //   document.document.querySelector(`[data-key="${movieValue}"]`).innerHTML =
  //     "elif";
  //   console.log(document.querySelector(".formMovieName").innerText);
  //   const card = document.querySelector(`[data-key="${movieValue}"]`);
  //   const name = card.querySelector("h5").innerText;
  //   const year = card.querySelector(".movie-card-info p:first-child").innerText;
  //   const director = card.querySelector(
  //     ".movie-card-info p:nth-child(2)"
  //   ).innerText;
  //   const category = card.querySelector(".movie-category span").innerText;
  //   const updatedMovie = {
  //     name: name,
  //     director: director,
  //     year: year,
  //     category: category,
  //   };
  //   localStorage.setItem(movieValue, JSON.stringify(updatedMovie));
}

//for category options+
const movieCategories = [
  "All Categories",
  "Action",
  "Comedy",
  "Drama",
  "Thriller",
  "Adventure",
  "Sci-Fi",
  "Romance",
  "Horror",
  "Animation",
];

const selectElement = document.getElementById("categoryFilter");

movieCategories.forEach((category) => {
  const option = document.createElement("option");
  option.textContent = category;
  option.textContent == "All Categories"
    ? (option.value = "")
    : (option.value = category);

  selectElement.appendChild(option);
});

document
  .getElementById("movienameFilter")
  .addEventListener("input", function () {
    //önce ekrandaki kartları temizledik
    const movieWrapper = document.getElementById("movie-card-wrapper");
    movieWrapper.innerHTML = "";

    //inputtaki value değerini alık.
    const inputValue = this.value;
    const filteredMovies = movieNameList.filter((movie) => {
      return movie.name.toLowerCase().includes(inputValue);
    });

    filteredMovies.forEach((movie) => {
      addİtem(movie.name);
    });
  });

document
  .getElementById("movienameFilter")
  .addEventListener("input", function () {
    //önce ekrandaki kartları temizledik
    const movieWrapper = document.getElementById("movie-card-wrapper");
    movieWrapper.innerHTML = "";

    //inputtaki value değerini alık.
    const inputValue = this.value;
    const filteredMovies = movieNameList.filter((movie) => {
      return movie.name.toLowerCase().includes(inputValue);
    });
    filteredMovies.forEach((movie) => {
      addİtem(movie.name);
    });
  });

document
  .getElementById("directorFilter")
  .addEventListener("input", function () {
    //önce ekrandaki kartları temizledik
    const movieWrapper = document.getElementById("movie-card-wrapper");
    movieWrapper.innerHTML = "";

    //inputtaki value değerini alık.
    const inputValue = this.value;
    const filteredMovies = movieNameList.filter((movie) => {
      return movie.director.toLowerCase().includes(inputValue);
    });
    filteredMovies.forEach((movie) => {
      addİtem(movie.name);
    });
  });

document.getElementById("yearFilter").addEventListener("input", function () {
  //önce ekrandaki kartları temizledik
  const movieWrapper = document.getElementById("movie-card-wrapper");
  movieWrapper.innerHTML = "";

  //inputtaki value değerini alık.
  const inputValue = this.value;
  const filteredMovies = movieNameList.filter((movie) => {
    return movie.year.toLowerCase().includes(inputValue);
  });
  filteredMovies.forEach((movie) => {
    addİtem(movie.name);
  });
});

document
  .getElementById("categoryFilter")
  .addEventListener("change", function () {
    //önce ekrandaki kartları temizledik
    const movieWrapper = document.getElementById("movie-card-wrapper");
    movieWrapper.innerHTML = "";

    //inputtaki value değerini alık.
    const inputValue = this.value;
    console.log(inputValue); // Hata burada
    const filteredMovies = movieNameList.filter((movie) => {
      return movie.category.includes(inputValue);
    });

    filteredMovies.forEach((movie) => {
      addİtem(movie.name);
    });
  });

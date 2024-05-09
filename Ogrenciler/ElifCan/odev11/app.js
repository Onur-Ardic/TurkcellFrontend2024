const movieName = document.getElementById("moviename");
const movieDirector = document.getElementById("moviedirector");
const movieYear = document.getElementById("year");
const movieCategory = document.getElementById("category");
const movieİmage = document.getElementById("movieimage");
const addMovieForm = document.getElementById("modal-form");
const addMoviebutton = document.getElementById("addMovieButton");
const movieWrapper = document.querySelector(".movie-card-wrapper");
const deleteBtn = document.getElementById("delete-btn");

let movieNameList = JSON.parse(localStorage.getItem("movieNameList")) || [];
let count = 1;

window.onload = function () {
  movieNameList.forEach((movieName) => {
    addİtem(movieName.name);
  });
};
addMoviebutton.addEventListener("click", (e) => {
  document.getElementById("staticBackdropLabel").innerText = "Film Ekle";
});
addMovieForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (document.getElementById("staticBackdropLabel").innerText == "Güncelle") {
    elif();
  }
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
      <div class="card-image w-100">
        <img
          src="${movieİtem.image}"
          alt="${movieİtem.name}"
          class="img-fluid rounded-top object-fit-cover  "
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
  //movie bilgilerini aldım.
  document.getElementById("staticBackdropLabel").innerText = "Güncelle";
  const movie = movieNameList.find((movie) => movie.name === movieValue);
  document.getElementById("moviename").value = movie.name;
  document.getElementById("moviedirector").value = movie.director;
  document.getElementById("year").value = movie.year;
  document.getElementById("category").value = movie.category;
  document.getElementById("movieimage").value = movie.image;
}
function elif() {
  console.log("eliff");
  movieNameList = movieNameList.filter((movie) => movie.name !== movieValue);
  movieNameList.push(movie);
  localStorage.setItem("movieNameList", JSON.stringify(movieNameList));
}

const selectElementFilter = document.getElementById("categoryFilter");
const selectElementAdd = document.getElementById("category");
//for category options
const movieCategories = [
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
const optionAllCategories = document.createElement("option");
optionAllCategories.textContent = "All Categories";
optionAllCategories.textContent = "All Categories";
selectElementFilter.appendChild(optionAllCategories);

movieCategories.forEach((category) => {
  const option = document.createElement("option");
  option.textContent = category;
  option.textContent = category;

  selectElementFilter.appendChild(option);

  const optionForAdd = option.cloneNode(true);
  selectElementAdd.appendChild(optionForAdd);
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

//bunu kısaltalım bi ara
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

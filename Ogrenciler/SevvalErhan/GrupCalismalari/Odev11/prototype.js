const movieName = document.getElementById("moviename");
const movieDirector = document.getElementById("moviedirector");
const movieYear = document.getElementById("year");
const movieCategory = document.getElementById("category");
const movieİmage = document.getElementById("movieimage");

const saveMovieButton = document.getElementById("modal-form"); //inside the modal
const addMoviebutton = document.getElementById("addMovieButton");
const movieWrapper = document.querySelector(".movie-card-wrapper");
const deleteBtn = document.getElementById("delete-btn");

let movieNameToUpdate;
let movieNameList = JSON.parse(localStorage.getItem("movieNameList")) || [];

const BaseCategories = [
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
const movieStorage = new Storage();
const Page = new UI();
const dropdown = new DropDownElements(BaseCategories);

addMoviebutton.addEventListener("click", () => {
  document.getElementById("staticBackdropLabel").innerText = "Film Ekle";
  document.getElementById("saveMovie").innerText = "Ekle";
});

function fillModal(movieName) {
  document.getElementById("staticBackdropLabel").innerText = "Güncelle";
  document.getElementById("saveMovie").innerText = "Güncelle";
  const movie = movieStorage.movieNameList.find(
    (movie) => movie.name === movieName
  );
  movieNameToUpdate = movie.name;
  Page.FillModal(
    movie.name,
    movie.director,
    movie.year,
    movie.category,
    movie.image
  );
}

saveMovieButton.addEventListener("submit", (e) => {
  e.preventDefault();
  const mymovie = new movie(
    movieName.value.trim(),
    movieDirector.value.trim(),
    movieYear.value.trim(),
    movieCategory.value.trim(),
    movieİmage.value.trim()
  );
  if (document.getElementById("staticBackdropLabel").innerText == "Film Ekle") {
    movieStorage.AddMovie(mymovie);
  } else {
    movieStorage.UpdateMovie(movieNameToUpdate, mymovie);
  }
});

window.onload = function () {
  dropdown.FillDropDown(document.getElementById("categoryFilter"));
  dropdown.FillDropDown(document.getElementById("category"));

  movieStorage.movieNameList.forEach((movieName) => {
    Page.AddCard(
      movieName.name,
      movieName.image,
      movieName.year,
      movieName.director,
      movieName.category
    );
  });
};

function DeleteMovie(movieName) {
  movieStorage.DeleteMovie(movieName);
}

function movie(name, director, year, category, image) {
  this.name = name;
  this.director = director;
  this.year = year;
  this.category = category;
  this.image = image;
}

function Storage() {
  this.movieNameList = JSON.parse(localStorage.getItem("movieNameList")) || [];
}

Storage.prototype.AddMovie = function (movie) {
  this.movieNameList.push(movie);
  localStorage.setItem("movieNameList", JSON.stringify(this.movieNameList));
  Page.AddCard(
    movie.name,
    movie.image,
    movie.year,
    movie.director,
    movie.category
  );
};

Storage.prototype.DeleteMovie = function (movieValue) {
  this.movieNameList.forEach((movie, index) => {
    if (movie.name === movieValue) {
      movieNameList.splice(index, 1); // Listeden çıkarma
    }
  });
  localStorage.setItem("movieNameList", JSON.stringify(movieNameList));
  Page.DeleteCardFromUI(movieValue);
};

Storage.prototype.UpdateMovie = function (moviNameToUpdate, movie) {
  this.movieNameList.forEach((movieItem) => {
    if (movieItem.name == moviNameToUpdate) {
      movieItem.name = movie.name;
      movieItem.director = movie.director;
      movieItem.year = movie.year;
      movieItem.category = movie.category;
      movieItem.image = movie.image;
    }
  });
  localStorage.setItem("movieNameList", JSON.stringify(this.movieNameList));
  Page.Update(moviNameToUpdate, movie);
};

function UI() {}

UI.prototype.AddCard = function (name, image, year, director, category) {
  this.name = name;
  this.image = image;
  this.year = year;
  this.director = director;
  this.category = category;
  const value = `
	<div id=${name} class="card position-relative col-4" data-key="${name}">
	<div class="card-image w-100">
	  <img
		 src="${image}"
		 alt="${name}"
		 class="img-fluid rounded-top object-fit-cover  "
	  />
	</div>
	<div  class="card-content p-1 text-white">
	  <h5 class="text-center"  contenteditable="true">${name}</h5>
	  <div class="movie-card-info d-flex justify-content-center gap-3 align-item-center">
		 <p contenteditable="true">${year}</p>
		 <p contenteditable="true">${director}</p>
	  </div>
	  <div class="movie-category position-absolute rounded-3 text-white">
		 <span class="p-3" contenteditable="true">${category}</span>
	  </div>
	</div>

	<div class="btn-wrapper position-absolute d-flex flex-column gap-2">
	  <button class="btn btn-danger" onclick="DeleteMovie('${name}')">
		 <i class="bi bi-trash"></i>
	  </button>
	  <button class="btn btn-warning" data-bs-toggle="modal"
	  data-bs-target="#staticBackdrop" onclick="fillModal('${name}')">
		 <i class="bi bi-pen"></i>
	  </button>
	</div>
 </div>
	`;
  document.getElementById("movie-card-wrapper").innerHTML += value;
};

UI.prototype.DeleteCardFromUI = function (movieValue) {
  document.querySelector(`[data-key="${movieValue}"]`).style.display = "none";
};

UI.prototype.FillModal = function (name, director, year, category, image) {
  movieNameToUpdate = name;
  document.getElementById("moviename").value = name;
  document.getElementById("moviedirector").value = director;
  document.getElementById("year").value = year;
  document.getElementById("category").value = category;
  document.getElementById("movieimage").value = image;
};

UI.prototype.Update = function (moviNameToUpdate, movie) {
  let movieCard = document.getElementById(moviNameToUpdate);
  movieCard.querySelector("h5").innerText = movie.name;
  movieCard.querySelector("p").innerText = movie.year;
  movieCard.querySelector("p:nth-child(2)").innerText = movie.director;
  movieCard.querySelector("span").innerText = movie.category;
  movieCard.querySelector("img").src = movie.image;
};

function DropDownElements(categoryArray) {
  this.movieCategories = categoryArray;
}

DropDownElements.prototype.FillDropDown = function (DropDownElement) {
  this.movieCategories.forEach((category) => {
    const option = document.createElement("option");
    option.textContent = category;
    DropDownElement.appendChild(option);
  });
};

DropDownElements.prototype.AddCategory = function (element) {
  this.movieCategories.push(element);
};

const FilteredCards = new FilterInput();
function FilterInput() {}

FilterInput.prototype.FilterInputAreas = function (value, filterType) {
  this.ClearPage();
  const inputValue = value;
  const filteredMovies = movieStorage.movieNameList.filter((movie) => {
    if (filterType == "name") {
      return movie.name.toLowerCase().includes(inputValue);
    }
    if (filterType == "director") {
      return movie.director.toLowerCase().includes(inputValue);
    }
    if (filterType == "year") {
      return movie.year.toLowerCase().includes(inputValue);
    }
    if (filterType == "category") {
      if (inputValue == "Choose a Category") {
        return movie.category;
      }
      return movie.category.includes(inputValue);
    }
  });

  filteredMovies.forEach((movie) => {
    Page.AddCard(
      movie.name,
      movie.image,
      movie.year,
      movie.director,
      movie.category
    );
  });
};

FilterInput.prototype.ClearPage = function () {
  const movieWrapper = document.getElementById("movie-card-wrapper");
  movieWrapper.innerHTML = "";
};

document
  .getElementById("movienameFilter")
  .addEventListener("input", function () {
    FilteredCards.FilterInputAreas(this.value, "name");
  });

document
  .getElementById("directorFilter")
  .addEventListener("input", function () {
    FilteredCards.FilterInputAreas(this.value, "director");
  });

document.getElementById("yearFilter").addEventListener("input", function () {
  FilteredCards.FilterInputAreas(this.value, "year");
});

document
  .getElementById("categoryFilter")
  .addEventListener("change", function () {
    FilteredCards.FilterInputAreas(this.value, "category");
  });

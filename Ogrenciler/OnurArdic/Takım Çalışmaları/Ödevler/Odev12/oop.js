import { movie } from "./movie.js";
import { Storage } from "./storage.js";
import { UI } from "./ui.js";
const movieName = document.getElementById("moviename");
const movieDirector = document.getElementById("moviedirector");
const movieYear = document.getElementById("year");
const movieİmage = document.getElementById("movieimage");
const movieCategory = document.getElementById("category");
const saveMovieButton = document.getElementById("modal-form"); //inside the modal
const addMoviebutton = document.getElementById("addMovieButton");
const movieWrapper = document.querySelector(".movie-card-wrapper");
const deleteBtn = document.getElementById("delete-btn");

let movieNameToUpdate;

addMoviebutton.addEventListener("click", () => {
  document.getElementById("staticBackdropLabel").innerText = "Film Ekle";
  document.getElementById("saveMovie").innerText = "Ekle";
});

// const BaseCategories = [
//   "Action",
//   "Comedy",
//   "Drama",
//   "Thriller",
//   "Adventure",
//   "Sci-Fi",
//   "Romance",
//   "Horror",
//   "Animation",
// ];
const movieStorage = new Storage();
const Page = new UI(movieStorage);

window.onload = function () {
  //dropdown.FillDropDown(document.getElementById("categoryFilter"));
  //dropdown.FillDropDown(document.getElementById("category"));

  movieStorage.movieList.forEach((movieName) => {
    Page.AddCard(
      movieName.name,
      movieName.image,
      movieName.year,
      movieName.director,
      movieName.category
    );
  });
};

saveMovieButton.addEventListener("submit", (e) => {
  e.preventDefault();
  const mymovie = new movie(
    movieName.value.trim(),
    movieDirector.value.trim(),
    movieYear.value.trim(),
    movieCategory.value.trim(),
    movieİmage.value.trim()
  );
  //if (document.getElementById("staticBackdropLabel").innerText == "Film Ekle") {
  movieStorage.addMovie(mymovie);
  Page.AddCard(
    mymovie.name,
    mymovie.image,
    mymovie.year,
    mymovie.director,
    mymovie.category
  );
  // } else {
  //   movieStorage.UpdateMovie(movieNameToUpdate, mymovie);
  // }
});

// class DropdownElements {
//   constructor(BaseCategories) {
//     this.categories = BaseCategories;
//     this.categories.forEach((category) => {
//       const option = document.createElement("option");
//       option.textContent = category;
//       movieCategory.appendChild(option);

//       console.log(option);
//     });
//   }

//   addCategory(element) {
//     this.categories.push(element);
//   }
// }
// const dropDown = new DropdownElements(BaseCategories);

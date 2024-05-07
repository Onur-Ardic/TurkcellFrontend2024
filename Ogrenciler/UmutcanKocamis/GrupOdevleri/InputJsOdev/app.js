const nameInput = document.querySelector("#name");
const directorInput = document.querySelector("#director");
const yearInput = document.querySelector("#year");
const genreInput = document.querySelector("#genre");
const imageInput = document.querySelector("#image");
const submitButton = document.querySelector("#submitButton");
const movieForm = document.querySelector("#movieForm");
const cards = document.querySelector(".cards");

let moviesArray = JSON.parse(localStorage.getItem("moviesArray"));
display(moviesArray);
function addMovie(e) {
  e.preventDefault();
  const newMovie = {
    name: nameInput.value,
    director: directorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
    image: imageInput.value,
  };

  if (checkName(moviesArray, newMovie)) {
    return;
  }
  moviesArray.push(newMovie);
  localStorage.setItem("moviesArray", JSON.stringify(moviesArray));
  display(moviesArray);
}
function checkName(array, newMovie) {
  return array.find((movie) => movie.name == newMovie.name);
}
function updateMovie(name) {
  let updatedMovie = moviesArray.filter((movie) => movie.name === name);
  nameInput.value = updatedMovie[0].name;
  yearInput.value = updatedMovie[0].year;
  directorInput.value = updatedMovie[0].director;
  genreInput.value = updatedMovie[0].genre;
  imageInput.value = updatedMovie[0].image;
}
// movieForm.addEventListener("change", () =>{
//   array.textContent = newMovie.value
// } )
function display(array) {
  cards.innerHTML = "";
  array.map((movie) => {
    const card = document.createElement("div");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteMovie(movie.name);
    });
    const updateButton = document.createElement("button");
    updateButton.addEventListener("change", () => {
      updateMovie(movie.name);
    });
    updateButton.textContent = "Update";
    card.textContent = movie.name + " " + movie.director;
    card.appendChild(deleteButton);
    card.appendChild(updateButton);
    cards.appendChild(card);
  });
}
submitButton.addEventListener("click", addMovie);

function deleteMovie(name) {
  moviesArray = moviesArray.filter((movie) => movie.name !== name);
  localStorage.setItem("moviesArray", JSON.stringify(moviesArray));
  display(moviesArray);
}

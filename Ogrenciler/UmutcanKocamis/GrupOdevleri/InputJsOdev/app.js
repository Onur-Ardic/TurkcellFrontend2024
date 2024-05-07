const nameInput = document.querySelector("#name");
const directorInput = document.querySelector("#director");
const yearInput = document.querySelector("#year");
const genreInput = document.querySelector("#genre");
const imageInput = document.querySelector("#image");
const submitButton = document.querySelector("#submitButton");
const movieForm = document.querySelector("#movieForm");
const cards = document.querySelector(".cards");
let updateMode = false;
let movieIndex;

let moviesArray = JSON.parse(localStorage.getItem("moviesArray")) || [];
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
  if (!validation()) {
    alert("Tüm alanları doldurunuz!");
    return;
  }
  moviesArray.push(newMovie);
  localStorage.setItem("moviesArray", JSON.stringify(moviesArray));
  display(moviesArray);
  clean();
}
function checkName(array, newMovie) {
  return array.find((movie) => movie.name == newMovie.name);
}
function updateMovie(name) {
  updateMode = true;
  submitButton.textContent = "Edit";
  let updatedMovie = moviesArray.filter((movie) => movie.name === name);
  nameInput.value = updatedMovie[0].name;
  yearInput.value = updatedMovie[0].year;
  directorInput.value = updatedMovie[0].director;
  genreInput.value = updatedMovie[0].genre;
  imageInput.value = updatedMovie[0].image;
  movieIndex = moviesArray.findIndex((movie) => movie.name === name);
}

function editMovie(e) {
  e.preventDefault();
  const updatedObject = {
    name: nameInput.value,
    director: directorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
    image: imageInput.value,
  };
  if (!validation()) {
    alert("Tüm alanları doldurunuz!");
    return;
  }
  moviesArray[movieIndex] = updatedObject;
  localStorage.setItem("moviesArray", JSON.stringify(moviesArray));
  display(moviesArray);
  updateMode = false;
  submitButton.textContent = "Add";
  clean();
}

function display(array) {
  cards.innerHTML = "";
  array.map((movie) => {
    const card = document.createElement("div");
    card.classList.add("card", "col-lg-6");
    const row = document.createElement("div");
    row.classList.add("row", "my-auto");
    card.appendChild(row);

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("col-6");
    card.appendChild(imageDiv);
    const imageName = document.createElement("img");
    imageName.classList.add("img-fluid");
    imageName.src = movie.image;
    imageDiv.appendChild(imageName);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "col-6", "p-0", "my-auto");
    card.appendChild(cardBody);
    const title = document.createElement("h2");
    title.classList.add("card-title", "mb-1");
    cardBody.appendChild(title);
    title.textContent = movie.name;

    row.appendChild(imageDiv);
    row.appendChild(cardBody);

    const directorName = document.createElement("h5");
    directorName.classList.add("card-text", "mb-2", "text-secondary");
    cardBody.appendChild(directorName);
    directorName.textContent = movie.director;

    const genreName = document.createElement("h6");
    genreName.classList.add("card-text", "text-success");
    cardBody.appendChild(genreName);
    genreName.textContent = movie.genre;

    const yearName = document.createElement("h6");
    yearName.classList.add("card-text", "text-secondary");
    cardBody.appendChild(yearName);
    yearName.textContent = movie.year;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("d-flex", "mt-2", "gap-2");
    cardBody.appendChild(buttonsDiv);
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-primary");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteMovie(movie.name);
    });
    const updateButton = document.createElement("button");
    updateButton.classList.add("btn", "btn-danger");
    updateButton.addEventListener("click", () => {
      updateMovie(movie.name);
    });
    updateButton.textContent = "Update";
    card.appendChild(deleteButton);
    card.appendChild(updateButton);
    cards.appendChild(card);
    buttonsDiv.appendChild(updateButton);
    buttonsDiv.appendChild(deleteButton);
  });
}
submitButton.addEventListener("click", (e) => {
  if (updateMode) {
    editMovie(e);
  } else {
    addMovie(e);
  }
});

function deleteMovie(name) {
  moviesArray = moviesArray.filter((movie) => movie.name !== name);
  localStorage.setItem("moviesArray", JSON.stringify(moviesArray));
  display(moviesArray);
}
function validation() {
  if (
    nameInput.value === "" ||
    directorInput.value === "" ||
    yearInput.value === "" ||
    genreInput.value === "" ||
    imageInput.value === ""
  ) {
    return false;
  }
  return true;
}
function clean() {
  nameInput.value = "";
  directorInput.value = "";
  yearInput.value = "";
  genreInput.value = "";
  imageInput.value = "";
}

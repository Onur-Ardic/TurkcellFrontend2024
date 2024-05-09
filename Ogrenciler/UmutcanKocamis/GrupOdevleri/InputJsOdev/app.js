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
    card.classList.add("card", "col-xl-5");
    const row = document.createElement("div");
    row.classList.add("row", "my-auto");
    card.appendChild(row);

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("col-md-6");
    card.appendChild(imageDiv);
    const imageName = document.createElement("img");
    imageName.classList.add("img-fluid", "rounded-2");
    imageName.src = movie.image;
    imageDiv.appendChild(imageName);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "col-md-6", "p-md-0", "my-auto");
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

// [
//   {
//     name: "La La Land",
//     director: "Damien Chazella",
//     year: "2016",
//     genre: "Musical",
//     image:
//       "https://m.media-amazon.com/images/S/pv-target-images/178c2a0f654a66eda07ca098fa243728b6bc7c5f4359863860e12c50be3b8e39.jpg",
//   },
//   {
//     name: "Fight Club",
//     director: "David Fincher",
//     year: "1999",
//     genre: "Action",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//   },
//   {
//     name: "Inglourious Basterds",
//     director: "Quentin Tarantino",
//     year: "2009",
//     genre: "Historical",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
//   },
//   {
//     name: "Babylon",
//     director: "Damien Chazella",
//     year: "2022",
//     genre: "Action",
//     image:
//       "https://cdn.sanity.io/images/j0wdmpyb/production/aae41c363bdd0b7d56cb90e8064bd15b6160fd3a-954x1350.webp?fp-x=0.5&fp-y=0.5&w=640&h=906&fit=crop&crop=focalpoint&auto=format",
//   },
//   {
//     name: "Pulp Fiction",
//     director: "Quentin Tarantino",
//     year: "1994",
//     genre: "Action",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//   },
//   {
//     name: "Interstaller",
//     director: "Christopher Nolan",
//     year: "2014",
//     genre: "Sci-fi",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRE8xZbi8r7ImwqImi3Wow7AoKwATmbFldLmtbbu5O9w&s",
//   },
// ];

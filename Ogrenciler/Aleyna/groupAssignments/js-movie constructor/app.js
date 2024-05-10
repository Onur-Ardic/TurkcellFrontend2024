const ui = new UI();
let editId;
let editStatus = false;
let image;

let movieList = [];

if (localStorage.getItem("movieList") !== null) {
  movieList = JSON.parse(localStorage.getItem("movieList"));
}

ui.displayMovies("All");

ui.form.addEventListener("submit", newMovie);

function newMovie() {
  if (!editStatus) {
    movieList.push({
      id: crypto.randomUUID(),
      movieName: movieNameInput.value,
      director: directorInput.value,
      year: yearInput.value,
      type: typeInput.value,
      image: imageInput.value,
    });
  } else {
    for (let movie of movieList) {
      if (editId == movie.id) {
        movie.movieName = movieNameInput.value;
        movie.director = directorInput.value;
        movie.year = yearInput.value;
        movie.type = typeInput.value;
        movie.image = imageInput.value;
      }
    }
    btnAdd.textContent = "Submit";
  }
  editStatus = false;
  movieNameInput.value = "";
  directorInput.value = "";
  yearInput.value = "";
  typeInput.value = "";
  imageInput.value = "";
  movieNameShows.innerText = "";
  directorShows.innerText = "";
  yearShows.innerText = "";
  typeShows.innerText = "";
  imgShows.src = "img/Red and Blue Movie Night Poster.png";
  localStorage.setItem("movieList", JSON.stringify(movieList));
  displayMovies(document.querySelector("#filters div.active").textContent);
}

function editMovie(id, name, director, year, type, image) {
  editId = id;
  movieNameInput.value = name;
  directorInput.value = director;
  yearInput.value = year;
  typeInput.value = type;
  imageInput.value = image;

  movieNameShows.innerText = name;
  directorShows.innerText = director;
  yearShows.innerText = year;
  typeShows.innerText = type;
  imgShows.src = image;
  editStatus = true;
  btnAdd.textContent = "Update";
}

function deleteMovie(id) {
  let deleteId;
  for (let index in movieList) {
    if (movieList[index].id == id) {
      deleteId = index;
    }
  }

  movieList.splice(deleteId, 1);
  localStorage.setItem("movieList", JSON.stringify(movieList));
  displayMovies(document.querySelector("#filters div.active").textContent);
}

for (let filter of ui.filters) {
  filter.addEventListener("click", function () {
    document.querySelector("#filters div.active").classList.remove("active");
    filter.classList.add("active");
    displayMovies(filter.textContent);
  });
}

ui.movieNameInput.addEventListener("input", function () {
  ui.movieNameShows.innerText = ui.movieNameInput.value;
});
ui.directorInput.addEventListener("input", function () {
  ui.directorShows.innerText = ui.directorInput.value;
});
ui.yearInput.addEventListener("input", function () {
  ui.yearShows.innerText = ui.yearInput.value;
});
ui.typeInput.addEventListener("input", function () {
  ui.typeShows.innerText = ui.typeInput.value;
});
ui.imageInput.addEventListener("input", function () {
  let newBack = `${ui.imageInput.value}`;
  document.querySelector("#cardShows img").src = newBack;
});

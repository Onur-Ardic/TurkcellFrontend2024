function UI() {}


UI.prototype.displayMovies = function (){
  
  const moviesList = document.getElementById("moviesList");
  moviesList.textContent = "";

  let filmListesi = JSON.parse(localStorage.getItem("movies")) || [];
  
  filmListesi.forEach((film) => {
    const listItem = document.createElement("li");
    listItem.className = "mb-3";
    this.createMovieCard (film);
    this.movieTypes (film);
  });
  
  
};

UI.prototype.createMovieCard = function (movie) {
  const listItem = document.createElement("li");
  listItem.className = "mb-3";

  const card = document.createElement("div");
  card.className = "card bg-light border-0 text-secondary shadow-sm";
  card.style.width = "22rem";

  const cardBody = this.createCardBody(movie);
  card.appendChild(cardBody);
  listItem.appendChild(card);
  return listItem;
};

UI.prototype.createCardBody = function (movie) {
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = movie.name;
  cardBody.appendChild(title);

  const ul = this.createDetailsList(movie);
  cardBody.appendChild(ul);

  const image = this.createImage(movie.imageUrl);
  cardBody.appendChild(image);

  const updateBtn = this.createUpdateButton(movie);
  cardBody.appendChild(updateBtn);

  const deleteButton = this.createDeleteButton(movie.id);
  cardBody.appendChild(deleteButton);

  return cardBody;
};

UI.prototype.createDetailsList = function (movie) {
  const ul = document.createElement("ul");
  ul.className = "list-unstyled";
  ul.appendChild(this.createListItem(`Yönetmen: ${movie.director}`));
  ul.appendChild(this.createListItem(`Yılı: ${movie.year}`));
  ul.appendChild(
    this.createListItem(`Film Türü: ${movie.movieType}`)
  );
  return ul;
};

UI.prototype.createListItem = function (text) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.className = "card-text";
  p.textContent = text;
  li.appendChild(p);
  return li;
};

// ben ekledim
UI.prototype.movieTypes = function (movie) {
  const movieTypes = {
    1: "Bilim Kurgu",
    2: "Aksiyon",
    3: "Drama",
    4: "Komedi",
    5: "Korku",
  };
  const limovieType = document.createElement("li");
  const pmovieType = document.createElement("p");
  pmovieType.className = "card-text";
    pmovieType.textContent = `Film Türü : ${
      movieTypes[movie.movieType] || "Bilinmeyen Tür"}`;
    limovieType.appendChild(pmovieType);
    document.querySelector("ul").appendChild(limovieType);
}

UI.prototype.createImage = function (imageUrl) {
  const image = document.createElement("img");
  image.style.width = "18rem";
  image.src = imageUrl;
  return image;
};

UI.prototype.createUpdateButton = function (movie) {
  const button = document.createElement("button");
  button.textContent = "Güncelle";
  button.className = "btn btn-primary mt-3";
  button.onclick = () => {
    this.fillFormWithMovieData(movie);
  };
  return button;
};

UI.prototype.createDeleteButton = function (movieId) {
  const button = document.createElement("button");
  button.textContent = "Sil";
  button.className = "btn btn-danger mt-3 me-2";
  button.onclick = () => {
    storage.deleteMovieFromStorage(movieId);
    this.displayMovies();
  };
  return button;
};

UI.prototype.fillFormWithMovieData = function (movie) {
  inputs.name.value = movie.name;
  inputs.director.value = movie.director;
  inputs.year.value = movie.year.toString();
  inputs.movieType.value = movie.movieType;
  inputs.imageUrl.value = movie.imageUrl;

  const updateButton = document.getElementById("submit");
  updateButton.onclick = () => {
    movie.name = inputs.name.value.trim();
    movie.director = inputs.director.value.trim();
    movie.year = parseInt(inputs.year.value.trim(), 10);
    movie.movieType = inputs.movieType.value.trim();
    movie.imageUrl = inputs.imageUrl.value.trim();
    storage.updateMovieFromStorage(movie);
    this.displayMovies();
    clearInputs();
    updateButton.onclick = submitNewMovie;
  };
  updateButton.textContent = "Güncelle";
  document.getElementById("submit").style.display = "none";

};
function clearInputs() {
  Object.values(inputs).forEach((input) => {
    input.value = "";
    input.style.borderColor = ""; // Reset the border color
  });
  const elements = document.getElementsByClassName("guncelleButton");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function submitNewMovie(e) {
  e.preventDefault();
}


//import * as Movies from "./movie";
const inputs = {
  name: document.getElementById("nameInput"),
  director: document.getElementById("directorInput"),
  year: document.getElementById("yearInput"),
  movieType: document.getElementById("movieType"),
  imageUrl: document.getElementById("imageUrl"),
};

const movies = new Movies();

displayMovies();

//İnputs Events
Object.values(inputs).forEach((input) => {
  input.addEventListener("focus", () => updateBorderColor(input));
  input.addEventListener("input", () => updateBorderColor(input));
});

//Formda submit butonuna tıklandığında sayfa yenilenmiyor
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  // Required inputlar boşsa kaydetmiyor
  if (!e.target.checkValidity()) {
    e.stopPropagation();
    return;
  } else {
    let moviesCount = storage.getMoviesFromStorage();
    let id = moviesCount[moviesCount.length - 1] + 1 || 0;
    movies.addMovie(id);
    displayMovies();
    clearInputs();
  }
});

//

//güncelleme işlemi
function updateMovie(movieId) {
  clearInputs();
  displayMovies();
}

//Oluşturulan Kartları göstermek için
function displayMovies() {
  const moviesList = document.getElementById("moviesList");
  moviesList.textContent = "";

  let filmListesi = storage.getMoviesFromStorage();

  filmListesi.forEach((movie, index) => {
    // Kart itemları oluşturma
    const listItem = document.createElement("li");
    listItem.className = "mb-3"; // Add margin-bottom for spacing

    // carrd container oluşturma
    const card = document.createElement("div");
    card.className = "card bg-light border-0 text-secondary shadow-sm";
    card.style.width = "22rem";

    //  card body oluşturma
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title ";
    title.textContent = `${movie.name}`;
    cardBody.appendChild(title);
    const ul = document.createElement("ul");
    ul.className = "list-unstyled";

    const lidirector = document.createElement("li");
    const pdirector = document.createElement("p");
    pdirector.className = "card-text";
    pdirector.textContent = `Yönetmen: ${movie.director}`;
    lidirector.appendChild(pdirector);
    ul.appendChild(lidirector);

    const liyear = document.createElement("li");
    const pyear = document.createElement("p");
    pyear.className = "card-text";
    pyear.textContent = `Yılı: ${movie.year}`;
    liyear.appendChild(pyear);
    ul.appendChild(liyear);

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
      movieTypes[movie.movieType] || "Bilinmeyen Tür"
    }`;
    limovieType.appendChild(pmovieType);
    ul.appendChild(limovieType);

    const liimageUrl = document.createElement("li");
    const pimageUrl = document.createElement("p");
    const image = document.createElement("iframe");
    image.style.width = "18rem";
    image.src = movie.imageUrl;
    pimageUrl.className = "card-text";

    liimageUrl.appendChild(pimageUrl);
    ul.appendChild(liimageUrl);
    cardBody.appendChild(ul);
    cardBody.appendChild(image);
    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Güncelle";
    updateBtn.className = "btn btn-primary mt-3";
    // Add event listener to update button

    updateBtn.addEventListener("click", () => {
      clearInputs();

      // Update input values with the selected movie's information
      inputs.name.value = movie.name;
      inputs.director.value = movie.director;
      inputs.year.value = movie.year;
      inputs.movieType.value = movie.movieType;
      inputs.imageUrl.value = movie.imageUrl;

      document.getElementById("submit").style.display = "none";

      const guncellebuton = document.createElement("button");
      guncellebuton.textContent = "Güncelle";
      guncellebuton.className = "btn btn-danger mt-3 guncelleButton";

      guncellebuton.addEventListener("click", () => {
        storage.updateMovieFromStorage({
          id: movie.id,
          name: inputs.name.value.trim(),
          director: inputs.director.value.trim(),
          year: parseInt(inputs.year.value.trim(), 10),
          movieType: inputs.movieType.value.trim(),
          imageUrl: inputs.imageUrl.value.trim(),
        });
      });
      const formEnd = document.getElementById("formEnd");
      formEnd.appendChild(guncellebuton);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil";
    deleteButton.className = "btn btn-danger mt-3 me-2";
    deleteButton.addEventListener("click", () => {
      // Remove the selected movie from the movieList array
      movies.deleteMovie(movie.id);
    });
    cardBody.appendChild(updateBtn);
    cardBody.appendChild(deleteButton);
    card.appendChild(cardBody);
    listItem.appendChild(card);
    moviesList.appendChild(listItem);
  });
}
//

//Input Temizleme Fonksiyonu
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
//

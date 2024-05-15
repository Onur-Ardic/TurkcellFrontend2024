class UI {
  static displayMovies() {
    const moviesList = document.getElementById("moviesList");
    moviesList.textContent = "";
    let filmListesi = Storage.getMoviesFromStorage();

    filmListesi.forEach((film) => {
      const listItem = this.createMovieCard(film);
      moviesList.appendChild(listItem);
    });
    Storage.getMoviesFromStorage();
    this.createDeleteButton();
  }

  static createMovieCard(movie) {
    const listItem = document.createElement("li");

    listItem.className = "mb-3";

    const card = document.createElement("div");
    card.className = "card bg-light border-0 text-secondary shadow-sm";
    card.style.width = "22rem";

    const cardBody = this.createCardBody(movie);
    card.appendChild(cardBody);
    listItem.appendChild(card);
    return listItem;
  }

  static createCardBody(movie) {
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
  }

  static createDetailsList(movie) {
    const ul = document.createElement("ul");
    ul.className = "list-unstyled";
    ul.appendChild(this.createListItem(`Yönetmen: ${movie.director}`));
    ul.appendChild(this.createListItem(`Yılı: ${movie.year}`));
    ul.appendChild(this.createMovieTypeItem(movie));
    return ul;
  }

  static createListItem(text) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.className = "card-text";
    p.textContent = text;
    li.appendChild(p);
    return li;
  }
  static createMovieTypeItem(movie) {
    const movieTypes = {
      1: "Bilim Kurgu",
      2: "Aksiyon",
      3: "Macera",
      4: "Fantastik",
      5: "Romantik",
    };

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.className = "card-text";
    p.textContent = `Film Türü: ${
      movieTypes[movie.movieType] || "Bilinmeyen Tür"
    }`;
    li.appendChild(p);
    return li;
  }

  static createImage(imageUrl) {
    const image = document.createElement("img");
    image.style.width = "18rem";
    image.src = imageUrl;
    return image;
  }

  static createUpdateButton(movie) {
    const button = document.createElement("button");
    button.textContent = "Güncelle";
    button.className = "btn btn-primary mt-3";
    button.onclick = () => {
      this.fillFormWithMovieData(movie);
      this.guncelleButon(movie);
    };
    return button;
  }

  static createDeleteButton(movieId) {
    const button = document.createElement("button");
    button.textContent = "Sil";
    button.className = "btn btn-danger mt-3 me-2";
    button.onclick = () => {
      Storage.deleteMovieFromStorage(movieId);
      UI.displayMovies();
      UI.clearInputs();
    };
    return button;
  }

  static guncelleButon(movie) {
    const guncelleButon = document.createElement("button");
    guncelleButon.textContent = "Güncelle";
    guncelleButon.className = "btn btn-danger mt-3 guncelleButton";
    formEnd.appendChild(guncelleButon);
    document.getElementById("filmOlustur").style.display = "none";
    guncelleButon.onclick = () => {
      movie.name = inputs.name.value.trim();
      movie.director = inputs.director.value.trim();
      movie.year = parseInt(inputs.year.value.trim(), 10);
      movie.movieType = inputs.movieType.value.trim();
      movie.imageUrl = inputs.imageUrl.value.trim();
      Storage.updateMovieFromStorage(movie);
      document.getElementById("filmOlustur").style.display = "block";
      this.displayMovies();
      UI.clearInputs();
      submitNewMovie;
    };
  }

  static fillFormWithMovieData(movie) {
    inputs.name.value = movie.name;
    inputs.director.value = movie.director;
    inputs.year.value = movie.year.toString();
    inputs.movieType.value = movie.movieType;
    inputs.imageUrl.value = movie.imageUrl;
  }

  static clearInputs() {
    Object.values(inputs).forEach((input) => {
      input.value = "";
      input.style.borderColor = "";
    });
    const elements = document.getElementsByClassName("guncelleButton");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }
  static submitNewMovie(e) {
    e.preventDefault();
  }
  static updateBorderColor(input) {
    if (input.value.trim() === "") {
      input.style.borderColor = "red";
    } else {
      input.style.borderColor = "green";
    }
  }
}

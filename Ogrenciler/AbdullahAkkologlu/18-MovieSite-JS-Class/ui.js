class UI {
  createElement(tag, classNames = [], appendChilds = [], textContent) {
    const element = document.createElement(tag);
    element.textContent = textContent;
    classNames.forEach((className) => element.classList.add(className));
    appendChilds.forEach((appendChild) => element.appendChild(appendChild));
    return element;
  }
  removeChilds(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  validation() {
    for (let key in inputs) {
      if (inputs[key].value === "") {
        alert("Tüm alanları doldurunuz!");
        return false;
      }
    }
    return true;
  }
  display(array) {
    this.removeChilds(cards);
    array.map((movie) => {
      const updateButton = this.createElement(
        "button",
        ["btn", "btn-danger"],
        [],
        "Update"
      );
      updateButton.addEventListener("click", () => {
        this.updateMovie(movie.name);
      });
      const deleteButton = this.createElement(
        "button",
        ["btn", "btn-primary"],
        [],
        "Delete"
      );
      deleteButton.addEventListener("click", () => {
        storage.deleteMovieLocal(movie.name);
      });
      const buttonsDiv = this.createElement(
        "div",
        ["d-flex", "mt-2", "gap-2"],
        [updateButton, deleteButton]
      );
      const yearName = this.createElement(
        "h6",
        ["card-text", "text-secondary"],
        [],
        movie.year
      );
      const genreName = this.createElement(
        "h6",
        ["card-text", "text-success"],
        [],
        movie.genre
      );
      const directorName = this.createElement(
        "h5",
        ["card-text", "mb-2", "text-secondary"],
        [],
        movie.director
      );
      const title = this.createElement(
        "h2",
        ["card-title", "mb-1"],
        [],
        movie.name
      );
      const cardBody = this.createElement(
        "div",
        ["card-body", "col-md-6", "p-md-0", "my-auto"],
        [title, directorName, genreName, yearName, buttonsDiv]
      );
      const imageName = this.createElement("img", ["img-fluid", "rounded-2"]);
      imageName.src = movie.image;
      const imageDiv = this.createElement("div", ["col-md-6"], [imageName]);
      const row = this.createElement(
        "div",
        ["row", "my-auto"],
        [imageDiv, cardBody]
      );
      const card = this.createElement("div", ["card", "col-xl-5"], [row]);
      cards.appendChild(card);
    });
  }
  updateMovie(name) {
    updateMode = true;
    submitButton.textContent = "Edit";
    const moviesArray = storage.getMoviesLocal();
    movieIndex = moviesArray.findIndex((movie) => movie.name === name);
    for (let key in inputs) {
      inputs[key].value = moviesArray[movieIndex][key];
    }
  }
  clean() {
    for (let key in inputs) {
      inputs[key].value = "";
    }
  }
}

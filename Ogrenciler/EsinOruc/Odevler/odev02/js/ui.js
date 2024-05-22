class UI {
  static createCard(cardData) {
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-3 mb-4";
    colDiv.id = `book-${cardData.id}`;

    const cardDiv = document.createElement("div");
    cardDiv.className = "card h-100 border-light";

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = cardData.coverImageUrl;
    img.alt = cardData.title;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = cardData.title;

    const author = document.createElement("p");
    author.className = "card-text";
    author.setAttribute("data-author", cardData.author);
    author.textContent = `${cardData.author}`;

    const category = document.createElement("p");
    category.className = "card-text";
    category.setAttribute("data-category", cardData.category);
    category.textContent = `${cardData.category}`;

    const year = document.createElement("p");
    year.className = "card-text";
    year.setAttribute("data-year", cardData.year);
    year.textContent = `${cardData.year}`;

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger card-delete-btn rounded-circle ";
    deleteButton.textContent = "D";

    deleteButton.addEventListener("click", function () {
      colDiv.remove();
      Book.deleteBook(cardData.id);
    });

    const updateButton = document.createElement("button");
    updateButton.className = "btn btn-primary card-update-btn rounded-circle ";
    updateButton.textContent = "U";
    updateButton.dataset.bsToggle = "modal"; // Bootstrap modal açma özelliği
    updateButton.dataset.bsTarget = "#updateModal"; // Modal ID'si

    updateButton.addEventListener("click", () => Book.modalShow(cardData));

    cardBody.appendChild(title);
    cardBody.appendChild(author);
    cardBody.appendChild(category);
    cardBody.appendChild(year);
    cardDiv.appendChild(deleteButton);
    cardDiv.appendChild(updateButton);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);

    colDiv.appendChild(cardDiv);

    document.getElementById("cardContainer").appendChild(colDiv);
  }

  static addModalReset(form) {
    const modalElement = document.getElementById("addCardModal");
    modalElement.addEventListener("hidden.bs.modal", function () {
      form.reset();
      form.classList.remove("was-validated");
    });
  }

  static updateModalReset(form) {
    document
      .getElementById("updateModal")
      .addEventListener("hidden.bs.modal", function (event) {
        form.reset();
        form.classList.remove("was-validated");
        document.querySelector(".modal-backdrop").remove();
      });
  }

  static loadAuthorsAndCategories() {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((books) => {
        const authors = new Set();
        const categories = new Set();

        books.forEach((book) => {
          authors.add(book.author);
          categories.add(book.category);
        });

        UI.displayFilters(authors, "authorsContainer", "author-checkbox");
        UI.displayFilters(
          categories,
          "categoriesContainer",
          "category-checkbox"
        );
      })
      .catch((error) => console.error("Error loading data:", error));
  }

  static displayFilters(items, containerId, className) {
    const container = document.getElementById(containerId);
    container.textContent = "";

    items.forEach((item) => {
      const filterDiv = document.createElement("div");
      filterDiv.className = "form-check";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.className = `form-check-input filter-checkbox ${className}`;
      input.id = item;
      input.value = item;

      const label = document.createElement("label");
      label.className = "form-check-label";
      label.htmlFor = item;
      label.textContent = item;

      filterDiv.appendChild(input);
      filterDiv.appendChild(label);
      container.appendChild(filterDiv);
    });

    document.querySelectorAll(".filter-checkbox").forEach((item) => {
      item.addEventListener("change", function () {
        UI.applyFilters();
      });
    });
  }

  static applyFilters() {
    let selectedAuthors = Array.from(
      document.querySelectorAll(".author-checkbox:checked")
    ).map((c) => c.value);
    let selectedCategories = Array.from(
      document.querySelectorAll(".category-checkbox:checked")
    ).map((c) => c.value);

    const cards = document.querySelectorAll(".col-md-3.mb-4");

    cards.forEach((card) => {
      const author = card
        .querySelector(".card-text[data-author]")
        .getAttribute("data-author");
      const category = card
        .querySelector(".card-text[data-category]")
        .getAttribute("data-category");

      const isAuthorMatch =
        selectedAuthors.length === 0 || selectedAuthors.includes(author);
      const isCategoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(category);

      if (isAuthorMatch && isCategoryMatch) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
}

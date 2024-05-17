class UI {
  constructor() {
    this.bookForm = document.getElementById("book-form");
    this.bookList = document.getElementById("book-list");
    this.book = document.querySelector(".book");
    this.filterAuthor = document.getElementById("filter-author");
    this.filterGenre = document.getElementById("filter-genre");
    this.filterYear = document.getElementById("filter-year");
    this.clearFiltersButton = document.getElementById("clear-filters");
    this.editModal = document.getElementById("edit-modal");
    this.editForm = document.getElementById("edit-book-form");
    this.editFormInputs = document.querySelectorAll("#edit-book-form input");
    this.filter = document.querySelector(".filter");
    this.filterInputs = document.querySelectorAll(".filter input");
    this.closeModal = document.querySelector(".close");
    this.title = document.getElementById("title");
    this.author = document.getElementById("author");
    this.year = document.getElementById("year");
    this.genre = document.getElementById("genre");
    this.image = document.getElementById("image");
    this.idEdit = document.getElementById("edit-id");
    this.titleEdit = document.getElementById("edit-title");
    this.authorEdit = document.getElementById("edit-author");
    this.yearEdit = document.getElementById("edit-year");
    this.genreEdit = document.getElementById("edit-genre");
    this.imageEdit = document.getElementById("edit-image");
  }

  displayBooks(filter, books) {
    this.bookList.innerHTML = "";

    if (filter.author) {
      books = books.filter((book) =>
        book.author.toLowerCase().includes(filter.author.toLowerCase())
      );
    }
    if (filter.genre) {
      books = books.filter((book) =>
        book.genre.toLowerCase().includes(filter.genre.toLowerCase())
      );
    }
    if (filter.year) {
      books = books.filter((book) => book.year.includes(filter.year));
    }

    books.forEach((book) => {
      let bookElement = `<div class="book">
                            <img src="${book.image}" alt="${book.title}">
                            <div>
                                <h3>${book.title}</h3>
                                <p>${book.author}</p>
                                <p>${book.year}</p>
                                <p>${book.genre}</p>
                            </div>
                            <div class="actions">
                                <button class="edit" onclick="editBook('${book.id}')" data-bs-toggle="modal" data-bs-target="#edit-modal">Edit</button>
                                <button class="delete" onclick="deleteBook('${book.id}')">Delete</button>
                            </div>
                        </div>
                        `;
      this.bookList.insertAdjacentHTML("beforeend", bookElement);
    });
  }
}

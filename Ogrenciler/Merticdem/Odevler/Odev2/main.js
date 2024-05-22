class App {
  static init() {
    API.fetchBooks().then((books) => {
      UI.displayBooks(books);
      UI.populateFilters(books);
    });

    document
      .querySelector("#bookForm")
      .addEventListener("submit", App.addOrUpdateBook);
    document
      .querySelector("#categoryFilter")
      .addEventListener("change", App.filterBooks);
    document
      .querySelector("#authorFilter")
      .addEventListener("change", App.filterBooks);
    document
      .querySelector("#sortType")
      .addEventListener("change", App.sortBooks);
    document
      .querySelector("#searchInput")
      .addEventListener("input", App.searchBooks);
  }

  static addOrUpdateBook(event) {
    event.preventDefault();
    const id = document.querySelector("#bookId").value;
    const book = {
      title: document.querySelector("#bookTitle").value,
      author: document.querySelector("#bookAuthor").value,
      category: document.querySelector("#bookCategory").value,
      date: document.querySelector("#bookDate").value,
      cover: document.querySelector("#bookCover").value,
    };

    if (id) {
      API.updateBook(id, book).then(() => {
        API.fetchBooks().then(UI.displayBooks);
        UI.hideBookForm();
      });
    } else {
      API.fetchBooks().then((books) => {
        const newId =
          books.length > 0 ? Math.max(...books.map((book) => book.id)) + 1 : 1;
        book.id = newId.toString();
        API.addBook(book).then(() => {
          API.fetchBooks().then(UI.displayBooks);
          UI.hideBookForm();
        });
      });
    }
  }

  static searchBooks() {
    const searchQuery = document
      .querySelector("#searchInput")
      .value.trim()
      .toLowerCase();

    API.fetchBooks().then((books) => {
      const filteredBooks = books.filter((book) => {
        return (
          book.title.toLowerCase().includes(searchQuery) ||
          book.author.toLowerCase().includes(searchQuery)
        );
      });

      UI.displayBooks(filteredBooks);
    });
  }

  static showBookDetails(id) {
    API.fetchBookById(id).then((book) => {
      document.querySelector("#modalBookTitle").innerText = book.title;
      document.querySelector("#modalBookAuthor").innerText = book.author;
      document.querySelector("#modalBookCategory").innerText = book.category;
      document.querySelector("#modalBookDate").innerText = book.date;
      document.querySelector("#modalBookCover").src = book.cover;
      document.querySelector("#editBookButton").onclick = () =>
        App.editBook(id);
      document.querySelector("#deleteBookButton").onclick = () =>
        App.deleteBook(id);
      $("#bookModal").modal("show");
    });
  }

  static editBook(id) {
    API.fetchBookById(id).then((book) => UI.showBookForm(book));
  }
  static deleteBook(id) {
    API.deleteBook(id).then(() => {
      API.fetchBooks().then(UI.displayBooks);
      $("#bookModal").modal("hide");
    });
  }

  static filterBooks() {
    const categoryFilter = document.querySelector("#categoryFilter").value;
    const authorFilter = document.querySelector("#authorFilter").value;

    API.fetchBooks().then((books) => {
      let filteredBooks = books;

      if (categoryFilter !== "all") {
        filteredBooks = filteredBooks.filter(
          (book) => book.category === categoryFilter
        );
      }

      if (authorFilter !== "all") {
        filteredBooks = filteredBooks.filter(
          (book) => book.author === authorFilter
        );
      }

      UI.displayBooks(filteredBooks);
    });
  }

  static sortBooks() {
    const sortType = document.querySelector("#sortType").value;

    API.fetchBooks().then((books) => {
      let sortedBooks = [...books];

      if (sortType === "titleAsc") {
        sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortType === "titleDesc") {
        sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
      } else if (sortType === "dateAsc") {
        sortedBooks.sort((a, b) => a.date.localeCompare(b.date));
      } else if (sortType === "dateDesc") {
        sortedBooks.sort((a, b) => b.date.localeCompare(a.date));
      }

      UI.displayBooks(sortedBooks);
    });
  }
}

document.addEventListener("DOMContentLoaded", App.init);

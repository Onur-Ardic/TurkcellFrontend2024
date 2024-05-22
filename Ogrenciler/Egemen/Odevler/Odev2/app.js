document.addEventListener("DOMContentLoaded", () => getBooks());
document.getElementById("bookForm").addEventListener("submit", addBook);
document.getElementById("books").addEventListener("click", handleBookActions);
document.getElementById("searchInput").addEventListener("keyup", searchBooks);
document.querySelectorAll(".dropdown-menu .dropdown-item").forEach((item) => {
  item.addEventListener("click", filterOrSortBooks);
});
document.getElementById("bookModal").addEventListener("hidden.bs.modal", UI.clearFields);

async function getBooks() {
  const response = await fetch("http://localhost:3000/books");
  const books = await response.json();
  UI.displayBooks(books);
}
async function searchBooks() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const response = await fetch("http://localhost:3000/books");
  const books = await response.json();
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchInput) ||
      book.author.toLowerCase().includes(searchInput)
  );
  UI.displayBooks(filteredBooks);
}

async function addBook(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;
  const year = document.getElementById("year").value;
  const cover = document.getElementById("cover").value;

  const book = new Book(title, author, category, year, cover);

  const res = await fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });

  const newBook = await res.json();
  UI.addBookToList(newBook);
  UI.clearFields();
  document.querySelector(".btn-close").click();
}
async function handleBookActions(e) {
  if (e.target.classList.contains("delete")) {
    const id = e.target.getAttribute("data-id");
    await fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
    });
    UI.deleteBook(e.target);
  } else if (e.target.classList.contains("edit")) {
    const id = e.target.getAttribute("data-id");
    const bookData = await fetch(`http://localhost:3000/books/${id}`).then(
      (res) => res.json()
    );
    UI.populateForm(bookData);
    document.getElementById("bookForm").removeEventListener("submit", addBook);
    document
      .getElementById("bookForm")
      .addEventListener("submit", (event) => updateBook(event, id));
  }
}

async function updateBook(e, id) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;
  const year = document.getElementById("year").value;
  const cover = document.getElementById("cover").value;

  const book = new Book(title, author, category, year, cover);

  const res = await fetch(`http://localhost:3000/books/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });

  const updatedBook = await res.json();
  UI.updateBookInList(updatedBook);
  UI.clearFields();
  document.querySelector(".btn-close").click();
  document
    .getElementById("bookForm")
    .removeEventListener("submit", (event) => updateBook(event, id));
  document.getElementById("bookForm").addEventListener("submit", addBook);
}

async function filterOrSortBooks(e) {
  const filterOrSortType = e.target.textContent;
  const response = await fetch("http://localhost:3000/books");
  const books = await response.json();

  if (filterOrSortType === "A-Z" || filterOrSortType === "Z-A") {
    books.sort((a, b) => {
      if (filterOrSortType === "A-Z") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
  } else if (filterOrSortType === "Tarihe Göre") {
    books.sort((a, b) => a.year - b.year);
  } else {
    const filteredBooks = books.filter(
      (book) =>
        book.category === filterOrSortType || book.author === filterOrSortType
    );
    return UI.displayBooks(filteredBooks);
  }

  UI.displayBooks(books);
}
class Book {
  constructor(title, author, category, year, cover) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.year = year;
    this.cover = cover;
  }
}

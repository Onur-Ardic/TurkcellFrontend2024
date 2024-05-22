const bookId = document.querySelector("#bookId");
const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");
const bookCategory = document.querySelector("#bookCategory");
const bookDate = document.querySelector("#bookDate");
const bookCover = document.querySelector("#bookCover");
const btnAdd = document.querySelector("#btnAdd");
const btnCancel = document.querySelector("#btnCancel");
const bookList = document.querySelector("#bookList");
const authorFilter = document.querySelector("#authorFilter");
const categoryFilter = document.querySelector("#categoryFilter");
const sortFilter = document.querySelector("#sortFilter");
const API_URL = "http://localhost:3000/books";

class Book {
  constructor(title, author, category, date, cover) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.date = date;
    this.cover = cover;
  }
}
function addOrUpdateBook(event) {
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
    updateBook(id, book).then(() => {
      fetchBooks().then(displayBooks);
      hideBookForm();
    });
  } else {
    fetchBooks().then((books) => {
      const newId =
        books.length > 0 ? Math.max(...books.map((book) => book.id)) + 1 : 1;
      book.id = newId.toString();
      addBook(book).then(() => {
        fetchBooks().then(displayBooks);
        hideBookForm();
      });
    });
  }
}
function addBook(book) {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
}

function updateBook(id, book) {
  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
}
function deleteBook(bookId) {
  return fetch(`${API_URL}/${bookId}`, {
    method: "DELETE",
  });
}

function showBookForm(book = {}) {
  document.querySelector("#bookForm").style.display = "block";
  document.querySelector("#bookId").value = book.id || "";
  document.querySelector("#bookTitle").value = book.title || "";
  document.querySelector("#bookAuthor").value = book.author || "";
  document.querySelector("#bookCategory").value = book.category || "";
  document.querySelector("#bookDate").value = book.date || "";
  document.querySelector("#bookCover").value = book.cover || "";
}

function hideBookForm() {
  document.querySelector("#bookForm").style.display = "none";
}
function fetchBooks() {
  return fetch(API_URL)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching books:", error));
}

function displayBooks(books) {
  const bookList = document.querySelector("#bookList");
  bookList.innerHTML = ""; // Önce içeriği temizle

  books.forEach((book) => {
    const bookCol = document.createElement("div");
    bookCol.classList.add("col-md-4", "mb-4");

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = book.cover;
    img.alt = book.title;
    img.style.cursor = "pointer";
    img.addEventListener("click", () => showBookDetails(book.id));

    card.appendChild(img);
    bookCol.appendChild(card);
    bookList.appendChild(bookCol);
  });
}
function fetchBooks() {
  return fetch(`${API_URL}`)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching books:", error));
}

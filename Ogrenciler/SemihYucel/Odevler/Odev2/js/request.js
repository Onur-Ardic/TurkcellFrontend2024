const apiUrl = "http://localhost:3000/books";
let currentBookId = null;

class Book {
  constructor(name, author, category, date, cover) {
    this.name = name;
    this.author = author;
    this.category = category;
    this.date = date;
    this.cover = cover;
  }
}
async function fetchBooks() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}
async function fetchBook(id) {
  const response = await fetch(`${apiUrl}/${id}`);
  const data = await response.json();
  return data;
}
async function saveBook(event) {
  event.preventDefault();
  const name = document.getElementById("bookName").value;
  const author = document.getElementById("bookAuthor").value;
  const category = document.getElementById("bookCategory").value;
  const date = document.getElementById("bookDate").value;
  const cover = document.getElementById("bookCover").value;

  const book = new Book(name, author, category, date, cover);

  if (currentBookId) {
    await updateBook(currentBookId, book);
    fetchAndDisplayBooks();
    resetForm();
  } else {
    await addBook(book);
    fetchAndDisplayBooks();
    resetForm();
  }
}
async function addBook(book) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book)
  });
  const data = await response.json();
  return data;
}
async function updateBook(id, book) {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book)
  });
  const data = await response.json();
  return data;
}
async function deleteBook(id) {
  try {
    await fetch(`${apiUrl}/${id}`, {
      method: "DELETE"
    });
    fetchAndDisplayBooks();
  } catch (error) {
    console.error('Error:', error);
  }
}
function resetForm() {
  document.getElementById("bookForm").reset();
  document.querySelector(".btn-close").click();
  currentBookId = null;
}

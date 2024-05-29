const addModal = document.getElementById("addBookModal");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookDate = document.getElementById("bookDate");
const bookCategory = document.getElementById("bookCategory");
const bookImage = document.getElementById("bookImage");

class bookData {
  constructor(image, bookname, author, date, categories) {
    this.id = Math.floor(Math.random() * 10000).toString();
    this.image = image;
    this.bookname = bookname;
    this.author = author;
    this.date = date;
    this.categories = categories;
  }
}

addModal.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const bookId = document.getElementById("bookId").value;
  const newBook = createBook();

  if (bookId) {
    Request.put(`http://localhost:3000/books/${bookId}`, newBook).then(
      (data) => {
        UI.addBookToList(data);
        UI.clearForm();
        populateFilterOptions(data);
        authorFilterOptions(data);
      }
    );
  } else {
    Request.post("http://localhost:3000/books", newBook).then((data) => {
      UI.addBookToList(data);
      UI.clearForm();
      populateFilterOptions(data);
      authorFilterOptions(data);
    });
  }
});

function createBook() {
  const image = bookImage.value.trim();
  const bookname = bookTitle.value.trim();
  const author = bookAuthor.value.trim();
  const date = bookDate.value.trim();
  const categories = bookCategory.value.trim();

  return new bookData(image, bookname, author, date, categories);
}
document.addEventListener("DOMContentLoaded", () => {
  Request.get("http://localhost:3000/books").then((data) => {
    UI.displayBooks(data);
    populateFilterOptions(data);
  });

  document.getElementById("book-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("edit")) {
      const id = e.target.dataset.id;
      Request.get(`http://localhost:3000/books/${id}`).then((book) => {
        UI.editForm(book);
      });
    }

    if (e.target.classList.contains("delete")) {
      const id = e.target.dataset.id;
      Request.delete(`http://localhost:3000/books/${id}`).then(() => {
        UI.deleteBookFromList(id);
      });
    }
  });
});

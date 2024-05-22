const title = document.getElementById('title');
const author = document.getElementById('author');
const category = document.getElementById('categorySelect');
const releaseDate = document.getElementById('date');
const url = document.getElementById('cover');
const id = document.getElementById('book-form');


window.addEventListener("load", () => {
    Requests.get('http://localhost:3000/books')
        .then(data => displayBooks(data));
})

document.querySelectorAll("#category-list input").forEach((input) => {
  input.addEventListener("click", () => {
      const categoryId = input.id;
      Requests.get(`http://localhost:3000/books?category=${categoryId}`).then((data) => displayBooks(data));
  });
});

document.querySelectorAll("#author-list input").forEach((input) => {
  input.addEventListener("click", () => {
    Requests.get(`http://localhost:3000/books?author=${input.value}`).then(
      (data) => displayBooks(data)
    );
  });
});

let editId;
function selectedBook(book) {
document.querySelector("#add-book-btn").click();
title.value = book.name;
author.value = book.author;
category.querySelector("option").value = book.category;
releaseDate.value = book.releaseDate;
url.value = book.url;
document.getElementById("modal-submit").textContent = "Update";
editId = book.id;
}

function deleteBook(id) {
Requests.delete(`http://localhost:3000/books/${id}`);
}

document.getElementById("sort").addEventListener("change", (e) => {
const key = e.target.value;
let url = "http://localhost:3000/books";
switch (key) {
  case "a-z":
    url += "?_sort=name";
    break;
  case "2":
    console.log(url);
    url += "?_sort=name&_order=desc";
    break;
  case "oldest":
    url += "?_sort=releaseDate";
    break;
  case "newest":
    url += "?_sort=releaseDate&_order=desc";
    break;
}

Requests.get(url).then((data) => displayBooks(data));
});

document.getElementById("searching").addEventListener("input", (e) => {
let key = e.target.value;
Requests.get(`http://localhost:3000/books?q=${key}`).then((data) =>
  displayBooks(data)
);
});

document.getElementById('book-form').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const name = title.value;
    const author = author.value;
    const category = category.value;
    const date = releaseDate.value;
    const imgUrl = url.value;
  
      if (editId) {
        const updatedBook = new Book(editId, name, author, category, date, imgUrl);
        await Requests.put(`http://localhost:3000/books/${editId}`, updatedBook);
        delete document.getElementById('book-form').dataset.id;
      } else {
        const newBook = new Book(crypto.randomUUID() ,name, author, category, date, imgUrl);
        await Requests.post('http://localhost:3000/books', newBook);
      }

      document.getElementById('book-form').reset();
      const modal = bootstrap.Modal.getInstance(document.getElementById('bookModal'));
      modal.hide();
  });
  
  document.getElementById('bookModal').addEventListener('show.bs.modal', () => {
    document.getElementById('bookModalLabel').innerText = "Kitap Ekle";
    document.getElementById('book-form').reset();
    delete document.getElementById('book-form').dataset.id;
});


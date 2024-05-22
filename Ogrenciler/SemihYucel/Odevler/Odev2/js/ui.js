document.addEventListener("DOMContentLoaded", () => {
  initEventListeners();
  fetchAndDisplayBooks();
});

function initEventListeners() {
  document.getElementById("bookForm").addEventListener("submit", saveBook);
  document.getElementById("searchButton").addEventListener("click", searchBooks);
  document.getElementById("sortBooks").addEventListener("change", sortBooks);
  document.getElementById("filterCategory").addEventListener("change", filterBooks);
  document.getElementById("filterAuthor").addEventListener("change", filterBooks);
  document.getElementById("resetFilters").addEventListener("click", resetFilters);
}
function createBookItem(book) {
  const bookItem = document.createElement("div");
  bookItem.classList.add("col-md-4", "mb-3");

  const card = document.createElement("div");
  card.classList.add("card");
  card.style.border = "1px solid #dee2e6";
  card.style.borderRadius = "10px";
  card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  card.style.transition = "transform 0.2s, box-shadow 0.2s";

  card.addEventListener("mouseover", () => {
    card.style.transform = "translateY(-10px)";
    card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
  });

  card.addEventListener("mouseout", () => {
    card.style.transform = "";
    card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  });

  const img = document.createElement("img");
  img.src = book.cover;
  img.classList.add("card-img-top");
  img.alt = book.name;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = book.name;

  const cardTextAuthor = document.createElement("p");
  cardTextAuthor.classList.add("card-text");
  cardTextAuthor.textContent = book.author;

  const cardTextCategory = document.createElement("p");
  cardTextCategory.classList.add("card-text");
  cardTextCategory.textContent = book.category;

  const cardTextDate = document.createElement("p");
  cardTextDate.classList.add("card-text");
  cardTextDate.textContent = new Date(book.date).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.style.backgroundColor = "#dc3545";
  deleteButton.style.border = "none";
  deleteButton.textContent = "Sil";
  deleteButton.addEventListener("click", () => deleteBook(book.id));

  const editButton = document.createElement("button");
  editButton.classList.add("btn", "btn-warning");
  editButton.style.backgroundColor = "#ffc107";
  editButton.style.border = "none";
  editButton.textContent = "Düzenle";
  editButton.setAttribute("data-bs-toggle", "modal");
  editButton.setAttribute("data-bs-target", "#bookModal");
  editButton.addEventListener("click", () => editBook(book.id));

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardTextAuthor);
  cardBody.appendChild(cardTextCategory);
  cardBody.appendChild(cardTextDate);
  cardBody.appendChild(deleteButton);
  cardBody.appendChild(editButton);

  card.appendChild(img);
  card.appendChild(cardBody);
  bookItem.appendChild(card);

  return bookItem;
}
function displayBooks(books) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  books.forEach(book => {
    const bookItem = createBookItem(book);
    bookList.appendChild(bookItem);
  });
}
async function editBook(id) {
  const book = await fetchBook(id);
  fillFormWithBookData(book);
  currentBookId = book.id;
  document.getElementById("bookModalLabel").innerText = "Kitap Güncelle";
  document.getElementById("saveButton").innerText = "Güncelle";
}
function fillFormWithBookData(book) {
  document.getElementById("bookName").value = book.name;
  document.getElementById("bookAuthor").value = book.author;
  document.getElementById("bookCategory").value = book.category;
  document.getElementById("bookDate").value = book.date;
  document.getElementById("bookCover").value = book.cover;
}
async function fetchAndDisplayBooks() {
  const data = await fetchBooks();
  displayBooks(data);
  populateFilters(data);
}

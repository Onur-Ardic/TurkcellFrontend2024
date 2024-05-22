UI.displayBooks();
const addBookButton = document.querySelector("#addBookButton");
addBookButton.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const category = document.querySelector("#category").value;
  const publishedDate = document.querySelector("#publishedDate").value;
  const coverImageUrl = document.querySelector("#coverImageUrl").value;
  UI.getBookCount().then((bookCount) => {
    let id = bookCount + 1;
    id = id.toString();
    const newBook = new Book(
      id,
      title,
      author,
      category,
      publishedDate,
      coverImageUrl
    );

    UI.createBook(newBook);
    UI.addBookToUI(newBook);
  });
});

document.querySelector("#updateForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const id = document
    .querySelector("#updateBookButton")
    .getAttribute("data-id");
  const title = document.querySelector("#updateTitle").value;
  const author = document.querySelector("#updateAuthor").value;
  const category = document.querySelector("#updateCategory").value;
  const publishedDate = document.querySelector("#updatePublishedDate").value;
  const coverImageUrl = document.querySelector("#updateCoverImageUrl").value;
  const updatedBook = {
    id,
    title,
    author,
    category,
    publishedDate,
    coverImageUrl,
  };
  UI.updateBook(id, updatedBook);
});

document.querySelector("#sortDropdown").addEventListener("change", (e) => {
  const sortCriteria = e.target.value;
  UI.displayBooks(sortCriteria);
});

document.querySelector("#filterForm").addEventListener("keyup", function (e) {
  e.preventDefault();
  const category = document
    .querySelector("#filterCategory")
    .value.trim()
    .toLowerCase();
  const author = document
    .querySelector("#filterAuthor")
    .value.trim()
    .toLowerCase();
  UI.filterBooks(category, author);
});

document.querySelector("#search").addEventListener("keyup", function (e) {
  e.preventDefault();
  const searchText = document
    .querySelector("#search")
    .value.trim()
    .toLowerCase();
  UI.searchBooks(searchText);
});

document.querySelector("#updateForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const id = document
    .querySelector("#updateBookButton")
    .getAttribute("data-id");
  const title = document.querySelector("#updateTitle").value;
  const author = document.querySelector("#updateAuthor").value;
  const category = document.querySelector("#updateCategory").value;
  const publishedDate = document.querySelector("#updatePublishedDate").value;
  const coverImageUrl = document.querySelector("#updateCoverImageUrl").value;
  const updatedBook = {
    id,
    title,
    author,
    category,
    publishedDate,
    coverImageUrl,
  };
  UI.updateBook(id, updatedBook);
});

document.querySelector("#filterForm").addEventListener("keyup", function (e) {
  e.preventDefault();
  const category = document.querySelector("#filterCategory").value;
  const author = document.querySelector("#filterAuthor").value;
  UI.filterBooks(category, author);
});

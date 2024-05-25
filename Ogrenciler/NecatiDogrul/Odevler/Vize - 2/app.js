const addBookButton = document.querySelector("#addBookButton");
let books = [];
document.addEventListener("DOMContentLoaded", () => {
  UI.displayBooks();
});

document.querySelector("#form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const category = document.querySelector("#category").value;
  const publishedDate = document.querySelector("#publishedDate").value;
  const coverImageUrl = document.querySelector("#coverImageUrl").value;
  const bookCount = await UI.getBookCount();
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

  const book = await UI.createBook(newBook);
  if (book) {
    books.push(book);
    UI.createCard(book);
    document.querySelector("#form").reset();
    const addModal = bootstrap.Modal.getInstance(
      document.getElementById("exampleModal")
    );
    if (addModal) {
      addModal.hide();
    } else {
      const modal = new bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      modal.hide();
    }
  }
});

document
  .querySelector("#updateForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    e.stopPropagation();
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
    const success = await UI.updateBook(id, updatedBook);
    if (success) {
      document.querySelector("#cards").textContent = "";
      UI.displayBooks();
      const updateModal = bootstrap.Modal.getInstance(
        document.getElementById("updateModal")
      );
      if (updateModal) {
        updateModal.hide();
      } else {
        const modal = new bootstrap.Modal(
          document.getElementById("updateModal")
        );
        modal.hide();
      }
    }
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

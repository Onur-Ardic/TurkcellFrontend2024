const ui = new UI();
window.addEventListener("load", () => {
  fetch("http://localhost:3000/books")
    .then((response) => response.json())
    .then((data) => ui.displayBooks(data))
    .catch((error) => showModal("Error fetching books: " + error));
});

function showModal(message) {
  const modalMessage = document.getElementById("modalMessage");
  modalMessage.textContent = message;
  $("#errorModal").modal("show");
}

let updateId;
let updateBookSituation = false;
const addBookForm = document.getElementById("addBookForm");
addBookForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!updateBookSituation) {
    const book = new Book(
      crypto.randomUUID(),
      document.getElementById("bookTitle").value,
      document.getElementById("author").value,
      document.getElementById("category").value,
      document.getElementById("date").value,
      document.getElementById("coverImageUrl").value
    );
    await Request.post("http://localhost:3000/books", book);
  } else {
    const updatedBook = new Book(
      updateId,
      document.getElementById("bookTitle").value,
      document.getElementById("author").value,
      document.getElementById("category").value,
      document.getElementById("date").value,
      document.getElementById("coverImageUrl").value
    );

    await Request.put("http://localhost:3000/books", updatedBook, updateId);
    ui.addBookForm.querySelector("button").textContent = "Kaydet";
  }
  addBookForm.reset();
  addBookForm.classList.remove("was-validated");
  $("#bookAdd").modal("hide");
});

function bookForUpdate(book) {
  updateId = book.id;
  updateBookSituation = true;
  document.getElementById("bookTitle").value = book.name;
  document.getElementById("author").value = book.author;
  document.getElementById("category").value = book.category;
  document.getElementById("date").value = book.date;
  document.getElementById("coverImageUrl").value = book.coverImgUrl;
  document.getElementById("addBookForm").querySelector("button").textContent =
    "Güncelle";
  document.getElementById("bookAddBtn").click();
}

function deleteBook(id) {
  Request.delete("http://localhost:3000/books", id);
}

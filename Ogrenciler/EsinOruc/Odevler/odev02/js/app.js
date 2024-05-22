Request.get("http://localhost:3000/books");

var form = document.querySelector(".needs-validation");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!form.checkValidity()) {
    event.stopPropagation();
    form.classList.add("was-validated");
  } else {
    Book.addBook(form);
  }
});
UI.addModalReset(form);
UI.updateModalReset(form);

Request.loadAuthorsAndCategories();

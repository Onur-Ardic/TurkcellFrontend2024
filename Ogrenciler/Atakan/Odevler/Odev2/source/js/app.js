let bookModal = document.querySelector("#bookModal");

let bookName = bookModal.querySelector("#bookNameInput");
let bookAuthor = bookModal.querySelector("#bookAuthorInput");
let bookCategory = bookModal.querySelector("#bookCategoryInput");
let bookYear = bookModal.querySelector("#bookYearInput");
let bookCover = bookModal.querySelector("#bookCoverInput");

let bookContainer = document.querySelector(".bookContainer");

document.addEventListener("DOMContentLoaded", function () {
  UI.requestAllDataAndDisplay();
});

let quitButton = bookModal.querySelector("#quitButton");
quitButton.addEventListener("click", function () {
  UI.cleanInputs();
  UI.setButtonStatus();
});

let addButton = bookModal.querySelector("#addButton");
addButton.addEventListener("click", function () {
  UI.bookCardCreate();
  bookModal.style.display = "none";
});

let updateButton = bookModal.querySelector("#updateButton");
updateButton.addEventListener("click", function () {
  UI.updateBook();
  bookModal.style.display = "none";
  UI.setButtonStatus();
});

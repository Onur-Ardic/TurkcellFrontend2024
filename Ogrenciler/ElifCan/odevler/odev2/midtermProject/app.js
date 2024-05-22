import { Request } from "./request.js";
import { UI } from "./ui.js";

const req = new Request();
let bookId;
let bookArrayOnScreen = [];

window.onload = function () {
  req
    .get("http://localhost:3000/books")
    .then((data) => {
      data.forEach((book) => {
        UI.display(book, handleDeleteButtonClick, updateButtonClickHandler);
        bookArrayOnScreen.push(book);
      });
    })
    .catch((err) => {
      showErrorToast();
    });

  const today = new Date();
  const formattedToday = today.toISOString().slice(0, 10);
  const publishDateInput = document.getElementById("publishDate");
  publishDateInput.setAttribute("max", formattedToday);
};

function handleDeleteButtonClick(book) {
  const deleteUrl = `http://localhost:3000/books/${book.id}`;

  req
    .delete(deleteUrl)
    .then((data) => {
      UI.delete(data);
      bookArrayOnScreen.splice(
        bookArrayOnScreen.findIndex((book) => book == data),
        1
      );
    })
    .catch((err) => {
      showErrorToast();
    });
}

function updateButtonClickHandler(book) {
  document.getElementById("bookModalLabel").textContent = "Update Book";
  document.getElementById("updateButtonInsideModal").textContent = "Update";

  UI.fillModal(book);
  bookId = book.id;
  CheckValidity();
}

document
  .getElementById("updateButtonInsideModal")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (
      document.getElementById("bookModalLabel").textContent == "Update Book"
    ) {
      const updateUrl = `http://localhost:3000/books/${bookId}`;
      const newBook = UI.getBook(bookId);

      req
        .update(updateUrl, newBook)
        .then((data) => {
          UI.update(data);
          bookArrayOnScreen[
            bookArrayOnScreen.findIndex((book) => book.id === bookId)
          ] = data;
        })
        .catch((err) => {
          showErrorToast(err.message || "An error occurred!");
        });
    } else {
      const addUrl = `http://localhost:3000/books`;
      const newBook = UI.getBook();

      req
        .post(addUrl, newBook)
        .then((data) => {
          UI.display(data, handleDeleteButtonClick, updateButtonClickHandler);
          bookArrayOnScreen.push(data);
        })
        .catch((err) => {
          showErrorToast(err.message || "An error occurred!");
        });
    }
  });

document.getElementById("bookPicture").addEventListener("input", function () {
  const imageUrl = this.value;
  const previewImage = document.getElementById("previewImage");

  if (imageUrl) {
    previewImage.src = imageUrl;
    previewImage.style.display = "block";
  } else {
    previewImage.style.display = "none";
  }
});

document
  .getElementById("bookCategoryFilter")
  .addEventListener("change", function () {
    const cardWrapper = document.getElementById("card-wrapper");

    while (cardWrapper.firstChild) {
      cardWrapper.removeChild(cardWrapper.firstChild);
    }

    bookArrayOnScreen.forEach((book) => {
      if (book.category == this.value || this.value == "") {
        UI.display(book);
      }
    });
  });

document.getElementById("orderFilter").addEventListener("change", function () {
  const cardWrapper = document.getElementById("card-wrapper");

  while (cardWrapper.firstChild) {
    cardWrapper.removeChild(cardWrapper.firstChild);
  }

  let sortedBooks;

  if (this.value === "AtoZ") {
    sortedBooks = bookArrayOnScreen
      .slice()
      .sort((a, b) => a.bookName.localeCompare(b.bookName));
  } else if (this.value === "ZtoA") {
    sortedBooks = bookArrayOnScreen
      .slice()
      .sort((a, b) => b.bookName.localeCompare(a.bookName));
  } else if (this.value === "newest") {
    sortedBooks = bookArrayOnScreen.slice().sort(function (a, b) {
      return new Date(b.publishDate) - new Date(a.publishDate);
    });
  } else if (this.value === "oldest") {
    sortedBooks = bookArrayOnScreen.slice().sort(function (a, b) {
      return new Date(a.publishDate) - new Date(b.publishDate);
    });
  } else {
    sortedBooks = bookArrayOnScreen.slice();
  }

  sortedBooks.forEach((book) => UI.display(book));
});

document.getElementById("addButton").addEventListener("click", function () {
  const inputs = document.querySelectorAll(
    "#bookName, #bookWriter, #publishDate, #bookPicture"
  );
  inputs.forEach((input) => (input.value = ""));
  document.getElementById("previewImage").style.display = "none";
  document.getElementById("bookModalLabel").textContent = "Add Book";
  document.getElementById("updateButtonInsideModal").textContent = "Add";
  CheckValidity();
});

document
  .getElementById("searchBookOrWriter")
  .addEventListener("input", function () {
    const cardWrapper = document.getElementById("card-wrapper");
    while (cardWrapper.firstChild) {
      cardWrapper.removeChild(cardWrapper.firstChild);
    }
    bookArrayOnScreen = [];
    req
      .get("http://localhost:3000/books")
      .then((data) => {
        data.forEach((book) => {
          if (
            book.bookName.toLowerCase().includes(this.value.toLowerCase()) ||
            book.writer.toLowerCase().includes(this.value.toLowerCase())
          ) {
            UI.display(book, handleDeleteButtonClick, updateButtonClickHandler);
            bookArrayOnScreen.push(book);
          }
        });
      })
      .catch((err) => {
        showErrorToast();
      });
  });

function showErrorToast() {
  const toastEl = document.getElementById("errorToast");
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}
function CheckValidity() {
  document
    .getElementById("bookName")
    .addEventListener("input", checkConditions);
  document
    .getElementById("bookWriter")
    .addEventListener("input", checkConditions);
  document
    .getElementById("publishDate")
    .addEventListener("input", checkConditions);
  document
    .getElementById("bookcategory")
    .addEventListener("input", checkConditions);
  document
    .getElementById("bookPicture")
    .addEventListener("input", checkConditions);
}

function checkConditions() {
  const isBookNameValid = bookName.value.length > 0;
  const isBookWriterValid = bookWriter.value.length > 0;
  const isPublishDateValid = publishDate.value !== "";
  const isBookCategoryValid = bookcategory.value !== "";
  const isBookPictureValid = bookPicture.value !== "";
  if (
    isBookNameValid &&
    isBookWriterValid &&
    isPublishDateValid &&
    isBookCategoryValid &&
    isBookPictureValid
  ) {
    document.getElementById("updateButtonInsideModal").disabled = false;
  } else {
    document.getElementById("updateButtonInsideModal").disabled = true;
  }
}

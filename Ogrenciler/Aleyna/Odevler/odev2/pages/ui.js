class UI {
  static removeChild(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  static displayBooks(books) {
    const bookList = document.getElementById("book-list");
    this.removeChild(bookList);
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const bookList = document.getElementById("book-list");

    const card = document.createElement("div");
    card.classList.add("card", "h-100", "d-flex");
    const img = document.createElement("img");

    img.src = book.image;
    img.classList.add("card-img-top");
    img.alt = book.bookname;
    const imgwrapper = document.createElement("div");
    imgwrapper.classList.add("imgwrapper");
    imgwrapper.appendChild(img);
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = book.bookname;

    const authorText = document.createElement("p");
    authorText.classList.add("card-text");
    authorText.textContent = book.author;

    const categoryText = document.createElement("p");
    categoryText.classList.add("card-text");
    categoryText.textContent = book.categories;

    const dateText = document.createElement("p");
    dateText.classList.add("card-text");
    dateText.textContent = book.date;

    const editButton = document.createElement("button");
    editButton.classList.add(
      "btn",
      "btn-warning",
      "btn-sm",
      "edit",
      "text-light",
      "me-2"
    );
    editButton.dataset.id = book.id;
    editButton.dataset.bsToggle = "modal";
    editButton.dataset.bsTarget = "#addBookModal";
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add(
      "btn",
      "btn-danger",
      "btn-sm",
      "delete",
      "text-light"
    );
    deleteButton.dataset.id = book.id;
    deleteButton.textContent = "Delete";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(authorText);
    cardBody.appendChild(categoryText);
    cardBody.appendChild(dateText);
    cardBody.appendChild(editButton);
    cardBody.appendChild(deleteButton);
    card.appendChild(imgwrapper);
    card.appendChild(cardBody);
    bookList.appendChild(card);
  }

  static clearForm() {
    document.getElementById("bookForm").reset();
    document.getElementById("bookId").value = "";
  }

  static editForm(book) {
    document.getElementById("bookId").value = book.id;
    document.getElementById("bookTitle").value = book.bookname;
    document.getElementById("bookAuthor").value = book.author;
    document.getElementById("bookCategory").value = book.categories;
    document.getElementById("bookDate").value = book.date;
    document.getElementById("bookImage").value = book.image;
  }

  static deleteBookFromList(id) {
    const bookList = document.getElementById("book-list");
    const books = Array.from(bookList.getElementsByClassName("card"));
    books.forEach((book) => {
      if (book.querySelector(".delete").dataset.id === id) {
        book.remove();
      }
    });
  }
}

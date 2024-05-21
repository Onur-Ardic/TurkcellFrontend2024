class UI {
  static displayAllBooksOnUI(data) {
    while (bookContainer.firstChild) {
      bookContainer.removeChild(bookContainer.firstChild);
    }

    if (data.length > 0) {
      data.forEach((book) => {
        let card = document.createElement("div");
        card.classList.add("col-lg-6", "p-3");

        let cardInner = document.createElement("div");
        cardInner.classList.add("card", "mb-3");
        cardInner.style.maxWidth = "500px";

        let cardBody = document.createElement("div");
        cardBody.classList.add("row", "g-0");

        let imgColumn = document.createElement("div");
        imgColumn.classList.add("col-md-4");
        let img = document.createElement("img");
        img.src = book.cover;
        img.classList.add("img-fluid", "rounded-start");
        img.alt = "Book Cover";
        imgColumn.appendChild(img);
        cardBody.appendChild(imgColumn);

        let textColumn = document.createElement("div");
        textColumn.classList.add("col-md-8", "bg-warning", "bg-opacity-25");
        let cardText = document.createElement("div");
        cardText.classList.add("card-body");
        let title = document.createElement("h6");
        title.classList.add("card-title");
        title.textContent = book.name;
        let author = document.createElement("p");
        author.classList.add("card-text", "pt-2");
        author.textContent = "Yazarı: " + book.author;
        let category = document.createElement("p");
        category.classList.add("card-text");
        category.innerHTML = `<small class="text-body-secondary">Kategori: ${book.category}</small>`;
        let year = document.createElement("p");
        year.classList.add("card-text", "pb-2");
        year.innerHTML = `<small class="text-body-secondary">Yayım Tarihi: ${book.year}</small>`;
        let buttons = document.createElement("div");
        buttons.classList.add("d-flex", "justify-content-between");
        let editBtn = document.createElement("button");
        editBtn.type = "button";
        editBtn.classList.add("btn", "btn-success", "editBtn");
        editBtn.setAttribute("data-bs-toggle", "modal");
        editBtn.setAttribute("data-bs-target", "#bookModal");
        editBtn.onclick = function () {
          UI.editBook(book.id);
        };
        editBtn.textContent = "Düzenle";
        let deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.classList.add("btn", "btn-danger", "deleteBtn");
        deleteBtn.onclick = function () {
          UI.deleteBook(book.id);
        };
        deleteBtn.textContent = "Sil";
        buttons.appendChild(editBtn);
        buttons.appendChild(deleteBtn);
        cardText.appendChild(title);
        cardText.appendChild(author);
        cardText.appendChild(category);
        cardText.appendChild(year);
        cardText.appendChild(buttons);
        textColumn.appendChild(cardText);
        cardBody.appendChild(textColumn);
        cardInner.appendChild(cardBody);
        card.appendChild(cardInner);

        bookContainer.appendChild(card);
      });
    }
  }
  static bookCardCreate() {
    let bookNameValue = bookName.value;
    let bookAuthorValue = bookAuthor.value;
    let bookCategoryValue = bookCategory.value;
    let bookYearValue = bookYear.value;
    let bookCoverValue = bookCover.value;

    if (
      bookNameValue == "" ||
      bookAuthorValue == "" ||
      bookCategoryValue == "" ||
      bookYearValue == "" ||
      bookCoverValue == ""
    ) {
      alert("Lütfen tüm alanları doldurun!");
    } else {
      const newBook = new Book(
        bookNameValue,
        bookAuthorValue,
        bookCategoryValue,
        bookYearValue,
        bookCoverValue
      );
      Request.post("http://localhost:3000/books", {
        name: newBook.name,
        author: newBook.author,
        category: newBook.category,
        year: newBook.year,
        cover: newBook.cover,
      });
    }
  }
  static editBook(id) {
    updateButton.classList.remove("d-none");
    addButton.classList.add("d-none");

    function putDataIntoInputs(data) {
      bookName.value = data.name;
      bookAuthor.value = data.author;
      bookCategory.value = data.category;
      bookYear.value = data.year;
      bookCover.value = data.cover;
    }

    let updateBook = function updateBook(id) {
      function sendUpdateRequest() {
        let bookNameValue = bookName.value;
        let bookAuthorValue = bookAuthor.value;
        let bookCategoryValue = bookCategory.value;
        let bookYearValue = bookYear.value;
        let bookCoverValue = bookCover.value;

        if (
          bookNameValue == "" ||
          bookAuthorValue == "" ||
          bookCategoryValue == "" ||
          bookYearValue == "" ||
          bookCoverValue == ""
        ) {
          alert("Lütfen tüm alanları doldurun!");
        } else {
          const updatedBook = new Book(
            bookNameValue,
            bookAuthorValue,
            bookCategoryValue,
            bookYearValue,
            bookCoverValue
          );
          Request.put(`http://localhost:3000/books/${id}`, {
            name: updatedBook.name,
            author: updatedBook.author,
            category: updatedBook.category,
            year: updatedBook.year,
            cover: updatedBook.cover,
          });
        }
      }
      return sendUpdateRequest;
    };
    this.updateBook = updateBook(id);
    Request.get(`http://localhost:3000/books/${id}`).then((data) => {
      putDataIntoInputs(data);
    });
  }
  static cleanInputs() {
    bookName.value = "";
    bookAuthor.value = "";
    bookCategory.value = "";
    bookYear.value = "";
    bookCover.value = "";
  }
  static setButtonStatus() {
    addButton.classList.remove("d-none");
    updateButton.classList.add("d-none");
  }
  static deleteBook(id) {
    Request.delete(`http://localhost:3000/books/${id}`);
  }
  static requestAllDataAndDisplay() {
    Request.get("http://localhost:3000/books").then((data) =>
      this.displayAllBooksOnUI(data)
    );
  }
}

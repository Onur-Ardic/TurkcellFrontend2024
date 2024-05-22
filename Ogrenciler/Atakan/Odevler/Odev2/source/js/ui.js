class UI {
  static displayAllBooksOnUI(data) {
    while (bookContainer.firstChild) {
      bookContainer.removeChild(bookContainer.firstChild);
    }

    if (data.length > 0) {
      data.forEach((book) => {
        let card = document.createElement("div");
        card.classList.add("col-lg-6", "p-3");

        let innerDiv = document.createElement("div");
        innerDiv.classList.add("card", "mb-3");
        innerDiv.style.maxWidth = "500px";

        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row", "g-0");

        let colDiv1 = document.createElement("div");
        colDiv1.classList.add("col-md-4");

        let img = document.createElement("img");
        img.src = book.cover;
        img.classList.add("img-fluid", "rounded-start");
        img.alt = "Cover Image";

        colDiv1.appendChild(img);

        let colDiv2 = document.createElement("div");
        colDiv2.classList.add("col-md-8", "bg-warning", "bg-opacity-25");

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let title = document.createElement("h6");
        title.classList.add("card-title");
        title.textContent = book.name;

        let author = document.createElement("p");
        author.classList.add("card-text", "pt-2");
        author.textContent = "Yazarı: " + book.author;

        let category = document.createElement("p");
        category.classList.add("card-text");
        let categorySmall = document.createElement("small");
        categorySmall.classList.add("text-body-secondary");
        categorySmall.textContent = "Kategori: " + book.category;
        category.appendChild(categorySmall);

        let year = document.createElement("p");
        year.classList.add("card-text", "pb-2");
        let yearSmall = document.createElement("small");
        yearSmall.classList.add("text-body-secondary");
        yearSmall.textContent = "Yayım Tarihi: " + book.year;
        year.appendChild(yearSmall);

        let buttonDiv = document.createElement("div");
        buttonDiv.classList.add("d-flex", "justify-content-between");

        let editButton = document.createElement("button");
        editButton.type = "button";
        editButton.classList.add("btn", "btn-success", "editBtn");
        editButton.dataset.bsToggle = "modal";
        editButton.dataset.bsTarget = "#bookModal";
        editButton.onclick = () => {
          UI.editBook(book.id);
          UI.requestAllDataAndDisplay();
        };
        editButton.textContent = "Düzenle";

        let deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.classList.add("btn", "btn-danger", "deleteBtn");
        deleteButton.onclick = () => UI.deleteBook(book.id);
        deleteButton.textContent = "Sil";

        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(deleteButton);

        cardBody.appendChild(title);
        cardBody.appendChild(author);
        cardBody.appendChild(category);
        cardBody.appendChild(year);
        cardBody.appendChild(buttonDiv);

        colDiv2.appendChild(cardBody);

        rowDiv.appendChild(colDiv1);
        rowDiv.appendChild(colDiv2);

        innerDiv.appendChild(rowDiv);

        card.appendChild(innerDiv);

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

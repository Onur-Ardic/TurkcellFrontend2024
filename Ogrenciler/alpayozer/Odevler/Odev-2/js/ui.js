class UI {
  showBooks(filter = "") {
    books.innerHTML = "";
    Request.get(`http://localhost:3000/books?category=${filter}`).then(
      (book) => {
        book.forEach((element) => {
          this.addBookToUI(element);
        });
      }
    );
  }

  displayBook(book) {
    books.innerHTML = "";
    book.forEach((element) => {
      this.addBookToUI(element);
    });
  }

  tabDisplayBook(filter = "") {
    nav_roman.innerHTML = "";
    nav_gelisim.innerHTML = "";
    Request.get(`http://localhost:3000/books?category=${filter}`).then(
      (book) => {
        book.forEach((element) => {
          this.addBookToTab(element);
        });
      }
    );
  }

  createBookCard(book) {
    const column = document.createElement("div");
    column.classList.add("col-lg-2", "mb-5", "col-6", "col-md-4");

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = book.cover_image;

    const cardBody = document.createElement("div");
    cardBody.classList.add(
      "card-body",
      "text-center",
      "text-white",
      "position-absolute",
      "bottom-0"
    );

    const title = document.createElement("p");
    title.innerText = book.date;

    const author = document.createElement("p");
    author.innerText = book.author;

    const cardIcon = document.createElement("div");
    cardIcon.classList.add(
      "card-icon",
      "d-flex",
      "flex-column",
      "position-absolute"
    );

    const updateIcon = document.createElement("i");
    updateIcon.classList.add("fa-solid", "fa-pen");
    updateIcon.addEventListener("click", () => this.updateBook(book.id));

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash");
    deleteIcon.addEventListener("click", () => this.deleteBook(book.id));

    cardBody.appendChild(title);

    cardIcon.appendChild(updateIcon);
    cardIcon.appendChild(deleteIcon);

    card.appendChild(img);
    card.appendChild(cardBody);
    card.appendChild(cardIcon);

    column.appendChild(card);
    return column;
  }

  addBookToUI(book) {
    const column = this.createBookCard(book);
    books.appendChild(column);
  }

  addBookToTab(book) {
    const column = this.createBookCard(book);

    if (book.category == "Roman") {
      nav_roman.appendChild(column);
    } else if (book.category == "Kişisel Gelişim") {
      nav_gelisim.appendChild(column);
    }
  }

  deleteBook(id) {
    Request.delete(`http://localhost:3000/books/${id}`)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  addBook(book) {
    Request.post("http://localhost:3000/books", book)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  updateBook(id) {
    const bookModal = new bootstrap.Modal(
      document.getElementById("bookModal"),
      {
        keyboard: false,
      }
    );
    addBookButton.classList.add("d-none");
    updateBookButton.classList.remove("d-none");
    bookModalLabel.innerText = "Update Book";

    Request.get(`http://localhost:3000/books/${id}`)
      .then((data) => {
        title.value = data.title;
        author.value = data.author;
        publisher.value = data.publisher;
        category.value = data.category;
        date.value = data.date;
        cover_image.value = data.cover_image;
      })
      .catch((err) => {
        throw new Error(err);
      });

    bookModal.show();

    updateBookButton.addEventListener("click", () => {
      const book = new Book(
        title.value,
        author.value,
        publisher.value,
        category.value,
        date.value,
        cover_image.value
      );
      Request.put(`http://localhost:3000/books/${id}`, book)
        .then((data) => {
          return data;
        })
        .catch((err) => {
          throw new Error(err);
        });
    });
  }
}

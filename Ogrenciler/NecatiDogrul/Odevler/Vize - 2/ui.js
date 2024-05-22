class UI {
  static createElement(tag, classes = [], appendChilds = [], textContent) {
    const element = document.createElement(tag);
    element.textContent = textContent;
    classes.forEach((className) => element.classList.add(className));
    appendChilds.forEach((appendChild) => element.appendChild(appendChild));
    return element;
  }
  static addBookToUI(book) {
    const cards = document.querySelector("#cards");
    const coverImage = this.createElement("img", [
      "card-img-top",
      "object-fit-contain",
    ]);
    coverImage.style.width = "100%";
    coverImage.style.height = "100%";
    coverImage.src = book.coverImageUrl;
    const title = this.createElement("h5", ["card-title"], [], book.title);
    const author = this.createElement("p", ["card-text"], [], book.author);
    const category = this.createElement("p", ["card-text"], [], book.category);
    const publishedDate = this.createElement(
      "p",
      ["card-text"],
      [],
      book.publishedDate
    );
    const deleteButton = this.createElement(
      "button",
      ["btn", "btn-danger", "btn-md"],
      [],
      "Delete"
    );
    deleteButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.deleteBook(book.id);
    });
    const updateButton = this.createElement(
      "a",
      ["btn", "btn-primary", "btn-md", "mx-2"],
      [],
      "Update"
    );
    updateButton.addEventListener("click", () => {
      this.showUpdateModal(book);
    });
    const cardBody = this.createElement(
      "div",
      ["card-body", "col-md-6", "p-md-1", "my-auto"],
      [title, author, category, publishedDate, updateButton, deleteButton]
    );

    const imageDiv = this.createElement("div", ["col-md-6"], [coverImage]);
    const row = this.createElement(
      "div",
      ["row", "my-auto"],
      [imageDiv, cardBody]
    );
    const card = this.createElement(
      "div",
      ["card", "col-md-5", "col-sm-10", "bg-light", "flex-grow-sm-1"],
      [row]
    );
    card.setAttribute("data-id", book.id);
    cards.appendChild(card);
  }

  static displayBooks() {
    Request.get("http://localhost:3000/books")
      .then((books) => {
        books.forEach((book) => {
          const newBook = new Book(
            book.id,
            book.title,
            book.author,
            book.category,
            book.publishedDate,
            book.coverImageUrl
          );
          UI.addBookToUI(newBook);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static deleteBook(id) {
    Request.delete(`http://localhost:3000/books/${id}`)
      .then((response) => {
        if (response.ok) {
          this.removeBookFromUI(id);
          this.showAlert("danger", "Book has been deleted");
          console.log(`Book with ID ${id} has been deleted`);
        } else {
          console.log(`Failed to delete book with ID ${id}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static removeBookFromUI(id) {
    const bookCard = document.getElementById(id);
    if (bookCard) {
      bookCard.remove();
    }
  }

  static async getBookCount() {
    const allBooks = await Request.get("http://localhost:3000/books");
    return allBooks.length;
  }

  static async createBook(book) {
    return Request.post("http://localhost:3000/books", book)
      .then((response) => {
        console.log(`Book with ID ${response.id} has been created`);
        this.showAlert("success", "Book has been added successfully");
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static showUpdateModal(book) {
    document.querySelector("#updateTitle").value = book.title;
    document.querySelector("#updateAuthor").value = book.author;
    document.querySelector("#updateCategory").value = book.category;
    document.querySelector("#updatePublishedDate").value = book.publishedDate;
    document.querySelector("#updateCoverImageUrl").value = book.coverImageUrl;
    document
      .querySelector("#updateBookButton")
      .setAttribute("data-id", book.id);
    new bootstrap.Modal(document.getElementById("updateModal")).show();
  }

  static updateBook(id, updatedBook) {
    Request.put(`http://localhost:3000/books/${id}`, updatedBook)
      .then((response) => {
        console.log(`Book with ID ${id} has been updated`);
        document.querySelector("#cards").textContent = "";
        UI.displayBooks();
        this.showAlert("success", "Book has been updated successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static filterBooks(category, author) {
    Request.get("http://localhost:3000/books")
      .then((books) => {
        let filteredBooks = books;
        if (category) {
          filteredBooks = filteredBooks.filter((book) =>
            book.category.toLowerCase().includes(category.toLowerCase())
          );
        }
        if (author) {
          filteredBooks = filteredBooks.filter((book) =>
            book.author.toLowerCase().includes(author.toLowerCase())
          );
        }
        document.querySelector("#cards").innerHTML = "";
        filteredBooks.forEach((book) => {
          const newBook = new Book(
            book.id,
            book.title,
            book.author,
            book.category,
            book.publishedDate,
            book.coverImageUrl
          );
          UI.addBookToUI(newBook);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static sortBooks(books, criteria) {
    return books.sort((a, b) => {
      if (criteria === "titleAZ") {
        return a.title.localeCompare(b.title);
      } else if (criteria === "titleZA") {
        return b.title.localeCompare(a.title);
      } else if (criteria === "dateAsc") {
        return new Date(a.publishedDate) - new Date(b.publishedDate);
      } else if (criteria === "dateDesc") {
        return new Date(b.publishedDate) - new Date(a.publishedDate);
      }
      return 0;
    });
  }

  static displayBooks(sortCriteria) {
    Request.get("http://localhost:3000/books").then((books) => {
      if (sortCriteria) {
        books = UI.sortBooks(books, sortCriteria);
      }
      document.querySelector("#cards").innerHTML = "";
      books.forEach((book) => {
        const newBook = new Book(
          book.id,
          book.title,
          book.author,
          book.category,
          book.publishedDate,
          book.coverImageUrl
        );
        UI.addBookToUI(newBook);
      });
    });
  }

  static searchBooks(searchText) {
    Request.get("http://localhost:3000/books")
      .then((books) => {
        const filteredBooks = books.filter(
          (book) =>
            book.title.toLowerCase().includes(searchText) ||
            book.author.toLowerCase().includes(searchText)
        );
        document.querySelector("#cards").innerHTML = "";
        filteredBooks.forEach((book) => {
          const newBook = new Book(
            book.id,
            book.title,
            book.author,
            book.category,
            book.publishedDate,
            book.coverImageUrl
          );
          UI.addBookToUI(newBook);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static showAlert(type, message) {
    const alertDiv = this.createElement(
      "div",
      ["alert", `alert-${type}`, "alert-dismissible", "fade", "show"],
      [],
      message
    );
    const closeButton = this.createElement("button", ["btn-close"], [], "");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("data-bs-dismiss", "alert");
    closeButton.setAttribute("aria-label", "Close");
    alertDiv.appendChild(closeButton);
    const alerthtml = document.querySelector("#alerthtml");
    alerthtml.appendChild(alertDiv);
    setTimeout(() => {
      alertDiv.classList.remove("show");
      alertDiv.classList.add("hide");
      setTimeout(() => {
        alertDiv.remove();
      }, 500);
    }, 10000);
  }
}


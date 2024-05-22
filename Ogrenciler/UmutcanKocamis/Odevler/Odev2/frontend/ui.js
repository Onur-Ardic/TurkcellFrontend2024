const cards = document.getElementById("cards");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const categoryInput = document.getElementById("category");
const yearInput = document.getElementById("year");
const coverInput = document.getElementById("cover");

class UI {
  static createElement(tag, classes = [], appendChilds = [], textContent) {
    const element = document.createElement(tag);
    element.textContent = textContent;
    classes.forEach((className) => element.classList.add(className));
    appendChilds.forEach((appendChild) => element.appendChild(appendChild));
    return element;
  }
  static deleteBooksFromUI() {
    while (cards.firstChild) {
      cards.removeChild(cards.firstChild);
    }
  }
  static addBookToUI(book) {
    const cover = this.createElement("img", ["card-img-top", "img-fluid"]);
    cover.src = book.cover;
    const title = this.createElement("h4", ["card-title"], [], book.title);
    const author = this.createElement(
      "p",
      ["card-text", "text-success", "fw-semibold"],
      [],
      book.author
    );
    const category = this.createElement(
      "p",
      ["card-text", "fw-bold"],
      [],
      book.category
    );
    const year = this.createElement(
      "h5",
      ["card-text", "text-warning"],
      [],
      book.year
    );
    const deleteButton = this.createElement(
      "button",
      ["btn", "btn-danger", "btn-md", "me-2"],
      [],
      "Sil"
    );

    deleteButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.removeBookFromUI(book.id);
      this.deleteBook(book.id);
    });

    const updateButton = this.createElement(
      "a",
      ["btn", "btn-primary", "btn-md"],
      [],
      "Düzenle"
    );
    updateButton.addEventListener("click", () => {
      this.updateBook(book.id);
    });

    const cardBody = this.createElement(
      "div",
      ["card-body", "col-md-6", "p-md-2", "my-auto"],
      [title, author, category, year, deleteButton, updateButton]
    );

    const coverDiv = this.createElement("div", ["col-md-6"], [cover]);
    const row = this.createElement(
      "div",
      ["row", "my-auto"],
      [coverDiv, cardBody]
    );

    const card = this.createElement(
      "div",
      ["card", "col-12", "col-lg-4", "col-md-6"],
      [row]
    );
    cards.appendChild(card);
  }
  static allUIRemove() {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";
  }
  static displayBooks() {
    this.deleteBooksFromUI();
    Request.get("http://localhost:3000/books").then((books) => {
      books.forEach((book) => {
        const newBook = new Book(
          book.id,
          book.title,
          book.author,
          book.category,
          book.year,
          book.cover
        );
        UI.addBookToUI(newBook);
      });
    });
  }

  static deleteBook(id) {
    Request.delete(id)
      .then((response) => {
        this.displayBooks();
        if (response.ok) {
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
    const cards = document.getElementById("cards");
    const bookCards = Array.from(document.getElementsByClassName("card"));
    const bookCardToRemove = bookCards.find(
      (bookCard) => bookCard.dataset.id === id
    );
    if (bookCardToRemove) {
      cards.removeChild(bookCardToRemove);
    }
  }

  static updateBook(id) {
    Request.get(`http://localhost:3000/books/${id}`).then((book) => {
      if (!book) {
        console.log(`No book found with ID ${id}`);
        return;
      }

      titleInput.value = book.title;
      authorInput.value = book.author;
      categoryInput.value = book.category;
      yearInput.value = book.year;
      coverInput.value = book.cover;

      const bookAddModal = new bootstrap.Modal(
        document.getElementById("bookAddModal")
      );
      bookAddModal.show();

      const saveButton = document.getElementById("saveButton");
      const newSaveButton = saveButton.cloneNode(true);
      saveButton.parentNode.replaceChild(newSaveButton, saveButton);

      newSaveButton.textContent = "Değişiklikleri Kaydet";
      newSaveButton.addEventListener("click", () => {
        const updatedBook = {
          title: titleInput.value,
          author: authorInput.value,
          category: categoryInput.value,
          year: yearInput.value,
          cover: coverInput.value,
        };
        Request.put(`http://localhost:3000/books/${id}`, updatedBook)
          .then(() => {
            this.displayBooks();
            bookAddModal.hide();
            this.reset();
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
  }

  static addBook() {
    const addButton = document.getElementById("addButton");
    addButton.addEventListener("click", () => {
      const newBook = {
        id: crypto.randomUUID(),
        title: titleInput.value,
        author: authorInput.value,
        category: categoryInput.value,
        year: yearInput.value,
        cover: coverInput.value,
      };
      Request.post("http://localhost:3000/books", newBook)
        .then((response) => {
          UI.addBookToUI(newBook);
        })
        .catch((error) => {
          console.error("Error adding new book:", error);
        })
        .finally(() => {
          this.reset();
        });
    });
  }
  static reset() {
    titleInput.value = "";
    authorInput.value = "";
    categoryInput.value = "";
    yearInput.value = "";
    coverInput.value = "";
  }
}

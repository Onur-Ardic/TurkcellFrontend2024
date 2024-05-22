class Book {
  constructor(id, title, author, date, publisher, category, imageUrl) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.date = date;
    this.publisher = publisher;
    this.category = category;
    this.imageUrl = imageUrl;
  }
}

class Library {
  constructor() {
    this.books = [];
    this.filteredBooks = [];
    this.currentEditingBookId = null;
    this.init();
  }

  async init() {
    await this.fetchBooks();
    this.setupEventListeners();
  }

  async fetchBooks() {
    try {
      const response = await fetch("http://localhost:3000/books");
      const data = await response.json();
      this.books = data.map(
        (book) =>
          new Book(
            book.id,
            book.booktitle,
            book.author,
            book.date,
            book.publisher,
            book.category,
            book.imageUrl
          )
      );
      this.filteredBooks = this.books;
      this.displayBooks(this.books);
      this.populateFilters();
      this.populateCategoryDropdown();
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  setupEventListeners() {
    document
      .getElementById("saveBookButton")
      .addEventListener("click", () => this.saveBook());
    document
      .getElementById("floatingSelectGrid2")
      .addEventListener("change", () => this.applyFilters());
    document
      .getElementById("floatingSelectGrid")
      .addEventListener("change", () => this.applyFilters());
    document
      .getElementById("letterSelect")
      .addEventListener("change", () => this.applySort());
    document
      .getElementById("resetButton")
      .addEventListener("click", () => this.resetFilters());
    document
      .getElementById("searchInput")
      .addEventListener("input", () => this.searchBooks());
  }

  applyFilters() {
    const category = document.getElementById("floatingSelectGrid2").value;
    const author = document.getElementById("floatingSelectGrid").value;
    this.filteredBooks = this.books.filter(
      (book) =>
        (category === "" || book.category === category) &&
        (author === "" || book.author === author)
    );
    this.applySort();
  }

  applySort() {
    const sortCriteria = document.getElementById("letterSelect").value;
    if (sortCriteria === "1") {
      this.filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortCriteria === "2") {
      this.filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
    }
    this.displayBooks(this.filteredBooks);
  }

  resetFilters() {
    document.getElementById("floatingSelectGrid2").value = "";
    document.getElementById("floatingSelectGrid").value = "";
    document.getElementById("letterSelect").value = "Seçmek için Tıklayınız";
    this.filteredBooks = this.books;
    this.displayBooks(this.books);
  }

  searchBooks() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    this.filteredBooks = this.books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
    this.displayBooks(this.filteredBooks);
  }

  displayBooks(books) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    books.forEach((book) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("col-md-4");

      const card = document.createElement("div");
      card.classList.add(
        "row",
        "g-0",
        "border",
        "rounded",
        "overflow-hidden",
        "flex-md-row",
        "mb-4",
        "shadow-sm",
        "h-md-250",
        "position-relative"
      );

      const imgDiv = document.createElement("div");
      imgDiv.classList.add("col-auto", "col-md-4", "d-lg-block");

      const img = document.createElement("img");
      img.classList.add("img-fluid", "book-img", "h-100", "object-fit-cover");
      img.src = book.imageUrl;
      img.alt = book.title;

      imgDiv.appendChild(img);

      const cardBody = document.createElement("div");
      cardBody.classList.add(
        "col",
        "p-3",
        "d-flex",
        "flex-column",
        "position-static"
      );

      const title = document.createElement("h4");
      title.classList.add("mb-0");
      title.textContent = book.title;

      const author = document.createElement("strong");
      author.classList.add("d-inline-block", "mb-2", "text-primary-emphasis");
      author.textContent = book.author;

      const date = document.createElement("div");
      date.classList.add("mb-1", "text-body-secondary");
      date.textContent = book.date;

      const publisher = document.createElement("p");
      publisher.classList.add("card-text", "mb-auto");
      publisher.textContent = book.publisher;

      const category = document.createElement("p");
      category.classList.add("card-text", "mb-auto", "fst-italic");
      category.textContent = book.category;

      const btnGroup = document.createElement("div");
      btnGroup.classList.add("btn-group");

      const editButton = document.createElement("button");
      editButton.classList.add(
        "btn",
        "btn-sm",
        "btn-outline-secondary",
        "edit"
      );
      editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
      editButton.addEventListener("click", () =>
        this.populateEditForm(book.id)
      );

      const deleteButton = document.createElement("button");
      deleteButton.classList.add(
        "btn",
        "btn-sm",
        "btn-outline-secondary",
        "update"
      );
      deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
      deleteButton.addEventListener("click", () => this.deleteBook(book.id));

      btnGroup.appendChild(editButton);
      btnGroup.appendChild(deleteButton);

      cardBody.appendChild(title);
      cardBody.appendChild(author);
      cardBody.appendChild(date);
      cardBody.appendChild(publisher);
      cardBody.appendChild(category);
      cardBody.appendChild(btnGroup);

      card.appendChild(imgDiv);
      card.appendChild(cardBody);

      bookCard.appendChild(card);
      bookList.appendChild(bookCard);
    });
  }

  async addBook() {
    const bookTitle = document.getElementById("bookTitle").value;
    const author = document.getElementById("author").value;
    const date = new Date(document.getElementById("date_time").value)
      .getFullYear()
      .toString();
    const publisher = document.getElementById("publisher").value;
    const category = document.getElementById("categorySelect").value;
    const imageUrl = document.getElementById("imgUrl").value;

    const newBook = {
      booktitle: bookTitle,
      author: author,
      date: date,
      publisher: publisher,
      category: category,
      imageUrl: imageUrl,
    };

    try {
      const response = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });

      const book = await response.json();
      this.books.push(
        new Book(
          book.id,
          book.booktitle,
          book.author,
          book.date,
          book.publisher,
          book.category,
          book.imageUrl
        )
      );
      this.filteredBooks = this.books;
      this.displayBooks(this.books);
      this.populateFilters();
      this.populateCategoryDropdown();
    } catch (error) {
      console.error("Error adding book:", error);
    }
  }

  async saveBook() {
    if (this.currentEditingBookId) {
      this.updateBook(this.currentEditingBookId);
    } else {
      this.addBook();
    }
  }

  populateEditForm(bookId) {
    const book = this.books.find((b) => b.id === bookId);
    if (!book) return;

    document.getElementById("bookTitle").value = book.title;
    document.getElementById("author").value = book.author;
    document.getElementById("date_time").value = this.formatDateForInput(
      book.date
    );
    document.getElementById("publisher").value = book.publisher;
    document.getElementById("categorySelect").value = book.category;
    document.getElementById("imgUrl").value = book.imageUrl;

    document.getElementById("bookModal").textContent = "Kitap Güncelle";
    this.currentEditingBookId = bookId;
    const modal = new bootstrap.Modal(
      document.getElementById("staticBackdrop")
    );
    modal.show();
  }

  async updateBook(bookId) {
    const bookTitle = document.getElementById("bookTitle").value;
    const author = document.getElementById("author").value;
    const date = new Date(document.getElementById("date_time").value)
      .getFullYear()
      .toString();
    const publisher = document.getElementById("publisher").value;
    const category = document.getElementById("categorySelect").value;
    const imageUrl = document.getElementById("imgUrl").value;

    const updatedBook = {
      booktitle: bookTitle,
      author: author,
      date: date,
      publisher: publisher,
      category: category,
      imageUrl: imageUrl,
    };

    try {
      await fetch(`http://localhost:3000/books/${bookId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBook),
      });

      const bookIndex = this.books.findIndex((b) => b.id === bookId);
      this.books[bookIndex] = new Book(
        bookId,
        bookTitle,
        author,
        date,
        publisher,
        category,
        imageUrl
      );
      this.filteredBooks = this.books;
      this.displayBooks(this.books);
      this.populateFilters();
      this.populateCategoryDropdown();
      this.currentEditingBookId = null;
      document.getElementById("bookModal").textContent = "Kitap Ekle";
    } catch (error) {
      console.error("Error updating book:", error);
    }
  }

  async deleteBook(bookId) {
    try {
      await fetch(`http://localhost:3000/books/${bookId}`, {
        method: "DELETE",
      });
      this.books = this.books.filter((book) => book.id !== bookId);
      this.filteredBooks = this.books;
      this.displayBooks(this.books);
      this.populateFilters();
      this.populateCategoryDropdown();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

  populateFilters() {
    const categories = [...new Set(this.books.map((book) => book.category))];
    const authors = [...new Set(this.books.map((book) => book.author))];

    const categorySelect = document.getElementById("floatingSelectGrid2");
    categorySelect.innerHTML = '<option value="">Kategori Seçiniz</option>';
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });

    const authorSelect = document.getElementById("floatingSelectGrid");
    authorSelect.innerHTML = '<option value="">Yazar Seçiniz</option>';
    authors.forEach((author) => {
      const option = document.createElement("option");
      option.value = author;
      option.textContent = author;
      authorSelect.appendChild(option);
    });
  }

  populateCategoryDropdown() {
    const categories = [...new Set(this.books.map((book) => book.category))];
    const categorySelect = document.getElementById("categorySelect");
    categorySelect.innerHTML =
      '<option value="" selected>Kategori Seçiniz</option>';
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });
  }

  formatDateForInput(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const library = new Library();
});

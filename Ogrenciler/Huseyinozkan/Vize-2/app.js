class Book {
  constructor(id, name, author, category, dateWritten, coverImageUrl) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.category = category;
    this.dateWritten = dateWritten;
    this.coverImageUrl = coverImageUrl;
  }
}

class Library {
  constructor(request) {
    this.request = request;
    this.books = [];
    this.filteredBooks = [];
    this.initializeEventListeners();
    this.fetchBooks();
  }

  async fetchBooks() {
    this.books = await this.request.get("/books");
    this.filteredBooks = this.books;
    this.displayBooks();
    this.populateFilters();
  }

  async addBook(book) {
    const newBook = await this.request.post("/books", book);
    this.books.push(newBook);
    this.filteredBooks = this.books;
    this.displayBooks();
    this.populateFilters();
  }

  async deleteBook(id) {
    await this.request.delete(`/books/${id}`);
    this.books = this.books.filter((book) => book.id !== id);
    this.filteredBooks = this.books;
    this.displayBooks();
  }

  async updateBook(updatedBook) {
    const updated = await this.request.put(
      `/books/${updatedBook.id}`,
      updatedBook
    );
    const index = this.books.findIndex((book) => book.id === updatedBook.id);
    this.books[index] = updated;
    this.filteredBooks = this.books;
    this.displayBooks();
  }

  searchBooks(query) {
    query = query.toLowerCase();
    this.filteredBooks = this.books.filter(
      (book) =>
        book.name.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
    this.displayBooks();
  }

  filterBooks(category, author) {
    this.filteredBooks = this.books.filter(
      (book) =>
        (category ? book.category === category : true) &&
        (author ? book.author === author : true)
    );
    this.displayBooks();
  }

  sortBooks(order) {
    switch (order) {
      case "az":
        this.filteredBooks.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        this.filteredBooks.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "date":
        this.filteredBooks.sort(
          (a, b) => new Date(a.dateWritten) - new Date(b.dateWritten)
        );
        break;
    }
    this.displayBooks();
  }

  populateFilters() {
    const categories = [...new Set(this.books.map((book) => book.category))];
    const authors = [...new Set(this.books.map((book) => book.author))];

    this.populateSelect(document.getElementById("categoryFilter"), categories);
    this.populateSelect(document.getElementById("authorFilter"), authors);
  }

  populateSelect(selectElement, options) {
    selectElement.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "All";
    selectElement.appendChild(defaultOption);

    options.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      selectElement.appendChild(opt);
    });
  }

  displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    this.filteredBooks.forEach((book) => {
      const bookCard = this.createBookCard(book);
      bookList.appendChild(bookCard);
    });
  }

  createBookCard(book) {
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-3 mb-4";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    const img = document.createElement("img");
    img.src = book.coverImageUrl;
    img.className = "card-img-top";
    img.alt = book.name;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = book.name;

    const author = document.createElement("p");
    author.className = "card-text";
    author.textContent = `Author: ${book.author}`;

    const category = document.createElement("p");
    category.className = "card-text";
    category.textContent = `Category: ${book.category}`;

    const dateWritten = document.createElement("p");
    dateWritten.className = "card-text";
    dateWritten.textContent = `Date Written: ${book.dateWritten}`;

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger me-2";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => this.deleteBook(book.id);

    const updateButton = document.createElement("button");
    updateButton.className = "btn btn-primary";
    updateButton.textContent = "Update";
    updateButton.onclick = () => this.showUpdateModal(book.id);

    cardBody.appendChild(title);
    cardBody.appendChild(author);
    cardBody.appendChild(category);
    cardBody.appendChild(dateWritten);
    cardBody.appendChild(deleteButton);
    cardBody.appendChild(updateButton);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(cardDiv);

    return colDiv;
  }

  showUpdateModal(id) {
    const book = this.books.find((book) => book.id === id);
    document.getElementById("bookName").value = book.name;
    document.getElementById("author").value = book.author;
    document.getElementById("category").value = book.category;
    document.getElementById("dateWritten").value = book.dateWritten;
    document.getElementById("coverImageUrl").value = book.coverImageUrl;
    document.getElementById("bookForm").dataset.id = book.id;
    const addBookModal = new bootstrap.Modal(
      document.getElementById("addBookModal")
    );
    addBookModal.show();
  }

  initializeEventListeners() {
    document.getElementById("bookForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const id = document.getElementById("bookForm").dataset.id;
      const book = new Book(
        id || Date.now(),
        document.getElementById("bookName").value,
        document.getElementById("author").value,
        document.getElementById("category").value,
        document.getElementById("dateWritten").value,
        document.getElementById("coverImageUrl").value
      );
      if (id) {
        this.updateBook(book);
      } else {
        this.addBook(book);
      }
      document.getElementById("bookForm").reset();
      delete document.getElementById("bookForm").dataset.id;
      const addBookModal = new bootstrap.Modal(
        document.getElementById("addBookModal")
      );
      addBookModal.hide();
    });

    document.getElementById("searchInput").addEventListener("input", (e) => {
      this.searchBooks(e.target.value);
    });

    document
      .getElementById("categoryFilter")
      .addEventListener("change", (e) => {
        this.filterBooks(
          e.target.value,
          document.getElementById("authorFilter").value
        );
      });

    document.getElementById("authorFilter").addEventListener("change", (e) => {
      this.filterBooks(
        document.getElementById("categoryFilter").value,
        e.target.value
      );
    });

    document.getElementById("sortOrder").addEventListener("change", (e) => {
      this.sortBooks(e.target.value);
    });
  }
}

const library = new Library(request);

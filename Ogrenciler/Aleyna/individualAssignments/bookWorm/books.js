class Books {
  constructor(books) {
    this.books = books;
  }

  addBook(book) {
    this.books.push(book);
    localStorage.setItem("books", JSON.stringify(this.books));
    ui.displayBooks({}, this.books);
  }

  updateBook(updatedBook) {
    this.books = this.books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    localStorage.setItem("books", JSON.stringify(this.books));
    ui.displayBooks({}, this.books);
  }

  deleteBook(id) {
    let index = this.books.findIndex((book) => book.id == id);
    this.books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(this.books));
    ui.displayBooks({}, this.books);
  }

  getBook(id) {
    return this.books.find((book) => book.id === id);
  }
}

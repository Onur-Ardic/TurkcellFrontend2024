class Book {
  constructor(id, bookName, author, category, writtenDate, coverImage) {
    this.id = id;
    this.bookName = bookName;
    this.author = author;
    this.category = category;
    this.writtenDate = writtenDate;
    this.coverImage = coverImage;
  }
}

class BookList {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  deleteBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }

  searchBookList(searchText) {
    return this.books.filter(
      (book) =>
        book.bookName.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}

class BookProcessor {
  static async sortBooksAsc() {
    const booksArray = await Request.get("http://localhost:3000/books");
    booksArray.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    });
    return booksArray;
  }
  static async sortBooksDesc() {
    const booksArray = await Request.get("http://localhost:3000/books");
    booksArray.sort((a, b) => {
      if (a.title > b.title) {
        return -1;
      } else if (a.title < b.title) {
        return 1;
      } else {
        return 0;
      }
    });
    return booksArray;
  }
  static async sortBooksDate() {
    const booksArray = await Request.get("http://localhost:3000/books");
    booksArray.sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      } else if (a.date < b.date) {
        return 1;
      } else {
        return 0;
      }
    });
    return booksArray;
  }

  static async filterBooksCategory(category) {
    const booksArray = await Request.get(
      `http://localhost:3000/books?category=${category}`
    );
    return booksArray;
  }
  static async filterBooksAuthor(author) {
    const booksArray = await Request.get(
      `http://localhost:3000/books?author=${author}`
    );
    return booksArray;
  }
  static async filterBooksPublisher(publisher) {
    const booksArray = await Request.get(
      `http://localhost:3000/books?publisher=${publisher}`
    );
    return booksArray;
  }
  static async searchBooks(search) {
    const booksArray = await Request.get(`http://localhost:3000/books`);
    let bookArray = [];
    booksArray.filter((book) => {
      if (
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
      ) {
        bookArray.push(book);
        return book;
      } else {
        return;
      }
    });
    return bookArray;
  }
  static async bookSorting(sortParam) {
    let kitaplar;
    if (sortParam == 0) {
      ui.showBooks();
      return;
    } else if (sortParam == 1) {
      kitaplar = await BookProcessor.sortBooksAsc();
    } else if (sortParam == 2) {
      kitaplar = await BookProcessor.sortBooksDesc();
    } else if (sortParam == 3) {
      kitaplar = await BookProcessor.sortBooksDate();
    }
    ui.displayBook(kitaplar);
  }
  static async searchInput() {
    const bookDeneme = await BookProcessor.searchBooks(searchBookInput.value);
    ui.displayBook(bookDeneme);
  }
}

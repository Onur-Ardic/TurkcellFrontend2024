class Library {
  constructor() {
    this.books = [];
    this.initStart();
  }

  async initStart() {
    await this.fetchBooks();
  }

  async fetchBooks() {
    const response = await fetch('http://localhost:3000/books');
    this.books = await response.json();
  }
  async getBookById(id) {
    const response = await fetch(`http://localhost:3000/books/${id}`);
    return response.json();
  }
  async addBook(book) {
    const response = await fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    const newBook = await response.json();
    this.books.push(newBook);
  }

  async deleteBook(id) {
    await fetch(`http://localhost:3000/books/${id}`, { method: 'DELETE' });
    this.books = this.books.filter((book) => book.id !== id);
  }

  async updateBook(id, updatedBook) {
    const response = await fetch(`http://localhost:3000/books/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify(updatedBook),
    });
    const newBook = await response.json();
    this.books = this.books.map((book) => (book.id === id ? newBook : book));
  }

  getCategories() {
    const categories = [];
    this.books.forEach((book) => {
      if (!categories.includes(book.category)) {
        categories.push(book.category);
      }
    });
    return categories;
  }

  getAuthors() {
    const authors = [];
    this.books.forEach((book) => {
      if (!authors.includes(book.author)) {
        authors.push(book.author);
      }
    });
    return authors;
  }

  getBooks() {
    return this.books;
  }
}

export default Library;

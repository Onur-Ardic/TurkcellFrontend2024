class Filter {
  constructor() {
    this.books = [];
  }

  setBooks(books) {
    this.books = books;
    this.loadAuthors();
    this.filterBooks();
  }

  loadAuthors() {
    const authors = [...new Set(this.books.map(book => book.author))]; 
    const authorSelect = document.getElementById('filter-author');
    authorSelect.innerHTML = '<option value="">Yazar</option>'; 

    authors.forEach(author => {
      const option = document.createElement('option');
      option.value = author;
      option.textContent = author;
      authorSelect.appendChild(option);
    });
  }

  filterBooks() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const selectedCategory = document.getElementById('filter-category').value;
    const selectedAuthor = document.getElementById('filter-author').value;

    let filteredBooks = this.books;

    if (searchTerm) {
      filteredBooks = filteredBooks.filter(book => book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm));
    }

    if (selectedCategory) {
      filteredBooks = filteredBooks.filter(book => book.category === selectedCategory);
    }

    if (selectedAuthor) {
      filteredBooks = filteredBooks.filter(book => book.author === selectedAuthor);
    }

    const ui = new UI();
    ui.displayBooks(filteredBooks);
  }

  sortBooks() {
    const sortOption = document.getElementById('sort-books').value;

    this.books.sort((a, b) => {
      if (a[sortOption] < b[sortOption]) return -1;
      if (a[sortOption] > b[sortOption]) return 1;
      return 0;
    });

    this.filterBooks();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  const filter = new Filter();

  ui.request.fetchBooks()
    .then(books => {
      ui.displayBooks(books);
      filter.setBooks(books);
    });

  ui.setupFilters(filter);
});
